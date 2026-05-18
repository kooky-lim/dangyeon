'use client'

import { useState } from 'react'
import {
  ArrowPathIcon,
  ChartBarIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

const 기준일 = '2026.04'

const rankSummary = [
  { type: '적극형', rank: '2위', total: '-', note: '위험 대비 수익률 기준' },
  { type: '중립형', rank: '2위', total: '-', note: '위험 대비 수익률 기준' },
  { type: '안정형', rank: '2위', total: '-', note: '위험 대비 수익률 기준' },
  { type: '연금저축 통합', rank: '4위', total: '1,261개 중', note: 'RATB 연금저축 전체 전략 기준' },
  { type: 'IRP', rank: '4위', total: '807개 중', note: 'RATB IRP 전체 전략 기준' },
]

const detailRows = [
  {
    category: '적극형',
    rank: '2위',
    universe: 'RATB 적극형 전략',
    metric: '샤프지수',
    returnLabel: 'API 연동 후 표시',
    volatility: 'API 연동 후 표시',
    source: '코스콤 RATB',
  },
  {
    category: '중립형',
    rank: '2위',
    universe: 'RATB 중립형 전략',
    metric: '샤프지수',
    returnLabel: 'API 연동 후 표시',
    volatility: 'API 연동 후 표시',
    source: '코스콤 RATB',
  },
  {
    category: '안정형',
    rank: '2위',
    universe: 'RATB 안정형 전략',
    metric: '샤프지수',
    returnLabel: 'API 연동 후 표시',
    volatility: 'API 연동 후 표시',
    source: '코스콤 RATB',
  },
  {
    category: '연금저축 통합',
    rank: '4위',
    universe: '1,261개 전략',
    metric: '샤프지수',
    returnLabel: 'API 연동 후 표시',
    volatility: 'API 연동 후 표시',
    source: '코스콤 RATB',
  },
  {
    category: 'IRP',
    rank: '4위',
    universe: '807개 전략',
    metric: '샤프지수',
    returnLabel: 'API 연동 후 표시',
    volatility: 'API 연동 후 표시',
    source: '코스콤 RATB',
  },
]

const apiChecklist = [
  ['API 문서 확인', '20170614_RATestBed_API.pdf 기준 엔드포인트와 파라미터 검증 필요'],
  ['인증 방식 확인', '기관 인증키, IP 제한, 호출 권한 여부 확인 필요'],
  ['응답 매핑', '순위, 샤프지수, 수익률, 변동성, 기준일 필드 매핑 필요'],
  ['공개 가능 범위', '상업용 홈페이지 노출 가능 여부와 고지 문구 확인 필요'],
]

const researchCards = [
  ['위험 대비 성과', '수익률만이 아니라 변동성을 함께 고려하는 샤프지수를 핵심 지표로 표시합니다.'],
  ['유형별 비교', '적극형, 중립형, 안정형처럼 투자 성향별 비교가 가능하도록 구성합니다.'],
  ['투명한 고지', '기준일, 출처, 과거 성과 한계를 페이지 상단과 하단에 반복 고지합니다.'],
]

function Notice() {
  return (
    <div className="border-b border-[#FDE68A] bg-[#FFFBEB] px-6 py-3 text-center text-xs leading-relaxed text-[#92400E]">
      본 페이지의 순위와 성과 정보는 백테스트 및 위험 대비 성과 기준입니다. 실제 투자 성과와 다를 수 있으며, 과거 성과가 미래 수익을 보장하지 않습니다.
    </div>
  )
}

export default function PerformancePage() {
  const [status, setStatus] = useState<'snapshot' | 'api'>('snapshot')

  return (
    <>
      <Notice />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-8 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">RATB Performance</span>
            <h1 className="mt-3 text-[40px] font-extrabold leading-tight text-[#0D0D0D] md:text-[58px]">
              코스콤 RATB 샤프지수<br />전 유형 2위
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.8] text-gray-500">
              당연의 AI 전략은 위험 대비 수익률 기준으로 검증된 성과를 기록했습니다. 현재 페이지는 기준일 {기준일}의 순위 스냅샷을 우선 표시하며, RATB API 가능 여부 검증 후 실데이터 연동으로 확장할 예정입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setStatus('snapshot')}
                className="rounded-xl px-5 py-3 text-sm font-extrabold transition"
                style={{ background: status === 'snapshot' ? '#0D0D0D' : '#F3F4F6', color: status === 'snapshot' ? '#FFFFFF' : '#6B7280' }}
              >
                스냅샷 보기
              </button>
              <button
                onClick={() => setStatus('api')}
                className="rounded-xl px-5 py-3 text-sm font-extrabold transition"
                style={{ background: status === 'api' ? '#0D0D0D' : '#F3F4F6', color: status === 'api' ? '#FFFFFF' : '#6B7280' }}
              >
                API 연동 상태
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#DCEDEA] bg-[#F4FAF8] p-7">
            <div className="rounded-3xl bg-white p-6 shadow-[0_14px_50px_rgba(15,161,143,0.10)]">
              <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-5">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#0FA18F]">기준일 {기준일}</div>
                  <div className="mt-2 text-xl font-extrabold text-[#0D0D0D]">위험 대비 성과 랭킹</div>
                </div>
                <div className="rounded-2xl bg-[#F0FDFB] px-5 py-3 text-center">
                  <div className="text-[11px] font-bold text-[#0FA18F]">전 유형</div>
                  <div className="text-4xl font-black text-[#1EC9AF]">2위</div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {rankSummary.slice(0, 3).map((item) => (
                  <div key={item.type} className="flex items-center justify-between rounded-2xl border border-gray-100 bg-[#FAFAFA] px-4 py-3">
                    <span className="text-sm font-bold text-[#0D0D0D]">{item.type}</span>
                    <span className="text-lg font-extrabold text-[#1EC9AF]">{item.rank}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-[1160px] px-6 md:px-8">
          <div className="mb-10">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">Rank Summary</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">순위 요약</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {rankSummary.map((item) => (
              <div key={item.type} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="text-sm font-extrabold text-[#0D0D0D]">{item.type}</div>
                <div className="mt-5 text-4xl font-extrabold text-[#1EC9AF]">{item.rank}</div>
                <div className="mt-2 text-xs font-bold text-gray-400">{item.total}</div>
                <p className="mt-4 text-xs leading-relaxed text-gray-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[330px_1fr]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">Detail Table</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">유형별 상세 표</h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-gray-500">
              이번 버전에서는 확인된 순위 스냅샷을 먼저 노출합니다. RATB API 연동 검증 후 샤프지수, 수익률, 변동성 값을 같은 표에 연결합니다.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
            <table className="min-w-[820px] w-full text-sm">
              <thead className="bg-gray-50 text-gray-400">
                <tr>
                  {['유형', '순위', '비교군', '핵심 지표', '수익률', '변동성', '기준일', '출처'].map((header) => (
                    <th key={header} className="px-5 py-4 text-left font-extrabold last:text-right">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {detailRows.map((row) => (
                  <tr key={row.category} className="border-t border-gray-100">
                    <td className="px-5 py-4 font-extrabold text-[#0D0D0D]">{row.category}</td>
                    <td className="px-5 py-4 font-extrabold text-[#1EC9AF]">{row.rank}</td>
                    <td className="px-5 py-4 text-gray-500">{row.universe}</td>
                    <td className="px-5 py-4 text-gray-500">{row.metric}</td>
                    <td className="px-5 py-4 text-gray-400">{row.returnLabel}</td>
                    <td className="px-5 py-4 text-gray-400">{row.volatility}</td>
                    <td className="px-5 py-4 text-gray-500">{기준일}</td>
                    <td className="px-5 py-4 text-right font-bold text-[#0D0D0D]">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] py-24 text-white">
        <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-[380px_1fr]">
          <div>
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">API Readiness</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-[42px]">RATB API 연동 전 확인할 항목</h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-white/45">
              API 가능 여부를 검증한 뒤, 현재 표의 스냅샷 데이터를 실제 응답 데이터로 교체하는 구조가 적절합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {apiChecklist.map(([title, desc], i) => {
              const Icon = [DocumentTextIcon, CheckCircleIcon, ArrowPathIcon, ExclamationTriangleIcon][i]
              return (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                  <Icon className="h-7 w-7 text-[#1EC9AF]" />
                  <h3 className="mt-5 text-lg font-extrabold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-white/45">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1160px] px-6 md:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1EC9AF]">Method</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0D0D0D] md:text-[42px]">성과 표시는 보수적으로 설계합니다</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {researchCards.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <ChartBarIcon className="h-7 w-7 text-[#1EC9AF]" />
                <h3 className="mt-5 text-xl font-extrabold text-[#0D0D0D]">{title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20">
        <div className="mx-auto max-w-[900px] px-6 md:px-8">
          <h2 className="text-2xl font-extrabold text-[#0D0D0D]">투자 유의사항</h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-gray-500">
            <li>투자자는 금융투자상품에 대하여 충분한 설명을 받을 권리가 있으며, 투자 전 상품 설명서와 약관을 반드시 확인해야 합니다.</li>
            <li>ETF 등 금융투자상품은 예금자보호 대상이 아니며, 운용 결과에 따라 원금 손실이 발생할 수 있습니다.</li>
            <li>백테스트와 순위 정보는 실제 고객 계좌별 수익률과 다를 수 있으며, 투자 시점, 주문 체결 가격, 수수료 등에 따라 차이가 발생할 수 있습니다.</li>
            <li>본 페이지의 데이터는 기준일 {기준일}에 확인된 스냅샷이며, RATB API 연동 전까지 자동 갱신되지 않습니다.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
