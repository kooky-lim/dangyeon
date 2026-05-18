const stats = [
  { num: '8.4', unit: '%',   label: '평균 연환산 수익률', src: '2023년 기준' },
  { num: '1,200', unit: '+', label: '누적 가입자 수',     src: '성장 중' },
  { num: '0.015', unit: '%', label: '자문 수수료',        src: '업계 최저 수준' },
  { num: '4',    unit: '주', label: 'AI 리밸런싱 주기',  src: '자동 알림 포함' },
]

export default function StatsSection() {
  return (
    <div className="bg-charcoal px-8 border-t border-white/[0.06]">
      <div className="max-w-[1160px] mx-auto grid grid-cols-4 py-12">
        {stats.map(({ num, unit, label, src }, i) => (
          <div
            key={label}
            className={`text-center px-8 ${i < stats.length - 1 ? 'border-r border-white/[0.08]' : ''}`}
          >
            <div className="text-[52px] font-extrabold text-white tracking-[-2px] leading-none mb-2">
              <span className="text-mint">{num}</span>{unit}
            </div>
            <div className="text-[13px] text-white/40 font-medium">{label}</div>
            <div className="text-[11px] text-white/20 mt-1">{src}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
