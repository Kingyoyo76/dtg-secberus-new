'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { useCTAForm } from "@/contexts/cta-form-context"
import Image from 'next/image'
import Link from 'next/link'
import { FlashingCTAButton } from './flashing-cta-button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ctaForm = useCTAForm()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { title: "Features", href: "/#what-you-get" },
    { title: "How It Works", href: "/#how-it-works" },
    { title: "Results", href: "/#results" },
    { title: "FAQ", href: "/faq" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 sm:space-x-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T2AxAuqMD795FMaChpXHt3YtSxni0Q.png"
              alt="DTG Logo"
              width={180}
              height={60}
              className="h-8 sm:h-12 w-auto brightness-0 hover:brightness-100 transition-all"
            />
            <span className="text-purple-600 font-semibold text-xl">+</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u6BoIoBXPKihzjV1TG3JCCE1sI7BSh.png"
              alt="Secberus Logo"
              width={180}
              height={60}
              className="h-8 sm:h-12 w-auto brightness-0 hover:brightness-100 transition-all"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="text-gray-500 hover:text-gray-900">
                {item.title}
              </Link>
            ))}
            <FlashingCTAButton />
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <FlashingCTAButton />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
