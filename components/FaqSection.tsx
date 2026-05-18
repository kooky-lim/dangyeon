'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '최소 투자금은 얼마인가요?',
    a: 'AI 연금 투자 상품의 최소 투자금은 100만원이며, 최적의 분산투자 효과를 위한 권장 투자금은 500만원입니다.',
  },
  {
    q: '리밸런싱은 어떻게 이루어지나요?',
    a: '4주마다 일요일에 AI가 최적 포트폴리오를 분석하고 알림을 보내드립니다. 고객님이 승인하면 다음 영업일에 주문이 체결됩니다.',
  },
  {
    q: '자문 수수료는 어떻게 부과되나요?',
    a: '자문 수수료는 연금 계좌가 아닌 별도의 수수료 수취 계좌에서 부과됩니다. 연금저축의 경우 수수료는 0.015%이며, 이벤트 기간에는 한시적으로 무료로 제공됩니다.',
  },
  {
    q: '언제부터 연금을 수령할 수 있나요?',
    a: '만 55세 이상이면서 가입기간이 5년을 초과한 경우, 원하는 시기에 연금 수령이 가능합니다. 연금 수령 시 55~69세 5.5%, 70~79세 4.4%, 80세 이상 3.3%의 연금소득세가 부과됩니다.',
  },
  {
    q: 'EMP 섀넌이란 무엇인가요?',
    a: '딥트레이드테크놀로지스의 핵심 AI 기술로, 강화학습 원리를 활용해 현재 시장 상황에서 최적의 자산 배분을 결정합니다. 해당 기술 기반 포트폴리오는 국내 최고 금융리서치 센터에도 제공되고 있습니다.',
  },
  {
    q: '추가 입금도 가능한가요?',
    a: '네 가능합니다. 입금된 금액은 정기 리밸런싱에 반영되어 매매될 예정입니다.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 px-8 bg-white" id="faq">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-[32px] font-extrabold tracking-[-1px] text-charcoal mb-2">자주 묻는 질문</h2>
        <p className="text-base text-[#767676] mb-10">당연 서비스에 대해 궁금한 점을 모았습니다.</p>

        {faqs.map(({ q, a }, i) => (
          <div key={i} className="border-b border-[#E0E0E0] overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-5 text-[15px] font-semibold text-charcoal flex justify-between items-center gap-4 text-left bg-transparent border-none cursor-pointer font-sans"
            >
              <span>{q}</span>
              <span
                className={`text-[22px] font-light flex-shrink-0 transition-all duration-[250ms] ${
                  open === i ? 'rotate-45 text-mint' : 'text-[#9E9E9E]'
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-[350ms] ease-in-out"
              style={{ maxHeight: open === i ? 300 : 0 }}
            >
              <p className="pb-5 text-sm leading-[1.75] text-[#767676]">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
