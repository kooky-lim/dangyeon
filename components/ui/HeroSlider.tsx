'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { LINKS } from '@/lib/constants'
import PhoneMockup from './PhoneMockup'

const DURATION = 5000

const slides = [
  {
    num: '01', label: 'AI 연금 투자자문',
    title: '어려운 연금관리,\nAI에게 맡기세요',
    desc: 'EMP Shannon AI가 4주마다 최적의 포트폴리오로 자동 리밸런싱해 드립니다.',
    primaryBtn: { label: '앱 다운로드', href: LINKS.appStore, external: true },
    secondaryBtn: { label: '서비스 소개', href: '/service' },
    visual: 'phone' as const,
    dark: true, bg: '#0D0D0D',
  },
  {
    num: '02', label: '6년 백테스트',
    title: '6년 누적 수익률\n+120%',
    desc: '2019.01 ~ 2024.12 백테스트 기준. 경쟁사 대비 약 1.3배 초과 수익.',
    primaryBtn: { label: '수익률 전체 보기', href: '/performance', external: false },
    visual: 'chart' as const,
    dark: false, bg: '#FFFFFF',
  },
  {
    num: '03', label: 'KB증권 연계',
    title: '3분이면\n연금 투자 시작',
    desc: '서류 없이 앱에서 바로 KB증권 연금저축 계좌를 개설합니다.',
    primaryBtn: { label: '지금 시작하기', href: LINKS.appStore, external: true },
    visual: 'checklist' as const,
    dark: false, bg: '#F7F8FA',
  },
]

function ChartVisual() {
  const points = [18, 32, 26, 48, 40, 64, 56, 78, 70, 100]
  const W = 300, H = 128
  const xs = points.map((_, i) => (i / (points.length - 1)) * W)
  const ys = points.map((p) => H - (p / 100) * (H - 16) - 8)
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(' ')
  const area = `${d} L${W},${H} L0,${H} Z`

  return (
    <div className="w-full max-w-[420px] select-none slide-visual-enter">
      <div className="bg-white rounded-3xl overflow-hidden" style={{ border: '1px solid #EAECEF', boxShadow: '0 24px 80px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)' }}>
        <div className="p-8 pb-5">
          <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2">누적 수익률 (2019–2024)</div>
          <div className="font-extrabold leading-none" style={{ fontSize: 56, color: '#1EC9AF', letterSpacing: '-3px' }}>+120%</div>
          <div className="text-xs text-gray-400 mt-1.5">경쟁사 대비 <span style={{ color: '#1EC9AF', fontWeight: 700 }}>1.3배</span> 초과 수익</div>
        </div>
        <div className="px-8 pb-8">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 128 }}>
            <defs>
              <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1EC9AF" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#1EC9AF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#cg2)" />
            <path d={d} fill="none" stroke="#1EC9AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={xs[xs.length - 1].toFixed(1)} cy={ys[ys.length - 1].toFixed(1)} r="5" fill="#1EC9AF" />
            <circle cx={xs[xs.length - 1].toFixed(1)} cy={ys[ys.length - 1].toFixed(1)} r="10" fill="#1EC9AF" fillOpacity="0.15" />
          </svg>
          <div className="flex justify-between mt-2 text-[10px] text-gray-300">
            {['2019', '2021', '2023', '2024'].map(y => <span key={y}>{y}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function ChecklistVisual() {
  const steps = [
    { label: '앱 다운로드 완료', done: true },
    { label: 'KB증권 계좌 연결 완료', done: true },
    { label: 'AI 자동 리밸런싱 시작', done: false },
  ]
  return (
    <div className="w-full max-w-[420px] select-none slide-visual-enter">
      <div className="bg-white rounded-3xl overflow-hidden" style={{ border: '1px solid #EAECEF', boxShadow: '0 24px 80px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)' }}>
        <div className="p-8 pb-5">
          <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">시작 가이드</div>
          <div className="font-extrabold leading-tight" style={{ fontSize: 28, color: '#0D0D0D', letterSpacing: '-1px' }}>3분이면 완료</div>
        </div>
        <div className="px-8 pb-8 space-y-2.5">
          {steps.map(({ label, done }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-3.5 rounded-2xl" style={{ background: done ? '#F0FDF9' : '#F9FAFB', border: `1px solid ${done ? 'rgba(30,201,175,0.15)' : '#EFEFEF'}` }}>
              <CheckCircleIcon className="w-5 h-5 flex-shrink-0" style={{ color: done ? '#1EC9AF' : '#D1D5DB' }} />
              <span className="text-[13px] font-medium" style={{ color: done ? '#0D0D0D' : '#9CA3AF' }}>{label}</span>
              {done && <span className="ml-auto text-[10px] font-bold" style={{ color: '#1EC9AF' }}>완료</span>}
            </div>
          ))}
          <div className="pt-3">
            <div className="flex justify-between text-[11px] mb-2">
              <span className="text-gray-400">진행률</span>
              <span className="font-bold" style={{ color: '#1EC9AF' }}>2/3 완료</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: '66%', background: '#1EC9AF' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clear = () => { if (timerRef.current) clearInterval(timerRef.current) }

  const start = () => {
    clear()
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
      setProgressKey(k => k + 1)
    }, DURATION)
  }

  useEffect(() => { start(); return clear }, [])

  const go = (idx: number) => {
    if (idx === current) return
    setCurrent(idx)
    setProgressKey(k => k + 1)
    start()
  }

  const s = slides[current]
  const isDark = s.dark

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: 720 }}
      onMouseEnter={clear}
      onMouseLeave={start}
    >
      {/* Slides: crossfade via opacity */}
      {slides.map((sl, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? 'auto' : 'none',
            zIndex: i === current ? 1 : 0,
            background: sl.bg,
          }}
        >
          {sl.dark && (
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 65% at 75% 30%, rgba(30,201,175,0.1) 0%, transparent 65%)' }} />
          )}
        </div>
      ))}

      {/* Content (remounts on slide change → triggers entrance anim) */}
      <div
        key={current}
        className="relative max-w-[1160px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center slide-content-enter"
        style={{ zIndex: 2, paddingTop: 100, paddingBottom: 144, minHeight: 720 }}
      >
        {/* Text */}
        <div className="max-w-[580px]">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-8"
            style={{
              background: isDark ? 'rgba(30,201,175,0.12)' : 'rgba(30,201,175,0.08)',
              color: '#1EC9AF',
              border: '1px solid rgba(30,201,175,0.22)',
            }}
          >
            <span className="font-mono opacity-50 text-[10px]">{s.num}</span>
            {s.label}
          </div>

          <h1
            className="whitespace-pre-line mb-6"
            style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: '73px',
              letterSpacing: '-2px',
              color: isDark ? '#FFFFFF' : '#0D0D0D',
            }}
          >
            {s.title}
          </h1>

          <p
            className="mb-10"
            style={{ fontSize: 16, fontWeight: 400, lineHeight: '29px', color: isDark ? 'rgba(255,255,255,0.42)' : '#6B7280', maxWidth: 420 }}
          >
            {s.desc}
          </p>

          <div className="flex gap-3 flex-wrap">
            {s.primaryBtn.external ? (
              <a
                href={s.primaryBtn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 text-[14px] font-bold text-white rounded-xl no-underline transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
                style={{ background: '#1EC9AF' }}
              >
                {s.primaryBtn.label}
              </a>
            ) : (
              <Link
                href={s.primaryBtn.href}
                className="inline-flex items-center px-7 py-3.5 text-[14px] font-bold text-white rounded-xl no-underline transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
                style={{ background: '#1EC9AF' }}
              >
                {s.primaryBtn.label}
              </Link>
            )}

            {s.secondaryBtn && (
              <Link
                href={s.secondaryBtn.href}
                className="inline-flex items-center px-7 py-3.5 text-[14px] font-medium rounded-xl no-underline transition-all duration-150 hover:-translate-y-0.5"
                style={
                  isDark
                    ? { color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }
                    : { color: '#4B5563', border: '1px solid #E5E7EB', background: 'rgba(0,0,0,0.02)' }
                }
              >
                {s.secondaryBtn.label}
              </Link>
            )}
          </div>
        </div>

        {/* Visual */}
        <div className="hidden lg:flex justify-center items-center">
          {s.visual === 'phone' && <PhoneMockup dark placeholderLabel="앱 대시보드 스크린샷" />}
          {s.visual === 'chart' && <ChartVisual />}
          {s.visual === 'checklist' && <ChecklistVisual />}
        </div>
      </div>

      {/* Progress navigation */}
      <div className="absolute bottom-0 left-0 right-0 pb-8" style={{ zIndex: 3 }}>
        <div className="max-w-[1160px] mx-auto px-8">
          <div className="flex items-end gap-3">
            {slides.map((sl, i) => {
              const isActive = i === current
              return (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="flex flex-col gap-1.5 text-left focus:outline-none"
                  style={{ flex: isActive ? 2 : 1, minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.22,1,0.36,1)' }}
                  aria-label={`슬라이드 ${i + 1}`}
                >
                  {isActive && (
                    <span
                      className="text-[11px] font-medium truncate"
                      style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.38)' }}
                    >
                      {sl.label}
                    </span>
                  )}
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: 2, background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
                  >
                    {isActive
                      ? <div key={progressKey} className="h-full rounded-full slider-progress-bar" style={{ background: '#1EC9AF' }} />
                      : i < current
                        ? <div className="h-full w-full rounded-full" style={{ background: 'rgba(30,201,175,0.35)' }} />
                        : null
                    }
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold"
                    style={{ color: isActive ? '#1EC9AF' : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.22)' }}
                  >
                    {sl.num}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      {([
        { fn: () => go((current - 1 + slides.length) % slides.length), pos: 'left-5', lbl: '이전', char: '←' },
        { fn: () => go((current + 1) % slides.length), pos: 'right-5', lbl: '다음', char: '→' },
      ] as const).map(({ fn, pos, lbl, char }) => (
        <button
          key={lbl}
          onClick={fn}
          className={`absolute top-1/2 -translate-y-1/2 ${pos} w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-150 hover:scale-110 focus:outline-none`}
          style={{
            zIndex: 3,
            background: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.04)',
            color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.35)',
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
            backdropFilter: 'blur(8px)',
          }}
          aria-label={`${lbl} 슬라이드`}
        >
          {char}
        </button>
      ))}
    </section>
  )
}
