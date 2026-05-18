'use client'

import Image from 'next/image'

interface PhoneMockupProps {
  imageSrc?: string
  imageAlt?: string
  placeholderLabel?: string
  dark?: boolean
}

export default function PhoneMockup({
  imageSrc,
  imageAlt,
  placeholderLabel = '앱 스크린샷',
  dark = true,
}: PhoneMockupProps) {
  return (
    <div className="relative select-none" style={{ width: 240 }}>
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: -40,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30,201,175,0.18) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Phone outer shell */}
      <div
        className="relative rounded-[42px] overflow-hidden"
        style={{
          border: dark ? '8px solid rgba(255,255,255,0.13)' : '8px solid rgba(0,0,0,0.08)',
          aspectRatio: '9/19.5',
          background: dark ? '#0D1520' : '#F8F9FA',
          boxShadow: dark
            ? '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)'
            : '0 24px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)',
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span style={{ fontSize: 9, color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)', fontWeight: 700 }}>9:41</span>
          <div className="rounded-full" style={{ width: 60, height: 18, background: dark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.08)' }} />
          <div className="flex gap-1 items-center">
            <div style={{ fontSize: 8, color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)' }}>●●●</div>
          </div>
        </div>

        {/* Screen content */}
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt ?? placeholderLabel} fill className="object-cover object-top" />
        ) : (
          <MockAppUI dark={dark} />
        )}
      </div>

      {/* Home indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: 12,
          width: 80,
          height: 4,
          borderRadius: 2,
          background: dark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)',
        }}
      />
    </div>
  )
}

function MockAppUI({ dark }: { dark: boolean }) {
  const txt = (op: number) => dark ? `rgba(255,255,255,${op})` : `rgba(0,0,0,${op})`
  const bars = [38, 52, 45, 66, 58, 72, 61, 84, 75, 95]

  return (
    <div className="flex flex-col h-full px-4 pb-4 gap-2.5" style={{ paddingTop: 6 }}>
      {/* Portfolio header */}
      <div className="rounded-2xl p-3.5" style={{ background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)', border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}` }}>
        <div style={{ fontSize: 8, color: txt(0.35), fontWeight: 600, marginBottom: 2 }}>연금저축펀드 총 평가금액</div>
        <div style={{ fontSize: 16, fontWeight: 800, color: dark ? '#fff' : '#0D0D0D', letterSpacing: '-0.5px', lineHeight: 1.1 }}>₩24,381,200</div>
        <div style={{ fontSize: 9, color: '#1EC9AF', fontWeight: 700, marginTop: 2 }}>▲ +8.4%&nbsp;&nbsp;+₩1,904,500</div>

        {/* Mini chart */}
        <div className="flex items-end gap-0.5 mt-2.5" style={{ height: 28 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1
                  ? '#1EC9AF'
                  : `rgba(30,201,175,${0.08 + (i / bars.length) * 0.2})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Allocation bars */}
      <div className="rounded-2xl p-3" style={{ background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)', border: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}>
        <div style={{ fontSize: 8, color: txt(0.3), fontWeight: 600, marginBottom: 6 }}>현재 포트폴리오</div>
        {[
          { label: '국내외 주식 ETF', pct: 65, color: '#1EC9AF' },
          { label: '채권 ETF',         pct: 25, color: 'rgba(30,201,175,0.5)' },
          { label: '대안자산',          pct: 10, color: 'rgba(30,201,175,0.25)' },
        ].map(({ label, pct, color }) => (
          <div key={label} className="flex items-center gap-1.5 mb-1.5 last:mb-0">
            <div className="flex-1" style={{ fontSize: 8, color: txt(0.55) }}>{label}</div>
            <div style={{ width: 48, height: 4, borderRadius: 2, background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)' }}>
              <div style={{ width: `${pct}%`, height: '100%', borderRadius: 2, background: color }} />
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, color: txt(0.7), width: 20, textAlign: 'right' }}>{pct}%</div>
          </div>
        ))}
      </div>

      {/* Rebalancing notification */}
      <div className="rounded-2xl p-3" style={{ background: 'rgba(30,201,175,0.1)', border: '1px solid rgba(30,201,175,0.2)' }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#1EC9AF' }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2 6C2 3.79 3.79 2 6 2s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" stroke="white" strokeWidth="1.2" />
              <path d="M6 4v2.5l1.5 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div style={{ fontSize: 8, fontWeight: 700, color: '#1EC9AF' }}>AI 리밸런싱 제안 도착</div>
            <div style={{ fontSize: 7, color: txt(0.4), marginTop: 1 }}>4주 주기 최적화 완료</div>
          </div>
          <div className="rounded-md px-2 py-1 flex-shrink-0" style={{ background: '#1EC9AF', fontSize: 7, fontWeight: 800, color: '#fff' }}>수락</div>
        </div>
      </div>
    </div>
  )
}
