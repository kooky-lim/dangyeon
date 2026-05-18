'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeftIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { BLOG_POSTS, LINKS } from '@/lib/constants'

const SLIDE_MS = 6000

const heroSlides = [
  {
    eyebrow: 'AI 연금관리 앱',
    title: '어려운 연금관리,\n당연 앱에서 AI로 쉽게',
    desc: '연금저축과 IRP를 앱에서 연결하고, EMP Shannon AI가 투자 성향에 맞는 포트폴리오와 리밸런싱을 제안합니다.',
    bg: '#F7FBFF',
    visual: 'phones',
  },
  {
    eyebrow: '검증된 AI 성과',
    title: '코스콤 RATB 샤프지수\n전 유형 2위',
    desc: '위험 대비 수익률 기준으로 검증된 AI 전략입니다. 자료 기준 2026.04',
    bg: '#F4FAF8',
    visual: 'ratb',
  },
  {
    eyebrow: '4주 리밸런싱',
    title: '시장 변화에 맞춰\n포트폴리오를 다시 점검',
    desc: 'AI가 시장 데이터와 고객 투자 성향을 함께 분석해 필요한 조정안을 안내합니다.',
    bg: '#FAFAFA',
    visual: 'rebalance',
  },
] as const

const trustItems = [
  ['금융감독원 등록', '투자자문업 제 1-서울-03505호'],
  ['KB증권 연계', '연금저축 · IRP 계좌 연결'],
  ['RATB 검증', '샤프지수 전 유형 2위'],
  ['낮은 자문 수수료', '연 0.015% 수준'],
]

const ratbRanks = [
  ['적극형', '2위', '위험 대비 수익률 기준'],
  ['중립형', '2위', '위험 대비 수익률 기준'],
  ['안정형', '2위', '위험 대비 수익률 기준'],
  ['연금저축 통합', '4위', '1,261개 중'],
  ['IRP', '4위', '807개 중'],
]

const flowSteps = [
  ['01', '앱 다운로드', 'App Store 또는 Google Play에서 당연 앱을 설치합니다.'],
  ['02', '계좌 연결', '연금저축 또는 IRP 계좌를 앱에서 연결합니다.'],
  ['03', '투자 성향 확인', '투자 기간, 위험 선호도, 목표에 맞는 성향을 확인합니다.'],
  ['04', 'AI 관리 시작', 'EMP Shannon AI가 포트폴리오와 리밸런싱을 제안합니다.'],
]

const aiPoints = [
  ['시장 데이터 반영', 'ETF 가격, 변동성, 자산군 흐름을 정기적으로 분석합니다.'],
  ['투자 성향 반영', '고객별 투자 기간과 위험 선호도에 맞춰 자산배분을 조정합니다.'],
  ['이유가 보이는 제안', '무엇을 왜 바꾸는지 이해할 수 있도록 조정 근거를 함께 보여줍니다.'],
]

const products = [
  {
    name: '연금저축',
    title: '세액공제와 장기 투자를 함께',
    desc: '연간 납입액 기준 세액공제 혜택을 챙기며 장기 연금 자산을 준비합니다.',
    amount: '최대 99만원',
    rows: [['세액공제율', '최대 16.5%'], ['최소 투자금', '100만원'], ['수령 가능', '만 55세 이후']],
  },
  {
    name: 'IRP',
    title: '퇴직금까지 관리하는 연금 계좌',
    desc: '연금저축과 함께 활용하면 세액공제 한도를 더 넓게 사용할 수 있습니다.',
    amount: '최대 148.5만원',
    rows: [['세액공제율', '최대 16.5%'], ['퇴직금 운용', '가능'], ['자문 수수료', '이벤트 기간 무료']],
  },
]

const faqs = [
  ['투자자문이란 무엇인가요?', '고객의 투자 성향과 시장 데이터를 바탕으로 포트폴리오 구성과 조정 의견을 제공하는 서비스입니다. 최종 투자 결정은 고객이 직접 진행합니다.'],
  ['리밸런싱은 어떻게 이루어지나요?', '4주마다 AI가 포트폴리오를 분석하고 필요한 조정안을 앱으로 제안합니다. 고객이 확인하고 승인하면 주문 절차가 진행됩니다.'],
  ['최소 투자금은 얼마인가요?', '최소 투자금은 100만원이며, 분산투자 효과를 고려하면 500만원 이상을 권장합니다.'],
  ['투자 손실 가능성이 있나요?', '있습니다. ETF 등 금융투자상품은 예금자보호 대상이 아니며 원금 손실이 발생할 수 있습니다. 과거 성과는 미래 수익을 보장하지 않습니다.'],
]

function AppDownloadButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={LINKS.appStore}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-[15px] font-extrabold no-underline transition hover:-translate-y-0.5 ${
        dark ? 'bg-[#0D0D0D] text-white' : 'bg-[#1EC9AF] text-white'
      }`}
    >
      앱 다운로드
    </a>
  )
}

function PhoneStack() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[470px]">
      <div className="absolute left-7 top-16 hidden w-[190px] rotate-[-5deg] overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-black/5 sm:block">
        <Image src="/mockup/app-screen-portfolio.png" alt="당연 포트폴리오 화면" width={260} height={540} className="h-auto w-full" priority />
      </div>
      <div className="absolute right-7 top-0 w-[230px] overflow-hidden rounded-[32px] bg-white shadow-2xl ring-1 ring-black/5">
        <Image src="/mockup/app-screen-home.png" alt="당연 앱 홈 화면" width={300} height={620} className="h-auto w-full" priority />
      </div>
      <div className="absolute bottom-8 left-0 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
        <div className="text-xs font-bold text-gray-400">AI 제안</div>
        <div className="mt-1 text-lg font-extrabold text-[#0D0D0D]">연금 포트폴리오 준비 완료</div>
      </div>
    </div>
  )
}

function RatbVisual() {
  return (
    <div className="mx-auto w-full max-w-[500px]">
      <div className="rounded-[28px] border border-[#DCEDEA] bg-white p-7 shadow-[0_20px_70px_rgba(15,161,143,0.12)]">
        <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-5">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#0FA18F]">Koscom RATB</div>
            <div className="mt-2 text-2xl font-extrabold text-[#0D0D0D]">샤프지수 랭킹</div>
          </div>
          <div className="rounded-2xl bg-[#F0FDFB] px-5 py-3 text-center">
            <div className="text-[11px] font-bold text-[#0FA18F]">전 유형</div>
            <div className="text-4xl font-black text-[#1EC9AF]">2위</div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {ratbRanks.slice(0, 4).map(([type, rank, sub]) => (
            <div key={type} className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-4">
              <div className="text-sm font-bold text-[#0D0D0D]">{type}</div>
              <div className="mt-2 text-3xl font-extrabold text-[#0FA18F]">{rank}</div>
              <div className="mt-1 text-[11px] leading-snug text-gray-400">{sub}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-gray-400">
          자료 기준 2026.04. 과거 성과는 미래 수익을 보장하지 않습니다.
        </p>
      </div>
    </div>
  )
}

function RebalanceVisual() {
  return (
    <div className="mx-auto w-full max-w-[500px] rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
      <div className="rounded-2xl bg-[#0D0D0D] p-5 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-white/40">이번 리밸런싱 제안</div>
            <div className="mt-2 text-2xl font-extrabold">채권 ETF 비중 +8%</div>
          </div>
          <span className="rounded-full bg-[#1EC9AF] px-3 py-1 text-xs font-extrabold">제안</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {[
            ['주식', '52%', 68],
            ['채권', '33%', 48],
            ['현금성', '15%', 26],
          ].map(([label, value, width]) => (
            <div key={label} className="rounded-xl bg-white/[0.08] p-3">
              <div className="text-[11px] text-white/35">{label}</div>
              <div className="mt-1 text-sm font-bold">{value}</div>
              <div className="mt-3 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#1EC9AF]" style={{ width: `${width}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {['시장 변동성 확대', '투자 성향 유지', '위험 자산 비중 조정'].map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-100 px-4 py-3">
            <CheckCircleIcon className="h-5 w-5 text-[#1EC9AF]" />
            <span className="text-sm font-semibold text-[#0D0D0D]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function HeroVisual({ type }: { type: (typeof heroSlides)[number]['visual'] }) {
  if (type === 'ratb') return <RatbVisual />
  if (type === 'rebalance') return <RebalanceVisual />
  return <PhoneStack />
}

function HeroSection() {
  const [index, setIndex] = useState(0)
  const active = heroSlides[index]

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % heroSlides.length), SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [index])

  const go = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative overflow-hidden" style={{ background: active.bg }}>
      <div className="mx-auto grid min-h-[680px] max-w-[1160px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-8 lg:grid-cols-[1fr_520px] lg:py-20">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6F3EC] bg-white px-3.5 py-1.5 text-[12px] font-bold text-[#0FA18F] shadow-sm">
            <SparklesIcon className="h-4 w-4" />
            {active.eyebrow}
          </div>
          <h1 className="mt-7 whitespace-pre-line text-[40px] font-extrabold leading-[1.08] text-[#0D0D0D] md:text-[60px]">
            {active.title}
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.8] text-gray-500">{active.desc}</p>
          <div className="mt-8">
            <AppDownloadButton />
          </div>
          <div className="mt-12 flex items-center gap-3">
            <button onClick={() => go(index - 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:text-[#0D0D0D]" aria-label="이전 슬라이드">
              <ArrowLeftIcon className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, i) => (
                <button key={slide.eyebrow} onClick={() => go(i)} className="h-2 rounded-full transition-all" style={{ width: i === index ? 28 : 8, background: i === index ? '#0D0D0D' : '#D1D5DB' }} aria-label={`${i + 1}번 슬라이드`} />
              ))}
            </div>
            <button onClick={() => go(index + 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:text-[#0D0D0D]" aria-label="다음 슬라이드">
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative z-10 transition-all duration-500">
          <HeroVisual type={active.visual} />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <>
      <HeroSection />

      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 divide-y divide-gray-100 px-6 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8">
          {trustItems.map(([title, desc]) => (
            <div key={title} className="py-6 md:px-5">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#0D0D0D]">
                <CheckCircleIcon className="h-5 w-5 text-[#1EC9AF]" />
                {title}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[380px_1fr]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">RATB Performance</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">
              검증된 위험 대비 성과를 먼저 확인하세요
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-gray-500">
              당연의 AI 전략은 코스콤 RATB 기준 샤프지수 전 유형 2위를 기록했습니다. 성과 페이지에서 유형별 순위와 상세 표를 확인할 수 있습니다.
            </p>
            <Link href="/performance" className="mt-8 inline-flex rounded-xl bg-[#0D0D0D] px-6 py-3 text-[14px] font-bold text-white no-underline transition hover:-translate-y-0.5">
              성과 자세히 보기
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ratbRanks.map(([type, rank, sub]) => (
              <div key={type} className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-5">
                <div className="text-sm font-bold text-[#0D0D0D]">{type}</div>
                <div className="mt-4 text-4xl font-extrabold text-[#1EC9AF]">{rank}</div>
                <div className="mt-2 text-xs leading-relaxed text-gray-400">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-[1160px] px-6 md:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">How it works</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">복잡한 연금관리를 4단계로 시작합니다</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {flowSteps.map(([num, title, desc]) => (
              <div key={num} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1EC9AF] text-sm font-extrabold text-white">{num}</div>
                <h3 className="mt-6 text-lg font-extrabold text-[#0D0D0D]">{title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[420px_1fr]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">AI Rebalancing</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">4주마다 시장을 읽고 필요한 조정을 제안합니다</h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-gray-500">
              단순한 추천을 넘어 시장 상황, 투자 성향, 자산군 변화를 함께 반영해 연금 포트폴리오를 꾸준히 점검합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {aiPoints.map(([title, desc], i) => {
              const Icon = [ChartBarIcon, ShieldCheckIcon, DocumentChartBarIcon][i]
              return (
                <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0FDFB]">
                    <Icon className="h-6 w-6 text-[#1EC9AF]" />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold text-[#0D0D0D]">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-gray-500">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] py-24 text-white">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[360px_1fr]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">Products</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-[42px]">연금저축과 IRP를 앱에서 함께 관리하세요</h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-white/45">절세 혜택을 챙기고, 장기 자산배분은 AI 리밸런싱으로 꾸준히 관리합니다.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {products.map((product) => (
              <Link key={product.name} href="/service" className="block rounded-2xl border border-white/10 bg-white/[0.06] p-7 no-underline transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <span className="rounded-full bg-[#1EC9AF]/15 px-3 py-1.5 text-xs font-extrabold text-[#1EC9AF]">{product.name}</span>
                <h3 className="mt-6 text-2xl font-extrabold text-white">{product.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-white/45">{product.desc}</p>
                <div className="mt-8 text-[11px] font-bold uppercase text-white/30">최대 세액공제</div>
                <div className="mt-1 text-[40px] font-extrabold text-[#1EC9AF]">{product.amount}</div>
                <div className="mt-8">
                  {product.rows.map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4 border-t border-white/10 py-3 text-sm">
                      <span className="text-white/35">{key}</span>
                      <span className="font-bold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">Performance Page</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">성과는 숫자로 확인할 수 있어야 합니다</h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-gray-500">
              RATB 순위 요약과 유형별 상세 표를 별도 페이지에서 투명하게 제공합니다. 수익률과 순위는 참고 지표이며 미래 수익을 보장하지 않습니다.
            </p>
          </div>
          <div className="rounded-[28px] border border-gray-100 bg-[#FAFAFA] p-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                ['2위', '샤프지수 전 유형'],
                ['2026.04', '자료 기준'],
                ['4위', '연금저축 통합'],
                ['4위', 'IRP'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white p-5">
                  <div className="text-3xl font-extrabold text-[#1EC9AF]">{value}</div>
                  <div className="mt-2 text-xs font-bold text-gray-400">{label}</div>
                </div>
              ))}
            </div>
            <Link href="/performance" className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-[#0D0D0D] text-sm font-extrabold text-white no-underline">
              성과 페이지 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-[820px] px-6 md:px-8">
          <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">자주 묻는 질문</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 bg-white">
            {faqs.map(([question, answer], i) => (
              <div key={question} className="border-b border-gray-100 last:border-b-0">
                <button className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span className="text-[15px] font-extrabold text-[#0D0D0D]">{question}</span>
                  <ChevronDownIcon className={`h-5 w-5 text-gray-300 transition ${openFaq === i ? 'rotate-180 text-[#1EC9AF]' : ''}`} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? 190 : 0 }}>
                  <p className="px-6 pb-5 text-[14px] leading-[1.75] text-gray-500">{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1160px] px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">Blog</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">연금 투자 인사이트</h2>
            </div>
            <a href={LINKS.blog} target="_blank" rel="noopener noreferrer" className="text-[14px] font-bold text-gray-400 no-underline hover:text-[#0D0D0D]">전체 보기</a>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <a key={post.title} href={post.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-gray-100 bg-white p-7 no-underline shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition hover:-translate-y-1">
                <div className="mb-5 flex items-center gap-2">
                  <span className="rounded-full bg-[#F0FDFB] px-3 py-1 text-[11px] font-bold text-[#0FA18F]">{post.tag}</span>
                  <span className="text-[12px] text-gray-300">{post.date}</span>
                </div>
                <h3 className="text-[19px] font-extrabold leading-snug text-[#0D0D0D]">{post.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-gray-500">{post.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1EC9AF] py-24 text-center">
        <div className="mx-auto max-w-[760px] px-6 md:px-8">
          <DevicePhoneMobileIcon className="mx-auto h-10 w-10 text-white/80" />
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-[42px]">지금 당연으로 연금관리를 시작하세요</h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-white/75">앱에서 무료로 시작하고, 나에게 맞는 연금 포트폴리오를 확인해보세요.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={LINKS.appStore} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-7 py-4 text-[15px] font-extrabold text-[#0D0D0D] no-underline">App Store</a>
            <a href={LINKS.googlePlay} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#0D0D0D] px-7 py-4 text-[15px] font-extrabold text-white no-underline">Google Play</a>
          </div>
          <p className="mt-8 text-xs leading-relaxed text-white/55">
            Copyright {currentYear}. 투자자는 원금 손실 위험이 있으며, 과거 성과가 미래 수익을 보장하지 않습니다.
          </p>
        </div>
      </section>
    </>
  )
}
