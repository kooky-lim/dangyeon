# 당연 (Dangyeon) Design System
> Claude Code 작업 시 이 파일을 참조하세요.
> 폰트: **Pretendard** 단일 사용. 네이버웍스 스타일 기반 라이트 테마.

---

## 1. Typography

```css
/* Import */
@import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700;800&display=swap');

font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
-webkit-font-smoothing: antialiased;
```

### Scale

| Token         | Size  | Weight | Letter-spacing | Usage                  |
|---------------|-------|--------|----------------|------------------------|
| `hero`        | 52px  | 800    | -2px           | 히어로 제목             |
| `display`     | 40px  | 800    | -1.5px         | 섹션 제목               |
| `title-lg`    | 28px  | 800    | -1px           | 카드 타이틀, 뉴스 헤더  |
| `title`       | 22px  | 800    | -0.8px         | 카드 제목               |
| `title-sm`    | 18px  | 700    | -0.5px         | 서브 제목               |
| `body-lg`     | 17px  | 400    | 0              | 섹션 설명               |
| `body`        | 15px  | 400    | 0              | 본문                    |
| `body-sm`     | 14px  | 400    | 0              | 보조 본문               |
| `caption`     | 13px  | 500    | 0              | 캡션, 날짜              |
| `label`       | 12px  | 700    | 0.3px          | eyebrow, 태그, 레이블  |
| `micro`       | 11px  | 600    | 0.3px          | 뱃지, 칩               |

### Line Height
- 제목류: `1.2`
- 본문: `1.7`
- 카드 설명: `1.65`

---

## 2. Color

### Brand Colors
```css
--mint:       #1EC9AF;   /* Primary — 버튼, 강조, 링크 */
--mint-deep:  #0FA18F;   /* Hover 상태 */
--mint-light: #A7F1E7;   /* 연한 민트 — 아이콘 BG 등 */
--mint-bg:    #E8FAF6;   /* 민트 배경 (카드, 섹션) */
--mint-pale:  #F0FDFB;   /* 아주 연한 민트 */
```

### Neutrals
```css
--charcoal:  #1A1A1A;   /* 기본 텍스트, primary 버튼 BG */
--gray-700:  #3D3D3D;   /* 서브 텍스트 */
--gray-500:  #767676;   /* 설명 텍스트 */
--gray-400:  #9E9E9E;   /* placeholder, 날짜 */
--gray-200:  #E0E0E0;   /* border */
--gray-100:  #F5F5F5;   /* hover BG, 입력 BG */
--gray-50:   #FAFAFA;   /* 섹션 BG, 카드 BG */
--white:     #FFFFFF;
```

### Semantic
```css
--color-success:  #1EC9AF;   /* = mint */
--color-error:    #FF4242;
--color-warning:  #FFA94D;
--color-info:     #4780FF;
```

### Section Background 규칙
| 섹션 유형         | 배경색          | 비고                   |
|------------------|----------------|------------------------|
| 기본 콘텐츠       | `#FFFFFF`      |                        |
| 보조 콘텐츠       | `#FAFAFA`      | FAQ, contact 등        |
| 플랫폼/How-to    | `#F0F4F8`      | 라이트 블루그레이       |
| 다크 (통계, CTA) | `#1A1A1A`      | 흰 텍스트              |
| CTA (민트)        | `#1EC9AF`      | 흰 텍스트              |
| 히어로 슬라이드 1 | `#F4F9FF`      | 연 블루                |
| 히어로 슬라이드 2 | `#E8FAF6`      | 민트 bg                |
| 히어로 슬라이드 3 | `#FFF8F0`      | 웜 화이트              |

---

## 3. Spacing

8pt 기반 스케일 사용.

```css
--sp-4:   4px
--sp-8:   8px
--sp-12:  12px
--sp-16:  16px
--sp-20:  20px
--sp-24:  24px
--sp-28:  28px
--sp-32:  32px
--sp-40:  40px
--sp-48:  48px
--sp-56:  56px
--sp-64:  64px
--sp-80:  80px
--sp-100: 100px
```

### Section Padding
```css
/* 일반 섹션 */
padding: 100px 32px;

/* 컴팩트 섹션 (news, contact) */
padding: 80px 32px;

/* 다크 섹션 하단 통계 */
padding: 0 32px 80px;
```

### Container
```css
.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
}
```

---

## 4. Border Radius

```css
--radius-sm:  8px    /* 버튼, 작은 요소 */
--radius-md:  12px   /* 입력 필드, 칩 */
--radius-lg:  16px   /* 카드, 뉴스 아이템 */
--radius-xl:  24px   /* 큰 카드, 제품 카드 */
--radius-2xl: 32px   /* Hero, CTA 섹션 내부 */
--radius-full: 9999px /* 뱃지, 태그, pill */
```

---

## 5. Shadow

```css
--shadow-sm:    0 1px 4px rgba(0,0,0,0.06);
--shadow-card:  0 2px 16px rgba(0,0,0,0.07);
--shadow-hover: 0 8px 32px rgba(0,0,0,0.12);
--shadow-modal: 0 16px 48px rgba(0,0,0,0.16);
```

---

## 6. Components

### 6-1. Navigation

```
Height: 64px
BG: rgba(255,255,255,0.95) + backdrop-filter: blur(12px)
Border-bottom: 1px solid var(--gray-200)
Position: fixed, top:0, z-index:200
```

**요소 구성**
- 좌: 로고 (로고마크 30×30 + 텍스트)
- 중: 메뉴 링크 (14px, weight 500, gap 32px)
- 우: 로그인(텍스트버튼) + 앱 다운로드(mint 버튼)

```css
/* 메뉴 링크 */
font-size: 14px;
font-weight: 500;
color: #3D3D3D;
/* hover */
color: #1EC9AF;
```

---

### 6-2. Button

#### Primary (다크)
```css
padding: 9px 20px;
font-size: 14px;
font-weight: 700;
color: white;
background: #1A1A1A;
border-radius: 8px;
border: none;
/* hover */
background: #3D3D3D;
```

#### Mint
```css
background: #1EC9AF;
color: white;
/* hover */
background: #0FA18F;
```

#### Ghost
```css
background: white;
color: #3D3D3D;
border: 1px solid #E0E0E0;
/* hover */
border-color: #9E9E9E;
```

#### Text
```css
background: none;
border: none;
color: #3D3D3D;
border-radius: 8px;
padding: 8px 16px;
/* hover */
background: #F5F5F5;
```

#### Size 규칙
| Size   | Padding       | Font  | Radius |
|--------|---------------|-------|--------|
| sm     | 6px 14px      | 13px  | 6px    |
| md     | 9px 20px      | 14px  | 8px    |
| lg     | 12px 24px     | 14px  | 10px   |
| xl     | 16px 36px     | 16px  | 12px   |

---

### 6-3. Hero Slider

```
높이: 480px
슬라이드 전환: transform translateX, 0.6s cubic-bezier(0.4,0,0.2,1)
자동 전환: 5초 간격
```

**구성 요소**
- `eyebrow` 태그 (민트 pill 배경)
- `h1` 슬라이드 제목 — 36px, weight 800, letter-spacing -1.5px
- 설명 텍스트 — 16px, color gray-500
- CTA 버튼 1~2개
- 우측: 시각적 UI 목업 (선택)
- 하단 dot 네비게이션 + 좌우 화살표

**Dot**
```css
/* 기본 */
width: 6px; height: 6px; border-radius: 50%; background: #C8C8C8;
/* active */
width: 24px; border-radius: 3px; background: #1A1A1A;
transition: all 0.3s;
```

---

### 6-4. Product Card (Bento Grid)

네이버웍스 제품 섹션 스타일.

```css
/* 카드 공통 */
border-radius: 24px;
border: 1px solid #E0E0E0;
padding: 40px 40px 0;
background: #FAFAFA;
overflow: hidden;
transition: box-shadow 0.25s, transform 0.25s;
/* hover */
box-shadow: 0 8px 32px rgba(0,0,0,0.12);
transform: translateY(-2px);
```

**그리드 패턴**
```css
/* 2열 그리드 */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;

/* span 2: 전체 너비 big card */
grid-column: 1 / 3;
```

**카드 내부 구조**
```
tag (eyebrow pill)
→ title (22px, 800)
→ desc (14px, gray-500)
→ link (13px, 700, "자세히 보기 →")
→ card-visual (하단 UI 목업, 높이 140~200px)
```

**card-visual 배경색 조합**
| 카드 유형   | 배경색    |
|------------|----------|
| AI 투자    | `#F0FDFB` (민트 pale) |
| 간편 가입  | `#F4F9FF` (연 블루) |
| 수익률     | `#F9F4FF` (연 라벤더) |

---

### 6-5. Section Header (eyebrow pattern)

```html
<span class="eyebrow">태그명</span>
<h2 class="section-title">제목</h2>
<p class="section-desc">설명</p>
```

```css
.eyebrow {
  font-size: 13px;
  font-weight: 700;
  color: #1EC9AF;
  letter-spacing: 0.3px;
  display: block;
  margin-bottom: 12px;
}
.section-title {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.2;
  color: #1A1A1A;
  margin-bottom: 14px;
}
.section-desc {
  font-size: 17px;
  line-height: 1.7;
  color: #767676;
}
```

**다크 섹션에서는:**
```css
.section-title { color: white; }
.section-desc  { color: rgba(255,255,255,0.5); }
.eyebrow       { color: #1EC9AF; }
```

---

### 6-6. Stats Bar (다크 배경)

```css
/* 래퍼 */
background: #1A1A1A;
padding: 0 32px 80px;
border-top: 1px solid rgba(255,255,255,0.06);

/* 그리드 */
display: grid;
grid-template-columns: repeat(4, 1fr);
padding: 48px 0;

/* 구분선 */
border-right: 1px solid rgba(255,255,255,0.08);
```

```css
/* 숫자 */
.stat-num {
  font-size: 52px;
  font-weight: 800;
  color: white;
  letter-spacing: -2px;
}
.stat-num span { color: #1EC9AF; } /* 단위 강조 */

.stat-label  { font-size: 13px; color: rgba(255,255,255,0.4); }
.stat-source { font-size: 11px; color: rgba(255,255,255,0.2); }
```

---

### 6-7. Card (Solution / 일반)

```css
border-radius: 16px;
background: rgba(255,255,255,0.06);   /* 다크 섹션 */
border: 1px solid rgba(255,255,255,0.08);
padding: 28px 24px;
transition: all 0.25s;
/* hover */
background: rgba(255,255,255,0.10);
transform: translateY(-4px);
```

라이트 섹션에서는:
```css
background: #FAFAFA;
border: 1px solid #E0E0E0;
/* hover */
box-shadow: 0 8px 32px rgba(0,0,0,0.12);
transform: translateY(-2px);
```

---

### 6-8. FAQ Accordion

```css
/* 아이템 */
border-bottom: 1px solid #E0E0E0;
overflow: hidden;

/* 질문 버튼 */
padding: 20px 0;
font-size: 15px;
font-weight: 600;
color: #1A1A1A;
display: flex;
justify-content: space-between;
align-items: center;
background: none;
border: none;
width: 100%;
font-family: inherit;
cursor: pointer;

/* '+' 아이콘 */
content: '+';
font-size: 22px;
font-weight: 300;
color: #9E9E9E;
transition: transform 0.25s;
/* open 상태 */
transform: rotate(45deg);
color: #1EC9AF;

/* 답변 */
display: none;
padding-bottom: 20px;
font-size: 14px;
line-height: 1.75;
color: #767676;
/* .open일 때 display: block */
```

---

### 6-9. News/Notice Tab

```css
/* 탭 컨테이너 */
border-bottom: 1px solid #E0E0E0;
display: flex;

/* 탭 버튼 */
padding: 12px 20px;
font-size: 14px;
font-weight: 600;
color: #9E9E9E;
border: none;
background: none;
border-bottom: 2px solid transparent;
margin-bottom: -1px;
transition: all 0.15s;
/* active */
color: #1A1A1A;
border-bottom-color: #1A1A1A;
```

**뉴스 아이템**
```css
display: flex;
justify-content: space-between;
align-items: flex-start;
padding: 18px 0;
border-bottom: 1px solid #F5F5F5;
gap: 24px;
```

---

### 6-10. CTA Section (민트 배경)

```css
background: #1EC9AF;
padding: 80px 32px;
text-align: center;

.cta-title {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.15;
  color: white;
}

/* 버튼: 화이트 */
background: white;
color: #0FA18F;
border-radius: 10px;
padding: 14px 32px;
font-size: 15px;
font-weight: 700;
```

---

### 6-11. Marquee (로고 스크롤)

```css
overflow: hidden;
padding: 28px 0;
border-bottom: 1px solid #E0E0E0;

.marquee-inner {
  display: flex;
  gap: 64px;
  align-items: center;
  animation: marqueeScroll 20s linear infinite;
  width: max-content;
}

@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-logo {
  font-size: 14px;
  font-weight: 700;
  color: #C0C0C0;
  white-space: nowrap;
}
```

---

### 6-12. Blog Card

```css
border-radius: 16px;
border: 1px solid #E0E0E0;
background: #FAFAFA;
overflow: hidden;
transition: all 0.2s;
/* hover */
box-shadow: 0 8px 32px rgba(0,0,0,0.12);
transform: translateY(-2px);

/* 이미지 영역 */
height: 160px;
background: linear-gradient(135deg, #E8FAF6 0%, #F0F6FF 100%);

/* 바디 */
padding: 20px;
```

---

### 6-13. Contact Card Grid

```css
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;

/* 카드 */
background: white;
border: 1px solid #E0E0E0;
border-radius: 16px;
padding: 28px 24px;
text-align: center;
transition: all 0.2s;
/* hover */
box-shadow: 0 8px 32px rgba(0,0,0,0.12);
transform: translateY(-2px);
border-color: #1EC9AF;
```

---

## 7. Layout Grid

```css
/* 표준 2컬럼 */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 48px~80px;

/* 제품 카드 */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;

/* 통계 4분할 */
display: grid;
grid-template-columns: repeat(4, 1fr);

/* 가로 스크롤 슬라이더 */
display: flex;
gap: 16px;
overflow-x: hidden;
scroll-behavior: smooth;
```

---

## 8. Animation & Transition

```css
/* 기본 트랜지션 */
transition: all 0.15s;          /* 버튼, 링크 */
transition: all 0.2s;           /* 카드 hover */
transition: all 0.25s;          /* 모달, 드롭다운 */
transition: all 0.3s;           /* 슬라이더 dot */
transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); /* 히어로 슬라이더 */

/* hover lift */
transform: translateY(-2px);    /* 카드 */
transform: translateY(-4px);    /* 다크 카드 */

/* 마퀴 */
animation: marqueeScroll 20s linear infinite;
```

---

## 9. Page Structure (섹션 순서)

```
1. nav          — fixed, 64px, 흰색 반투명
2. hero         — 슬라이더, 480px, 3개 슬라이드
3. marquee      — 파트너 로고 무한 스크롤, 흰 배경
4. products     — Bento Grid 카드, 흰 배경
5. platform     — How-to 4단계, #F0F4F8
6. solutions    — 고객 유형 가로 슬라이더, #1A1A1A
7. stats        — 숫자 4개, #1A1A1A
8. faq          — 아코디언, 흰 배경
9. news         — 탭(공지/블로그), 흰 배경
10. contact     — 4개 링크 카드, #FAFAFA
11. cta         — 민트 배경, 앱 다운로드
12. footer      — #111111
```

---

## 10. Footer

```css
background: #111111;
padding: 56px 32px 40px;

/* 상단 그리드: 2.2fr 1fr 1fr 1fr */
padding-bottom: 40px;
border-bottom: 1px solid rgba(255,255,255,0.07);

/* 링크 */
font-size: 13px;
color: rgba(255,255,255,0.3);
/* hover */
color: #1EC9AF;

/* 하단 legal */
font-size: 12px;
color: rgba(255,255,255,0.2);
```

---

## 11. Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
  /* 2열 → 1열 */
  .products-grid    → grid-template-columns: 1fr;
  .stats-grid       → grid-template-columns: 1fr 1fr;
  .contact-grid     → grid-template-columns: 1fr 1fr;
  .footer-top       → grid-template-columns: 1fr 1fr;
  /* hero visual 숨김 */
  .slide-visual     → display: none;
}

/* Mobile */
@media (max-width: 768px) {
  nav-links         → display: none;
  .section-title    → font-size: 30px;
  .hero-title       → font-size: 28px;
  .cta-title        → font-size: 30px;
  .blog-grid        → grid-template-columns: 1fr;
  .stat-num         → font-size: 36px;
}
```

---

## 12. Dark Section 공통 룰

```css
/* 텍스트 */
--text-primary:    rgba(255,255,255,0.95);
--text-secondary:  rgba(255,255,255,0.5);
--text-muted:      rgba(255,255,255,0.3);

/* 보더 */
--border:          rgba(255,255,255,0.08);
--border-strong:   rgba(255,255,255,0.14);

/* 카드 BG */
--card-bg:         rgba(255,255,255,0.06);
--card-bg-hover:   rgba(255,255,255,0.10);
```

---

## 13. 자주 쓰는 패턴 스니펫

### Eyebrow Tag (민트 pill)
```html
<span style="
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #1EC9AF;
  background: rgba(30,201,175,0.1);
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
  letter-spacing: 0.3px;
">태그</span>
```

### Mint Badge (강조 숫자/뱃지)
```html
<span style="
  color: #1EC9AF;
  font-weight: 800;
">+8.4%</span>
```

### Mini Stat Card (다크)
```css
/* 제목 */
font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 600;
/* 숫자 */
font-size: 52px; font-weight: 800; color: white; letter-spacing: -2px;
/* 단위 */
font-size: 22px; color: #1EC9AF;
```

### 리밸런싱 알림 컴포넌트 (카드 내부)
```css
background: rgba(30,201,175,0.08);
border: 1px solid rgba(30,201,175,0.15);
border-radius: 10px;
padding: 12px 14px;
display: flex;
align-items: center;
gap: 10px;
```

### 수익률 바
```css
/* 트랙 */
height: 4px; background: #F5F5F5; border-radius: 2px;
/* 필 (민트) */
background: #1EC9AF; border-radius: 2px;
```

---

## 14. 컬러 사용 원칙

1. **민트(`#1EC9AF`)** — CTA 버튼, 강조 텍스트, 수익률 양수, 아이콘 배경, eyebrow
2. **차콜(`#1A1A1A`)** — primary 버튼, 제목, 다크 섹션 배경
3. **회색 계열** — 본문, 보더, 카드 배경
4. 배경은 흰색 ↔ `#FAFAFA` ↔ `#F0F4F8` ↔ `#1A1A1A` 순환
5. 다크 섹션에서 민트는 항상 동일하게 사용 (opacity 조절 금지, 색상 유지)
6. 빨강(`#FF4242`)은 음수 수익률, 에러 상태에만 사용
