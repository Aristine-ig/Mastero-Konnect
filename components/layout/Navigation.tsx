'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed  top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              // initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Mastero Konnect
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/find-mentor', label: 'Find Mentors' },
              { href: '/ai-assessment', label: 'AI Assessment' },
              { href: '/profile-building', label: 'Profile' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-mastero-text-medium hover:text-mastero-dark transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="rounded-2xl border-purple-500/40 hover:border-purple-600">
              <Link href="/auth/sign-up">Become a Mentor</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 rounded-2xl shadow-md">
              <Link href="/auth/sign-in">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-mastero-text-medium hover:text-mastero-dark hover:bg-mastero-bg-subtle transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-border bg-white rounded-b-2xl shadow-md"
            >
              <div className="flex flex-col space-y-4">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/find-mentor', label: 'Find Mentors' },
                  { href: '/ai-assessment', label: 'AI Assessment' },
                  { href: '/profile-building', label: 'Profile' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-mastero-text-medium hover:text-mastero-dark transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                  <Button variant="outline" asChild className="rounded-2xl border-purple-500/40 hover:border-purple-600">
                    <Link href="/auth/sign-up" onClick={toggleMenu}>Become a Mentor</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 rounded-2xl shadow-md">
                    <Link href="/auth/sign-in" onClick={toggleMenu}>Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
