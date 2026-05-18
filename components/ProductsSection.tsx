function PortfolioVisual() {
  const etfs = [
    { name: 'KODEX 미국S&P500', pct: 65, chg: '+12.3%', pos: true },
    { name: 'TIGER 국채3년',    pct: 25, chg: '+2.1%',  pos: true },
    { name: 'KODEX 골드선물',   pct: 10, chg: '-0.8%',  pos: false },
  ]
  return (
    <div className="flex gap-2.5 pt-0 pb-0">
      {etfs.map(({ name, pct, chg, pos }) => (
        <div key={name} className="flex-1 bg-white rounded-[10px] p-3.5 border border-[#E0E0E0]">
          <div className="text-[10px] text-[#9E9E9E] font-semibold mb-1.5">{name}</div>
          <div className="text-lg font-extrabold text-charcoal tracking-[-0.5px]">{pct}%</div>
          <div className={`text-[11px] font-semibold ${pos ? 'text-mint' : 'text-[#FF6B6B]'}`}>{chg}</div>
          <div className="h-1 bg-[#F5F5F5] rounded-sm mt-2">
            <div
              className="h-full rounded-sm"
              style={{ width: `${pct}%`, background: pos ? '#1EC9AF' : '#FFB5B5' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function SignupVisual() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {['본인인증 완료', '계좌 개설 완료'].map((label) => (
        <div key={label} className="bg-white rounded-[10px] px-3.5 py-3 border border-[#E0E0E0] flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-mint flex items-center justify-center text-[10px] text-white font-extrabold flex-shrink-0">✓</div>
          <span className="text-[13px] font-semibold text-charcoal">{label}</span>
        </div>
      ))}
      <div className="bg-mint rounded-[10px] py-3 flex items-center justify-center">
        <span className="text-[13px] font-bold text-white">투자 시작하기 →</span>
      </div>
    </div>
  )
}

function ReturnVisual() {
  const bars = [40, 55, 48, 70, 60, 85]
  return (
    <div className="w-full bg-white rounded-xl p-3.5 border border-[#E0E0E0]">
      <div className="flex justify-between mb-2.5">
        <span className="text-[11px] text-[#9E9E9E] font-semibold">연환산 수익률</span>
        <span className="text-base font-extrabold text-mint">+8.4%</span>
      </div>
      <div className="flex gap-1 items-end h-9">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, background: i === bars.length - 1 ? '#1EC9AF' : '#E0E0E0' }}
          />
        ))}
      </div>
    </div>
  )
}

const cards = [
  {
    tag: 'AI 투자자문', bg: '#F0FDFB', span: true,
    title: 'AI가 알아서 최적의 포트폴리오로\n자동 리밸런싱해 드립니다',
    desc: 'EMP 섀넌 강화학습 AI가 4주마다 시장을 분석하고 고객 투자 성향에 맞게 포트폴리오를 최적화합니다.',
    link: '자세히 보기', visual: <PortfolioVisual />, visualH: 180,
  },
  {
    tag: '간편 가입', bg: '#F4F9FF', span: false,
    title: '3분 만에\n계좌 개설 완료',
    desc: '서류 없이 앱에서 바로 KB증권 연금저축 계좌를 개설하고 투자를 시작하세요.',
    link: '앱 다운로드', visual: <SignupVisual />, visualH: 140,
  },
  {
    tag: '안정적 수익', bg: '#F9F4FF', span: false,
    title: '시장이 흔들려도\nAI가 지켜냅니다',
    desc: '안정성에 초점을 맞춰 시장 변동성에 흔들리지 않는 포트폴리오를 유지합니다.',
    link: '수익률 보기', visual: <ReturnVisual />, visualH: 140,
  },
]

export default function ProductsSection() {
  return (
    <section className="py-[100px] px-8 bg-white" id="products">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-14">
          <span className="text-[13px] font-bold text-mint tracking-[0.3px] block mb-3">당연의 핵심 서비스</span>
          <h2 className="text-[40px] font-extrabold tracking-[-1.5px] leading-[1.2] text-charcoal mb-3.5">
            스마트한 연금 관리의<br />모든 것을 담았습니다.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.tag}
              className={`rounded-[24px] border border-[#E0E0E0] px-10 pt-10 pb-0 overflow-hidden flex flex-col cursor-pointer transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${card.span ? 'col-span-2' : ''}`}
              style={{ background: card.bg, minHeight: card.span ? 340 : undefined }}
            >
              <span className="inline-block self-start text-[11px] font-bold text-mint-deep bg-[rgba(30,201,175,0.1)] px-2.5 py-1 rounded-md tracking-[0.3px] mb-4">
                {card.tag}
              </span>
              <h3 className="text-[22px] font-extrabold tracking-[-0.8px] text-charcoal mb-2 whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-sm leading-[1.65] text-[#767676] mb-6">{card.desc}</p>
              <a href="#" className="text-[13px] font-bold text-charcoal flex items-center gap-1 mb-8 hover:text-mint hover:gap-2 transition-all duration-150 no-underline">
                {card.link} →
              </a>
              <div
                className="mt-auto rounded-[12px_12px_0_0] overflow-hidden flex items-end justify-center"
                style={{ height: card.visualH }}
              >
                {card.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
