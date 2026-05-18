const logos = ['KB증권', '딥트레이드테크놀로지스', '투자자문업 등록', '금융감독원 관리감독', '연금저축펀드', 'EMP 섀넌 AI']

export default function MarqueeSection() {
  const doubled = [...logos, ...logos]

  return (
    <div className="py-7 border-b border-[#E0E0E0] overflow-hidden">
      <div className="flex gap-16 items-center animate-marquee w-max hover:[animation-play-state:paused]">
        {doubled.map((logo, i) => (
          <span
            key={i}
            className="text-sm font-bold text-[#C0C0C0] whitespace-nowrap tracking-[-0.3px]"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  )
}
