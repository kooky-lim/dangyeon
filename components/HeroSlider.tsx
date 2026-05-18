'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    bg: '#F4F9FF',
    eyebrow: 'AI 연금 투자자문 서비스',
    title: '어려운 연금관리,\n이제 AI에게 맡기세요',
    desc: 'EMP 섀넌 AI가 4주마다 최적의 포트폴리오로\n자동 리밸런싱해 드립니다.',
    primary: { label: '무료로 시작하기', href: '#' },
    secondary: { label: '서비스 소개 보기', href: '#products' },
  },
  {
    bg: '#E8FAF6',
    eyebrow: 'EMP 섀넌 AI 기술',
    title: '알파고와 같은\n강화학습 AI가\n투자를 결정합니다',
    desc: '과거 경험을 바탕으로 현재 상황에서\n최적의 행동을 선택하는 AI 기술',
    primary: { label: 'AI 기술 알아보기', href: '#' },
    secondary: null,
  },
  {
    bg: '#FFF8F0',
    eyebrow: '간편 시작',
    title: '3분이면\n연금 투자를\n시작할 수 있어요',
    desc: '복잡한 서류 없이 앱에서 바로\nKB증권 연금저축 계좌를 개설하세요.',
    primary: { label: '앱 다운로드', href: '#' },
    secondary: { label: '이용 방법 보기', href: '#solutions' },
  },
]

function Slide1Visual() {
  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24, boxShadow: '0 16px 48px rgba(0,0,0,0.1)', border: '1px solid #E0E0E0' }}>
      <div style={{ fontSize: 11, color: '#9E9E9E', fontWeight: 600, marginBottom: 6 }}>내 연금 총 평가금액</div>
      <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-1.5px', color: '#1A1A1A', marginBottom: 4 }}>₩24,381,200</div>
      <div style={{ fontSize: 13, color: '#1EC9AF', fontWeight: 600, marginBottom: 20 }}>↑ +₩184,200 (+0.76%)</div>
      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 56, marginBottom: 16 }}>
        {[35, 50, 42, 65, 55, 70, 62].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0', background: '#E0E0E0' }} />
        ))}
        <div style={{ flex: 1, height: '85%', borderRadius: '3px 3px 0 0', background: '#1EC9AF' }} />
      </div>
      <div style={{ background: 'rgba(30,201,175,0.08)', border: '1px solid rgba(30,201,175,0.15)', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: '#1EC9AF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'white', fontWeight: 800, flexShrink: 0 }}>♻</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1A1A' }}>AI 리밸런싱 제안 도착</div>
          <div style={{ fontSize: 11, color: '#9E9E9E' }}>4주 주기 최적화 완료</div>
        </div>
        <div style={{ marginLeft: 'auto', background: '#1EC9AF', color: 'white', fontSize: 11, fontWeight: 800, padding: '5px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>수락하기</div>
      </div>
    </div>
  )
}

function Slide2Visual() {
  const items = [
    { color: '#1EC9AF', label: '국내외 주식 ETF', pct: 65 },
    { color: '#A7F1E7', label: '채권 ETF', pct: 25 },
    { color: '#ccc', label: '대안자산', pct: 10 },
  ]
  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 24, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#9E9E9E', marginBottom: 16 }}>자산 배분 최적화</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(({ color, label, pct }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
            <div style={{ fontSize: 13, color: '#1A1A1A', flex: 1 }}>{label}</div>
            <div style={{ flex: 2, height: 6, background: '#F5F5F5', borderRadius: 3 }}>
              <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 3 }} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1A1A', minWidth: 28 }}>{pct}%</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #E0E0E0', display: 'flex', justifyContent: 'space-between' }}>
        {[{ val: '+8.4%', label: '연환산 수익률', color: '#1EC9AF' }, { val: '4주', label: '리밸런싱 주기', color: '#1A1A1A' }, { val: '0.015%', label: '자문 수수료', color: '#1A1A1A' }].map(({ val, label, color }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color }}>{val}</div>
            <div style={{ fontSize: 11, color: '#9E9E9E' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const visuals = [<Slide1Visual key={0} />, <Slide2Visual key={1} />, null]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const go = useCallback((idx: number) => setCurrent((idx + 3) % 3), [])

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % 3), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="mt-16 relative overflow-hidden border-b border-[#E0E0E0]">
      {/* Slides */}
      <div
        className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-[480px] flex items-center relative overflow-hidden"
            style={{ background: slide.bg }}
          >
            <div className="max-w-[1160px] mx-auto px-8 w-full relative h-full flex items-center">
              {/* Content */}
              <div className="max-w-[480px] z-10">
                <span className="inline-block text-xs font-bold text-mint bg-[rgba(30,201,175,0.1)] px-3 py-1 rounded-full tracking-wide mb-4">
                  {slide.eyebrow}
                </span>
                <h1
                  className="text-[36px] font-extrabold leading-[1.2] tracking-[-1.5px] text-charcoal mb-4 whitespace-pre-line"
                >
                  {slide.title}
                </h1>
                <p className="text-base leading-[1.7] text-[#767676] mb-7 whitespace-pre-line">
                  {slide.desc}
                </p>
                <div className="flex gap-2.5 items-center">
                  <a
                    href={slide.primary.href}
                    className="px-6 py-3 text-sm font-bold text-white bg-charcoal rounded-[10px] hover:bg-[#3D3D3D] transition-colors no-underline"
                  >
                    {slide.primary.label}
                  </a>
                  {slide.secondary && (
                    <a
                      href={slide.secondary.href}
                      className="px-[22px] py-[11px] text-sm font-semibold text-[#3D3D3D] bg-white border border-[#E0E0E0] rounded-[10px] hover:border-[#9E9E9E] transition-colors no-underline"
                    >
                      {slide.secondary.label}
                    </a>
                  )}
                </div>
              </div>

              {/* Visual */}
              {visuals[i] && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[420px] hidden lg:block">
                  {visuals[i]}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center text-base cursor-pointer hover:border-[#9E9E9E] hover:shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all z-10"
      >
        ←
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center text-base cursor-pointer hover:border-[#9E9E9E] hover:shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all z-10"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-[6px] rounded-full border-none cursor-pointer transition-all duration-300 ${
              i === current ? 'w-6 bg-charcoal' : 'w-[6px] bg-[#C8C8C8]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
