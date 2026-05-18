const steps = [
  [{ icon: '📲', label: '1. 앱 다운로드' }, { icon: '🏦', label: '2. 계좌 연결' }],
  [{ icon: '🎯', label: '3. 성향 분석' }, { icon: '🤖', label: '4. AI 자동 관리' }],
]

export default function PlatformSection() {
  return (
    <section className="py-[100px] px-8 bg-[#F0F4F8] text-center" id="solutions">
      <div className="max-w-[800px] mx-auto">
        <span className="text-[13px] font-bold text-mint tracking-[0.3px] block mb-3">이용 방법</span>
        <h2 className="text-[40px] font-extrabold tracking-[-1.5px] leading-[1.2] text-charcoal mb-3.5">
          딱 4단계,<br />당연이 나머지를 합니다.
        </h2>
        <p className="text-[17px] leading-[1.7] text-[#767676] mx-auto">
          복잡한 절차 없이 누구나 쉽게 AI 연금 관리를 시작할 수 있습니다.
        </p>

        <div className="mt-14 flex flex-col gap-4 max-w-[600px] mx-auto">
          {steps.map((row, ri) => (
            <div key={ri} className="flex gap-3 justify-center">
              {row.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-[#E0E0E0] shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-sm font-semibold text-charcoal whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
                >
                  <div className="w-7 h-7 rounded-lg bg-mint-light flex items-center justify-center text-sm">
                    {icon}
                  </div>
                  {label}
                </div>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <div className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-mint border-mint text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-sm">✓</div>
              노후 준비 완료
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
