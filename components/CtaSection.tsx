export default function CtaSection() {
  return (
    <section className="py-20 px-8 bg-mint text-center" id="contact">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-[40px] font-extrabold tracking-[-1.5px] leading-[1.15] text-white mb-4">
          당연과 함께하는<br />당연한 자산관리!
        </h2>
        <p className="text-[17px] text-white/80 mb-9">
          앱 스토어, 플레이 스토어에서 무료로 다운로드받고 지금 바로 시작해보세요.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#"
            className="px-8 py-3.5 text-[15px] font-bold text-mint-deep bg-white rounded-[10px] hover:bg-white/90 hover:-translate-y-0.5 transition-all no-underline"
          >
            App Store
          </a>
          <a
            href="#"
            className="px-7 py-[13px] text-[15px] font-bold text-white bg-white/15 border-[1.5px] border-white/40 rounded-[10px] hover:bg-white/[0.22] transition-all no-underline"
          >
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}
