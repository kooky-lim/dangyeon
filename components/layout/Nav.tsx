'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LINKS } from '@/lib/constants'

const navLinks = [
  { label: '서비스', href: '/service' },
  { label: '성과', href: '/performance' },
  { label: '회사소개', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled || menuOpen ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-[1160px] mx-auto px-6 md:px-8 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline" aria-label="당연 홈">
          <Image
            src="/logo/logoMain.png"
            alt="당연"
            width={82}
            height={30}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-[14px] rounded-lg transition-colors duration-150 no-underline"
              style={{
                color: pathname === href ? '#1EC9AF' : '#4B5563',
                fontWeight: pathname === href ? 700 : 500,
              }}
            >
              {label}
            </Link>
          ))}
          <a
            href={LINKS.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[14px] font-medium text-gray-500 hover:text-[#0D0D0D] no-underline transition-colors duration-150"
          >
            블로그
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={LINKS.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[13px] font-semibold rounded-lg no-underline transition-all duration-150 text-gray-500 hover:text-[#0D0D0D]"
            style={{ border: '1px solid #E5E7EB' }}
          >
            상담하기
          </a>
          <a
            href={LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-[13px] font-bold text-white rounded-lg no-underline transition-all duration-150 hover:-translate-y-0.5"
            style={{ background: '#1EC9AF' }}
          >
            앱 다운로드
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#0D0D0D]"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="메뉴"
        >
          {menuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? 420 : 0,
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="px-6 py-3 flex flex-col">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-3.5 text-[15px] border-b border-gray-100 no-underline"
              style={{ color: pathname === href ? '#1EC9AF' : '#0D0D0D', fontWeight: pathname === href ? 700 : 500 }}
            >
              {label}
            </Link>
          ))}
          <a href={LINKS.blog} target="_blank" rel="noopener noreferrer" className="py-3.5 text-[15px] text-[#0D0D0D] border-b border-gray-100 no-underline">
            블로그
          </a>
          <a href={LINKS.kakao} target="_blank" rel="noopener noreferrer" className="py-3.5 text-[15px] text-[#0D0D0D] border-b border-gray-100 no-underline">
            상담하기
          </a>
          <a
            href={LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 mb-2 py-3.5 text-[15px] font-bold text-white text-center no-underline rounded-xl"
            style={{ background: '#1EC9AF' }}
          >
            앱 다운로드
          </a>
        </div>
      </div>
    </header>
  )
}
