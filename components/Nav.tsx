export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] h-16 bg-white/95 backdrop-blur-[12px] border-b border-[#E0E0E0]">
      <div className="max-w-[1160px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div className="w-[30px] h-[30px] rounded-lg bg-mint flex items-center justify-center text-xs font-extrabold text-white">
            당
          </div>
          <span className="text-[17px] font-extrabold text-charcoal tracking-[-0.5px]">
            당<span className="text-mint">연</span>
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {[
            { href: '#products', label: '서비스 소개' },
            { href: '#solutions', label: '이용 방법' },
            { href: '#faq',      label: 'FAQ' },
            { href: '#news',     label: '뉴스' },
            { href: '#contact',  label: '고객 지원' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-[#3D3D3D] hover:text-mint transition-colors duration-150 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium text-[#3D3D3D] rounded-lg hover:bg-[#F5F5F5] transition-colors bg-transparent border-none cursor-pointer font-sans">
            로그인
          </button>
          <a
            href="#"
            className="px-5 py-[9px] text-sm font-bold text-white bg-mint rounded-lg hover:bg-mint-deep transition-colors no-underline"
          >
            앱 다운로드
          </a>
        </div>
      </div>
    </nav>
  )
}
