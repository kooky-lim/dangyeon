const cols = [
  {
    title: '서비스',
    links: [{ label: 'AI 투자자문', href: '#' }, { label: '포트폴리오 관리', href: '#' }, { label: '리밸런싱', href: '#' }],
  },
  {
    title: '회사',
    links: [{ label: '회사 소개', href: '#' }, { label: '채용', href: '#' }, { label: '뉴스룸', href: '#' }],
  },
  {
    title: '고객지원',
    links: [{ label: 'FAQ', href: '#faq' }, { label: '공지사항', href: '#news' }, { label: '문의하기', href: '#' }],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-14 px-8">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] gap-12 pb-10 border-b border-white/[0.07] mb-8">
          {/* Brand */}
          <div>
            <div className="text-base font-extrabold text-white mb-3 tracking-[-0.3px]">
              당<span className="text-mint">연</span>
            </div>
            <p className="text-[13px] text-white/30 leading-[1.8]">
              딥트레이드테크놀로지스(주)<br />
              투자자문업 등록번호: 제2024-서울-0000호<br />
              서울특별시 강남구 테헤란로
            </p>
          </div>

          {/* Cols */}
          {cols.map(({ title, links }) => (
            <div key={title}>
              <div className="text-xs font-bold text-white/40 mb-4 tracking-[0.3px]">{title}</div>
              <ul className="list-none flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-[13px] text-white/30 no-underline hover:text-mint transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="text-xs text-white/20 leading-[1.8]">
            © 2024 당신의 연금. All rights reserved.<br />
            <a href="#" className="text-white/25 no-underline">개인정보처리방침</a>
            {' · '}
            <a href="#" className="text-white/25 no-underline">이용약관</a>
            {' · '}
            <a href="#" className="text-white/25 no-underline">투자자문업 등록증</a>
          </p>
          <p className="text-xs text-white/20">
            투자자문업은 금융감독원에 등록된 사업입니다.<br />
            원금 손실이 발생할 수 있으며, 투자 책임은 투자자에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
