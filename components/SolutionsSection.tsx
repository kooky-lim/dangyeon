'use client'

import { useRef } from 'react'

const cards = [
  { icon: '💰', tag: '30대 직장인',   title: '노후 준비를 지금 시작하세요',    desc: '은퇴까지 30년, 지금 시작하면 AI가 복리의 마법으로 자산을 키워드립니다.' },
  { icon: '🏠', tag: '40대 가장',     title: '가족의 노후를 안전하게',         desc: '안정형 포트폴리오로 시장 변동에 흔들리지 않는 안정적인 노후를 설계합니다.' },
  { icon: '📈', tag: '50대 은퇴 준비', title: '은퇴 전 마지막 투자 최적화',    desc: '은퇴 시기를 고려한 점진적 안전 자산 비중 확대로 은퇴 리스크를 줄입니다.' },
  { icon: '🎓', tag: '금융 초보',     title: '아무것도 몰라도 괜찮아요',       desc: 'AI가 모든 결정을 대신해 드립니다. 승인 한 번이면 끝입니다.' },
  { icon: '🏢', tag: '자영업자',      title: '국민연금만으론 부족해요',        desc: '연금저축으로 세제혜택도 받고, AI로 수익률도 챙기세요.' },
]

export default function SolutionsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    sliderRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="py-[100px] px-8 bg-charcoal">
      <div className="max-w-[1160px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[13px] font-bold text-mint tracking-[0.3px] block mb-3">당연은 지금 이 순간에도</span>
            <h2 className="text-[40px] font-extrabold tracking-[-1.5px] leading-[1.2] text-white">
              다양한 고객님들이<br />이용하고 있습니다.
            </h2>
          </div>
          <div className="flex gap-2">
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-sm text-white cursor-pointer hover:bg-white/[0.15] transition-colors"
              >
                {dir === -1 ? '←' : '→'}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth"
        >
          {cards.map((card) => (
            <div
              key={card.tag}
              className="min-w-[260px] rounded-[16px] bg-white/[0.06] border border-white/[0.08] p-7 cursor-pointer transition-all duration-[250ms] hover:bg-white/10 hover:border-white/[0.14] hover:-translate-y-1 flex-shrink-0"
            >
              <div className="w-full h-[140px] rounded-[10px] bg-white/[0.05] mb-5 flex items-center justify-center text-[36px]">
                {card.icon}
              </div>
              <div className="text-xs font-semibold text-mint mb-1.5 tracking-[0.3px]">{card.tag}</div>
              <div className="text-base font-bold text-white mb-2">{card.title}</div>
              <p className="text-[13px] leading-[1.6] text-white/45">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
