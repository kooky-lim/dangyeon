import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '당연 - AI가 관리하는 연금 투자',
  description: 'EMP Shannon AI가 연금저축과 IRP 포트폴리오를 분석하고 4주마다 리밸런싱을 제안합니다.',
  openGraph: {
    title: '당연 - AI가 관리하는 연금 투자',
    description: '연금저축과 IRP를 더 쉽게 시작하고, AI 리밸런싱으로 꾸준히 관리하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans text-charcoal bg-white">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
