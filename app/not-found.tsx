import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Subtle bg decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(30,201,175,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative text-center px-8">
        <div
          className="font-extrabold leading-none mb-4 select-none"
          style={{ fontSize: 'clamp(96px, 15vw, 160px)', color: '#F0F0F0', letterSpacing: '-4px' }}
        >
          404
        </div>
        <div
          className="font-extrabold leading-none mb-6 -mt-8"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#1A1A1A', letterSpacing: '-1px' }}
        >
          페이지를 찾을 수 없습니다
        </div>
        <p className="text-[15px] leading-relaxed mb-10 max-w-xs mx-auto text-gray-400">
          요청하신 주소가 존재하지 않거나 이동되었습니다.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center px-7 py-3.5 text-sm font-bold text-white rounded-xl no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#1EC9AF', boxShadow: '0 4px 16px rgba(30,201,175,0.3)' }}
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/service"
            className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-xl no-underline transition-all duration-200 text-[#1A1A1A] bg-white hover:bg-gray-50"
            style={{ border: '1px solid #E5E7EB' }}
          >
            서비스 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
