import Image from 'next/image'
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { COMPANY } from '@/lib/constants'

const timeline = [
  ['2018.08', '딥트레이드테크놀로지스 설립'],
  ['2020.01', '국내 최초 AI 최우수 학회 주가 예측 논문 2건 게재'],
  ['2021.09', '금융감독원 투자자문업 등록'],
  ['2022.05', '창업도약패키지 선정'],
  ['2022.07', '삼성증권 자산관리 마켓 입점'],
  ['2022.09', 'KB증권 AI 서비스 고도화 MOU 체결'],
  ['2022.10', 'IEEE BigData 2022 논문 게재'],
  ['2024.01', 'DB금융투자 AI 국내 시장 리포트 납품 시작'],
  ['2024.05', '신영증권 AI 기반 포트폴리오 운용 기술사업화 MOU'],
  ['2024.08', 'KDD 2024 금융 강화학습 논문 게재'],
  ['2025.01', 'AI 연금투자 서비스 당연 출시'],
  ['2026.02', 'ICLR 2026, WSDM 2026 논문 게재'],
]

const papers = ['ICLR 2026', 'WSDM 2026', 'KDD 2024', 'IEEE BigData 2022', 'SIAM 2021', 'KDD 2021']

const partners = [
  ['KB증권', 'AI 서비스 고도화 MOU'],
  ['신영증권', '포트폴리오 운용 기술사업화 MOU'],
  ['DB금융투자', 'AI 시장 리포트 납품'],
  ['삼성증권', '자산관리 마켓 입점'],
]

const principles = [
  { Icon: SparklesIcon, title: 'AI 기술', desc: '강화학습 기반 금융 AI로 장기 자산배분 문제를 해결합니다.' },
  { Icon: ShieldCheckIcon, title: '제도권 운영', desc: '금융감독원 등록 투자자문사로서 규제 체계 안에서 서비스를 제공합니다.' },
  { Icon: DocumentTextIcon, title: '투명한 설명', desc: '투자 제안의 근거와 위험 고지를 사용자가 이해할 수 있게 전달합니다.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8 py-24 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#F0FDFB] border border-[#D6F3EC] px-3.5 py-1.5 text-[12px] font-bold text-[#0FA18F]">회사소개</span>
            <h1 className="mt-6 text-[40px] md:text-[58px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">AI 금융 기술로<br />장기 투자의 기준을 만듭니다</h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-gray-500">
              {COMPANY.name}는 서울대학교 컴퓨터공학부 연구진의 AI 금융 기술을 기반으로 설립된 투자자문사입니다. 당연은 누구나 연금 투자를 쉽게 시작하고 꾸준히 관리할 수 있도록 만든 AI 연금투자 자문 서비스입니다.
            </p>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                ['2018', '설립'],
                ['130+', '국제 논문'],
                ['80+', '특허'],
                ['금감원', '투자자문 등록'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-3xl font-extrabold text-[#1EC9AF]">{value}</div>
                  <div className="mt-1 text-xs font-semibold text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <Image src="/logo/squareLogo.png" alt="당연 로고" width={70} height={70} className="mb-6" />
            <div className="space-y-4">
              {[
                ['회사명', COMPANY.name],
                ['브랜드', '당연'],
                ['등록', '금융감독원 투자자문업'],
                ['등록번호', COMPANY.license],
                ['이메일', COMPANY.email],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-5 border-b border-gray-100 pb-3 last:border-b-0">
                  <span className="text-sm text-gray-400">{k}</span>
                  <span className="text-sm font-bold text-[#0D0D0D] text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Principles</span>
            <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">기술, 제도, 설명을 함께 봅니다</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {principles.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <Icon className="h-8 w-8 text-[#1EC9AF]" />
                <h3 className="mt-5 text-xl font-extrabold text-[#0D0D0D]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
          <div>
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">History</span>
            <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">주요 연혁</h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-gray-500">연구 성과, 금융기관 협업, 서비스 출시까지 이어진 주요 이력입니다.</p>
          </div>
          <div className="relative">
            <div className="absolute left-[94px] top-0 bottom-0 hidden md:block w-px bg-gray-100" />
            <div className="space-y-0">
              {timeline.map(([date, event], i) => (
                <div key={`${date}-${i}`} className="grid grid-cols-1 md:grid-cols-[80px_28px_1fr] gap-0 md:gap-4 py-4 border-b border-gray-100">
                  <div className="text-sm font-bold text-[#1EC9AF]">{date}</div>
                  <div className="hidden md:flex justify-center pt-1">
                    <span className="relative z-10 h-2.5 w-2.5 rounded-full bg-[#1EC9AF] ring-4 ring-[#F0FDFB]" />
                  </div>
                  <div className="text-sm font-semibold text-[#0D0D0D]">{event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D0D0D] text-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
            <div>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Leadership</span>
              <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight">연구 기반의 금융 AI 팀</h2>
              <p className="mt-4 text-[16px] leading-[1.75] text-white/45">서울대학교 컴퓨터공학부 연구진의 금융 AI 연구를 기반으로 기술과 서비스를 연결합니다.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-[#1EC9AF] flex items-center justify-center text-2xl font-extrabold text-white">강</div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">강유</h3>
                  <p className="mt-1 text-sm font-bold text-[#1EC9AF]">창업자 · 기술자문</p>
                  <p className="mt-1 text-sm text-white/35">서울대학교 컴퓨터공학부 교수</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '서울대학교 컴퓨터공학부 교수',
                  '서울대학교 AI 연구원 주임교수',
                  '국제 논문 130편 이상',
                  '특허 80건 이상',
                  'KDD · ICDM · ICDE Best Paper 수상',
                  'MS 주식 추천 챌린지 세계 1위',
                ].map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-white/55">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1EC9AF]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
            <div>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Research</span>
              <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">연구 성과</h2>
              <p className="mt-4 text-[16px] leading-[1.75] text-gray-500">금융 AI, 강화학습, 추천 시스템 연구를 실제 자산관리 서비스로 연결합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <AcademicCapIcon className="h-8 w-8 text-[#1EC9AF]" />
                <h3 className="mt-5 text-xl font-extrabold text-[#0D0D0D]">국제 학회 논문</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {papers.map((paper) => (
                    <span key={paper} className="rounded-full bg-[#F0FDFB] px-3 py-1.5 text-xs font-bold text-[#0FA18F]">{paper}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <DocumentTextIcon className="h-8 w-8 text-[#1EC9AF]" />
                <h3 className="mt-5 text-xl font-extrabold text-[#0D0D0D]">특허와 기술 자산</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-gray-500">
                  <li>강화학습 기반 자산배분 방법 및 장치</li>
                  <li>AI 포트폴리오 리밸런싱 시스템</li>
                  <li>시계열 예측 신경망 구조</li>
                  <li>금융 데이터 전처리 방법</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Partners</span>
            <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">금융기관과 함께 검증한 기술</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {partners.map(([name, detail]) => (
              <div key={name} className="rounded-2xl border border-gray-100 bg-white p-6">
                <BuildingOffice2Icon className="h-7 w-7 text-[#1EC9AF]" />
                <div className="mt-5 text-lg font-extrabold text-[#0D0D0D]">{name}</div>
                <div className="mt-2 text-xs leading-relaxed text-gray-500">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-8 rounded-3xl border border-gray-100 p-8">
          <h2 className="text-2xl font-extrabold text-[#0D0D0D]">회사 정보</h2>
          <div className="mt-6 space-y-3 text-sm text-gray-500">
            <p><strong className="text-[#0D0D0D]">회사명</strong> {COMPANY.name}</p>
            <p><strong className="text-[#0D0D0D]">주소</strong> {COMPANY.address}</p>
            <p><strong className="text-[#0D0D0D]">이메일</strong> {COMPANY.email}</p>
            <p><strong className="text-[#0D0D0D]">투자자문업 등록번호</strong> {COMPANY.license}</p>
          </div>
        </div>
      </section>
    </>
  )
}
