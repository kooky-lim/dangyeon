'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowPathRoundedSquareIcon,
  BanknotesIcon,
  BellIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { LINKS } from '@/lib/constants'

type Allocation = [label: string, pct: number, color: string]

const portfolioTypes: Record<string, {
  label: string
  desc: string
  allocation: Allocation[]
  etfs: string[]
}> = {
  stable: {
    label: '안정형',
    desc: '변동성을 낮추고 꾸준한 연금 자산 축적에 집중합니다.',
    allocation: [['주식 ETF', 30, '#1EC9AF'], ['채권 ETF', 40, '#4A9EFF'], ['대체투자', 15, '#F59E0B'], ['현금성', 15, '#9CA3AF']],
    etfs: ['KODEX 미국S&P500', 'KODEX 국고채10년액티브', 'ARIRANG 미국채10년액티브', 'ACE KRX 금현물', 'TIGER KOFR금리액티브'],
  },
  neutral: {
    label: '중립형',
    desc: '성장성과 안정성을 균형 있게 배분합니다.',
    allocation: [['주식 ETF', 50, '#1EC9AF'], ['채권 ETF', 25, '#4A9EFF'], ['대체투자', 15, '#F59E0B'], ['현금성', 10, '#9CA3AF']],
    etfs: ['KODEX 미국S&P500', 'RISE 미국S&P500', 'SOL 미국배당다우존스', 'KODEX 국고채10년액티브', 'ACE KRX 금현물'],
  },
  growth: {
    label: '성장형',
    desc: '장기 투자 기간을 활용해 성장 자산 비중을 높입니다.',
    allocation: [['주식 ETF', 65, '#1EC9AF'], ['채권 ETF', 14, '#4A9EFF'], ['대체투자', 16, '#F59E0B'], ['현금성', 5, '#9CA3AF']],
    etfs: ['KODEX 미국S&P500', 'RISE 미국S&P500', 'SOL 미국배당다우존스', 'TIGER 인도니프티50', 'KODEX 차이나CSI300'],
  },
}

const productCards = [
  {
    name: '연금저축',
    headline: '세액공제와 장기 투자를 함께 챙기는 계좌',
    max: '99만원',
    color: '#1EC9AF',
    rows: [
      ['세액공제 한도', '연 600만원 납입 기준'],
      ['세액공제율', '최대 16.5%'],
      ['연금 수령', '만 55세 이후 가능'],
      ['최소 투자금', '100만원'],
      ['자문 수수료', '연 0.015% 수준'],
    ],
  },
  {
    name: 'IRP',
    headline: '퇴직금과 추가 납입금을 함께 운용하는 계좌',
    max: '148.5만원',
    color: '#7C3AED',
    rows: [
      ['세액공제 한도', '연금저축 합산 연 900만원'],
      ['세액공제율', '최대 16.5%'],
      ['퇴직금 운용', '가능'],
      ['최소 투자금', '100만원'],
      ['자문 수수료', '이벤트 기간 무료 가능'],
    ],
  },
]

const process = [
  { Icon: DevicePhoneMobileIcon, title: '앱 설치', desc: 'App Store 또는 Google Play에서 당연을 설치하고 본인 인증을 진행합니다.' },
  { Icon: BuildingLibraryIcon, title: '계좌 연결', desc: 'KB증권 연금저축 또는 IRP 계좌를 연결합니다. 계좌가 없다면 앱 안내에 따라 개설할 수 있습니다.' },
  { Icon: UserGroupIcon, title: '투자 성향 진단', desc: '투자 기간, 손실 감내도, 목표 자산 등 연금 투자에 필요한 기준을 확인합니다.' },
  { Icon: SparklesIcon, title: 'AI 포트폴리오 제안', desc: 'EMP Shannon AI가 시장 데이터와 성향 정보를 반영해 ETF 자산배분을 제안합니다.' },
  { Icon: BellIcon, title: '리밸런싱 알림', desc: '4주마다 시장을 재분석하고 조정이 필요하면 앱 알림으로 제안 내용을 전달합니다.' },
  { Icon: CheckCircleIcon, title: '고객 승인 후 실행', desc: '고객이 앱에서 승인하면 다음 영업일 기준으로 주문이 진행됩니다.' },
]

const faqs = [
  ['투자자문 서비스와 투자일임은 어떻게 다른가요?', '당연은 투자자문 서비스입니다. AI가 포트폴리오와 리밸런싱을 제안하고, 고객 승인 후 주문이 진행됩니다.'],
  ['최소 투자금은 얼마인가요?', '최소 투자금은 100만원이며, 충분한 분산투자를 위해 500만원 이상을 권장합니다.'],
  ['리밸런싱은 자동으로 매매되나요?', '고객에게 리밸런싱 제안을 알림으로 보내고, 고객 승인 후 주문이 진행됩니다.'],
  ['어떤 ETF에 투자하나요?', '국내 상장 ETF를 중심으로 주식, 채권, 대체투자, 현금성 자산을 투자 성향에 맞게 배분합니다.'],
  ['수수료는 어디서 부과되나요?', '자문 수수료는 연금 계좌가 아닌 별도 계좌에서 부과됩니다. 상품과 이벤트에 따라 면제 기간이 있을 수 있습니다.'],
]

export default function ServicePage() {
  const [type, setType] = useState<keyof typeof portfolioTypes>('neutral')
  const selected = portfolioTypes[type]

  return (
    <>
      <section className="bg-[#0D0D0D] text-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8 py-24 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-14 items-center">
          <div>
            <span className="inline-flex rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-[12px] font-bold text-[#1EC9AF]">서비스 소개</span>
            <h1 className="mt-6 text-[40px] md:text-[58px] font-extrabold leading-tight tracking-tight">연금저축과 IRP,<br />AI가 꾸준히 관리합니다</h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.8] text-white/55">
              당연은 금융감독원 등록 투자자문사가 운영하는 AI 연금투자 서비스입니다. EMP Shannon AI가 연금 계좌의 포트폴리오를 분석하고, 4주마다 필요한 리밸런싱을 제안합니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={LINKS.appStore} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#1EC9AF] px-7 py-4 text-[15px] font-bold text-white no-underline">앱 다운로드</a>
              <a href={LINKS.kakao} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-[15px] font-bold text-white/70 no-underline">상담하기</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheckIcon className="w-7 h-7 text-[#1EC9AF]" />
              <div>
                <div className="text-sm font-bold">제도권 투자자문 서비스</div>
                <div className="text-xs text-white/35">금융감독원 등록 투자자문사 운영</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['4주', '리밸런싱 주기'],
                ['0.015%', '연 자문 수수료'],
                ['100만원', '최소 투자금'],
                ['ETF', '분산투자 중심'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/5 p-4">
                  <div className="text-2xl font-extrabold text-[#1EC9AF]">{value}</div>
                  <div className="mt-1 text-xs text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Products</span>
            <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">두 가지 연금 계좌를 목적에 맞게 활용하세요</h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-gray-500">연금저축과 IRP는 세액공제, 퇴직금 운용, 연금 수령 방식이 다릅니다. 당연은 각 계좌의 특성에 맞춰 장기 포트폴리오를 관리합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {productCards.map((product) => (
              <div key={product.name} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <span className="inline-flex rounded-full px-3 py-1.5 text-xs font-bold" style={{ color: product.color, background: `${product.color}14` }}>{product.name}</span>
                <h3 className="mt-6 text-2xl font-extrabold text-[#0D0D0D]">{product.headline}</h3>
                <div className="mt-8">
                  <div className="text-xs font-bold uppercase text-gray-400">최대 세액공제</div>
                  <div className="mt-1 text-[48px] font-extrabold leading-none tracking-tight" style={{ color: product.color }}>{product.max}</div>
                </div>
                <div className="mt-8">
                  {product.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-t border-gray-100 py-3 text-sm">
                      <span className="text-gray-400">{k}</span>
                      <span className="font-semibold text-[#0D0D0D] text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10">
            <div>
              <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Portfolio</span>
              <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">투자 성향에 맞춰 달라지는 자산배분</h2>
              <p className="mt-4 text-[16px] leading-[1.75] text-gray-500">아래 예시는 실제 투자자의 계좌 상태와 투자 성향에 따라 달라질 수 있습니다.</p>
              <div className="mt-8 space-y-3">
                {(Object.keys(portfolioTypes) as Array<keyof typeof portfolioTypes>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setType(key)}
                    className="w-full rounded-2xl border p-5 text-left transition hover:-translate-y-0.5"
                    style={{ borderColor: type === key ? '#1EC9AF' : '#E5E7EB', background: type === key ? '#F0FDFB' : '#FFFFFF' }}
                  >
                    <div className="font-extrabold text-[#0D0D0D]">{portfolioTypes[key].label}</div>
                    <div className="mt-1 text-sm leading-relaxed text-gray-500">{portfolioTypes[key].desc}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <h3 className="text-2xl font-extrabold text-[#0D0D0D]">{selected.label} 포트폴리오 예시</h3>
              <p className="mt-2 text-sm text-gray-500">{selected.desc}</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
                <div className="space-y-5">
                  {selected.allocation.map(([label, pct, color]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-semibold text-[#0D0D0D]">{label}</span>
                        <span className="font-bold" style={{ color }}>{pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100">
                        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-[#F7F8FA] p-5">
                  <div className="text-xs font-bold text-gray-400">편입 ETF 예시</div>
                  <ul className="mt-4 space-y-2">
                    {selected.etfs.map((etf) => (
                      <li key={etf} className="flex gap-2 text-sm text-[#0D0D0D]">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1EC9AF]" />
                        {etf}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0D0D0D] text-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">Process</span>
            <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight">가입부터 리밸런싱까지 한 번에 이어집니다</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {process.map(({ Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="w-7 h-7 text-[#1EC9AF]" />
                  <span className="font-mono text-xs font-bold text-white/20">0{i + 1}</span>
                </div>
                <h3 className="font-extrabold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12">
          <div>
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#1EC9AF]">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-[#0D0D0D]">서비스 이용 전 확인하세요</h2>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
            {faqs.map(([q, a]) => (
              <div key={q} className="border-b border-gray-100 p-6 last:border-b-0">
                <div className="font-extrabold text-[#0D0D0D]">{q}</div>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1EC9AF] text-center">
        <div className="max-w-[720px] mx-auto px-6 md:px-8">
          <DocumentCheckIcon className="mx-auto h-10 w-10 text-white/80" />
          <h2 className="mt-5 text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight text-white">나에게 맞는 연금 포트폴리오를 확인해보세요</h2>
          <p className="mt-4 text-white/75">앱에서 투자 성향 분석부터 시작할 수 있습니다.</p>
          <div className="mt-8 flex justify-center flex-wrap gap-3">
            <a href={LINKS.appStore} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-7 py-4 text-[15px] font-extrabold text-[#0D0D0D] no-underline">App Store</a>
            <Link href="/" className="rounded-xl bg-[#0D0D0D] px-7 py-4 text-[15px] font-extrabold text-white no-underline">홈으로</Link>
          </div>
        </div>
      </section>
    </>
  )
}
