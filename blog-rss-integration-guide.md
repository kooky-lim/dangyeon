# 네이버 블로그 RSS 연동 가이드

네이버 블로그의 글을 홈페이지에 자동으로 표시하는 방법입니다. 서버에서 RSS를 파싱하고 이미지를 다운로드해 정적 파일로 저장하는 방식을 사용합니다.

---

## 전체 흐름

```
네이버 RSS → fetch-blog.js 실행 → posts.json 생성 + 이미지 다운로드
                                         ↓
                              프론트엔드에서 /posts.json fetch → 카드 렌더링
```

---

## 1. RSS 주소 확인

네이버 블로그의 RSS 주소 형식은 다음과 같습니다.

```
https://rss.blog.naver.com/{블로그아이디}
```

예: `https://rss.blog.naver.com/deeptrade`

브라우저에서 직접 열어 XML이 정상적으로 나오면 사용 가능합니다.

---

## 2. RSS 파싱 + 이미지 다운로드 스크립트

`scripts/fetch-blog.js` 로 저장합니다.

```javascript
#!/usr/bin/env node
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ★ 여기만 수정
const RSS_URL = 'https://rss.blog.naver.com/{블로그아이디}';

const IMAGES_DIR = process.env.BLOG_IMAGES_DIR || path.join(__dirname, '..', 'public', 'blog-images');
const POSTS_JSON = process.env.POSTS_JSON_PATH || path.join(__dirname, '..', 'public', 'posts.json');

// 리다이렉트 + 네이버 Referer 처리가 포함된 HTTP 요청 함수
function request(targetUrl) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(targetUrl);
    const lib = parsed.protocol === 'https:' ? https : http;
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml,image/*,*/*;q=0.8',
        'Referer': 'https://blog.naver.com/',
      },
    };
    lib.get(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const location = res.headers.location;
        const next = location.startsWith('http') ? location : `${parsed.protocol}//${parsed.host}${location}`;
        res.resume();
        return resolve(request(next));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({
        status: res.statusCode,
        data: Buffer.concat(chunks),
        contentType: res.headers['content-type'] || '',
      }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function unwrapCDATA(str) {
  const m = str.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return m ? m[1].trim() : str.trim();
}

function extractTag(xml, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = xml.match(re);
  return m ? unwrapCDATA(m[1]) : '';
}

function extractAllTags(xml, tag) {
  const re = new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const results = [];
  let m;
  while ((m = re.exec(xml)) !== null) results.push(unwrapCDATA(m[1]));
  return results;
}

function extractThumbnail(html) {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

function extractText(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

async function downloadImage(imageUrl) {
  const hash = md5(imageUrl);
  const filename = `${hash}.jpg`;
  const filepath = path.join(IMAGES_DIR, filename);

  if (fs.existsSync(filepath)) return `/blog-images/${filename}`;

  try {
    const res = await request(imageUrl);
    if (res.status !== 200) return null;
    fs.writeFileSync(filepath, res.data);
    console.log(`  [saved] ${filename}`);
    return `/blog-images/${filename}`;
  } catch (e) {
    console.error(`  [error] ${e.message}`);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

  const rss = await request(RSS_URL);
  if (rss.status !== 200) throw new Error(`RSS fetch failed: HTTP ${rss.status}`);

  const xml = rss.data.toString('utf-8');

  let existing = [];
  try { existing = JSON.parse(fs.readFileSync(POSTS_JSON, 'utf-8')); } catch (_) {}
  const existingLinks = new Set(existing.map((p) => p.link));

  const rawItems = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = itemRe.exec(xml)) !== null) rawItems.push(m[1]);

  let newCount = 0;
  const posts = [];
  for (const raw of rawItems) {
    const title = extractTag(raw, 'title');
    const link = extractTag(raw, 'link') || extractTag(raw, 'guid');
    const pubDate = extractTag(raw, 'pubDate');
    const description = extractTag(raw, 'description');
    const categories = extractAllTags(raw, 'category');

    const thumbnailUrl = extractThumbnail(description);
    const summary = extractText(description).slice(0, 150);
    const date = pubDate ? new Date(pubDate).toISOString() : '';

    let image = null;
    if (thumbnailUrl) image = await downloadImage(thumbnailUrl);

    if (!existingLinks.has(link)) {
      newCount++;
      console.log(`  [new] ${title}`);
    }

    posts.push({ title, link, date, summary, image, categories });
  }

  fs.writeFileSync(POSTS_JSON, JSON.stringify(posts, null, 2), 'utf-8');
  return { total: posts.length, newCount };
}

if (require.main === module) {
  main()
    .then(({ total, newCount }) => console.log(`Done — ${total} posts (${newCount} new)`))
    .catch((e) => { console.error('Failed:', e.message); process.exit(1); });
}

module.exports = { main };
```

**이미지를 별도 다운로드하는 이유**: 네이버 블로그 이미지는 `Referer` 헤더가 없으면 차단됩니다. 브라우저에서 직접 `<img src="네이버URL">` 로 불러오면 깨지기 때문에, 서버에서 미리 다운로드해 자체 서버에서 제공해야 합니다.

실행하면 다음 파일이 생성됩니다.

```
public/
  posts.json          ← 블로그 글 목록 (제목, 링크, 날짜, 요약, 이미지 경로)
  blog-images/
    a3f2c1d4...jpg    ← 이미지를 URL의 MD5 해시명으로 저장
    b9e8a7f3...jpg
```

`posts.json` 한 항목 예시:

```json
{
  "title": "AI가 관리하는 내 연금",
  "link": "https://blog.naver.com/deeptrade/...",
  "date": "2025-03-10T00:00:00.000Z",
  "summary": "본문 앞 150자...",
  "image": "/blog-images/a3f2c1d4.jpg",
  "categories": ["금융 AI", "연금"]
}
```

---

## 3. 주기적 자동 업데이트 (watcher 데몬)

`scripts/blog-watcher.js` 로 저장합니다.

```javascript
#!/usr/bin/env node
const { main } = require('./fetch-blog');

const INTERVAL_MS = parseInt(process.env.FETCH_INTERVAL_MS, 10) || 60 * 60 * 1000; // 기본 1시간

function log(msg) {
  console.log(`[${new Date().toISOString()}] ${msg}`);
}

async function loop() {
  log('Checking RSS...');
  try {
    const { total, newCount } = await main();
    log(newCount > 0
      ? `Done — ${newCount} new post(s) added (total: ${total})`
      : `Done — no new posts (total: ${total})`
    );
  } catch (e) {
    log(`Error: ${e.message}`);
  }
  log(`Next check in ${INTERVAL_MS / 60000} min`);
  setTimeout(loop, INTERVAL_MS);
}

loop();
```

서버에서 PM2로 실행합니다.

```bash
# 설치 (최초 1회)
npm install -g pm2

# 시작
pm2 start scripts/blog-watcher.js --name blog-watcher

# 서버 재시작 시 자동 실행 등록
pm2 save
pm2 startup

# 상태 확인
pm2 status
pm2 logs blog-watcher
```

주기를 변경하고 싶으면 환경변수로 조절합니다.

```bash
# 30분마다 실행
FETCH_INTERVAL_MS=1800000 pm2 start scripts/blog-watcher.js --name blog-watcher
```

---

## 4. package.json 스크립트 등록

```json
{
  "scripts": {
    "fetch-blog": "node scripts/fetch-blog.js",
    "watch-blog": "node scripts/blog-watcher.js"
  }
}
```

- `npm run fetch-blog` — 지금 즉시 한 번만 실행 (초기 세팅 또는 수동 갱신)
- `npm run watch-blog` — 데몬으로 실행 (PM2 없이 테스트할 때)

---

## 5. 프론트엔드에서 데이터 사용

빌드 도구(React, Next.js, Vue 등)에 관계없이 `public/posts.json`을 fetch로 읽어옵니다.

```javascript
useEffect(() => {
  fetch('/posts.json')
    .then(r => r.json())
    .then(posts => {
      // 카테고리 필터링 예시 — 필요 없으면 그냥 posts 전체 사용
      const filtered = posts.filter(post =>
        (post.categories || []).some(c => c.includes('원하는카테고리'))
      );
      setPosts(filtered);
    });
}, []);
```

이미지는 `post.image` 값이 `/blog-images/abc123.jpg` 형태이므로 그대로 `<img src={post.image}>` 로 사용하면 됩니다. `null`인 경우 이미지가 없는 글이니 플레이스홀더를 대신 표시하면 됩니다.

---

## 6. 배포 시 주의사항

`blog-images/`와 `posts.json`은 서버가 PM2로 지속적으로 갱신하는 파일입니다. 새 버전 배포 시 이 파일들을 덮어쓰지 않도록 rsync에서 제외해야 합니다.

```bash
rsync -av --delete \
  --exclude='blog-images/' \
  --exclude='posts.json' \
  ./build/ user@server:/var/www/html/
```

덮어쓰면 서버에 쌓인 최신 이미지와 글 목록이 오래된 버전으로 되돌아가는 문제가 생깁니다.

---

## 요약

| 단계 | 파일 | 역할 |
|------|------|------|
| RSS 파싱 + 이미지 다운로드 | `scripts/fetch-blog.js` | 핵심 로직 |
| 주기적 자동 실행 | `scripts/blog-watcher.js` | PM2 데몬 |
| 데이터 소비 | 프론트엔드에서 `/posts.json` fetch | 화면 렌더링 |
