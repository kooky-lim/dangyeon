'use client'

import { useState } from 'react'

const notices = [
  { type: '업데이트', title: '당연 앱 v1.2 업데이트 — 포트폴리오 분석 강화', desc: '실시간 수익률 차트와 자산 배분 시각화 기능이 추가되었습니다.', date: '2024. 12. 01' },
  { type: '서비스',  title: 'KB증권 연금저축펀드 자문 서비스 정식 출시',    desc: '이제 KB증권 계좌를 통해 당연의 AI 자문 서비스를 이용하실 수 있습니다.', date: '2024. 11. 15' },
  { type: '이벤트',  title: '신규 가입 3개월 자문 수수료 무료 이벤트',       desc: '2024년 12월 31일까지 신규 가입 고객님께 자문 수수료를 면제해 드립니다.', date: '2024. 11. 01' },
  { type: '공지',   title: '개인정보처리방침 개정 안내',                     desc: '2024년 12월 1일부터 개정된 개인정보처리방침이 적용됩니다.', date: '2024. 10. 20' },
]

const blogs = [
  { tag: 'AI 투자', title: 'EMP 섀넌 AI란 무엇인가? 강화학습으로 투자하기', date: '2024. 12. 05', icon: '🤖' },
  { tag: '연금',   title: '연금저축 vs IRP, 나에게 맞는 선택은?',           date: '2024. 11. 28', icon: '💼' },
  { tag: '수익률', title: '리밸런싱의 힘: 4주마다 포트폴리오를 최적화하는 이유', date: '2024. 11. 20', icon: '📊' },
]

export default function NewsSection() {
  const [tab, setTab] = useState<'notice' | 'blog'>('notice')

  return (
    <section className="py-20 px-8 bg-white" id="news">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[28px] font-extrabold tracking-[-1px]">당연 소식</h2>
          <a href="#" className="text-[13px] font-semibold text-[#767676] hover:text-charcoal flex items-center gap-1 no-underline transition-colors">
            전체보기 →
          </a>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E0E0E0] mb-7">
          {(['notice', 'blog'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-semibold border-none bg-transparent cursor-pointer font-sans border-b-2 -mb-px transition-all duration-150 ${
                tab === t
                  ? 'text-charcoal border-charcoal'
                  : 'text-[#9E9E9E] border-transparent hover:text-[#3D3D3D]'
              }`}
            >
              {t === 'notice' ? '공지사항' : '블로그'}
            </button>
          ))}
        </div>

        {/* Notice */}
        {tab === 'notice' && (
          <div className="flex flex-col">
            {notices.map(({ type, title, desc, date }) => (
              <a
                key={title}
                href="#"
                className="flex justify-between items-start py-[18px] border-b border-[#F5F5F5] cursor-pointer no-underline gap-6 group"
              >
                <div className="text-xs font-bold text-mint min-w-[48px] mt-0.5">{type}</div>
                <div className="flex-1">
                  <div className="text-[15px] font-semibold text-charcoal mb-1 group-hover:text-mint transition-colors">{title}</div>
                  <div className="text-[13px] text-[#9E9E9E] leading-[1.5]">{desc}</div>
                </div>
                <div className="text-xs text-[#9E9E9E] whitespace-nowrap mt-0.5">{date}</div>
              </a>
            ))}
          </div>
        )}

        {/* Blog */}
        {tab === 'blog' && (
          <div className="grid grid-cols-3 gap-5">
            {blogs.map(({ tag, title, date, icon }) => (
              <a
                key={title}
                href="#"
                className="rounded-[16px] overflow-hidden border border-[#E0E0E0] bg-[#FAFAFA] no-underline cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                <div className="w-full h-40 bg-gradient-to-br from-mint-light to-[#F0F6FF] flex items-center justify-center text-4xl">
                  {icon}
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-bold text-mint mb-2">{tag}</div>
                  <div className="text-[15px] font-bold text-charcoal leading-[1.5] mb-1.5">{title}</div>
                  <div className="text-xs text-[#9E9E9E]">{date}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
