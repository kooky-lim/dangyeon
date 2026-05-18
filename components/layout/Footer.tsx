import Link from 'next/link'
import Image from 'next/image'
import { LINKS, COMPANY } from '@/lib/constants'

const serviceLinks = [
  { label: '서비스 소개', href: '/service' },
  { label: '성과 보기', href: '/performance' },
  { label: '회사 소개', href: '/about' },
]

const linkClass = 'text-[13px] no-underline transition-colors duration-150 text-white/40 hover:text-white/75'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1160px] mx-auto px-6 md:px-8 py-16">
        <div
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-12"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <Image
              src="/logo/logoMainRevert.png"
              alt="당연"
              width={74}
              height={28}
              className="object-contain mb-5"
            />
            <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.36)' }}>
              연금 투자를 더 당연하게.<br />
              EMP Shannon AI 기반 자산관리 서비스를 제공합니다.
            </p>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>서비스</div>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={href}><Link href={href} className={linkClass}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>앱</div>
            <ul className="space-y-2.5">
              {[{ label: 'App Store', href: LINKS.appStore }, { label: 'Google Play', href: LINKS.googlePlay }].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>문의</div>
            <ul className="space-y-2.5">
              <li><a href={LINKS.blog} target="_blank" rel="noopener noreferrer" className={linkClass}>공식 블로그</a></li>
              <li><a href={LINKS.kakao} target="_blank" rel="noopener noreferrer" className={linkClass}>카카오 상담</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className={linkClass}>{COMPANY.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 space-y-1.5">
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            {COMPANY.name} | 투자자문업 등록번호: {COMPANY.license} | 금융감독원 등록
          </p>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>{COMPANY.address}</p>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.22)' }}>
            Copyright 2026 Dangyeon. All rights reserved.
          </p>
          <p className="text-[11px] leading-relaxed max-w-3xl" style={{ color: 'rgba(255,255,255,0.16)' }}>
            투자자는 원금 손실 위험이 있으며, 과거 수익률이 미래 수익률을 보장하지 않습니다. 본 서비스의 내용은 투자 판단의 참고 자료이며 최종 투자 책임은 투자자 본인에게 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
