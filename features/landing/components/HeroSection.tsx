import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-b from-mastero-bg-subtle to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-mastero-blue-start" />
            <span className="text-sm font-medium text-mastero-text-medium">
              AI-Powered Mentorship Matching
            </span>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-mastero-dark mb-6 leading-tight"
          >
            Connect with{' '}
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              World-Class Mentors
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-mastero-text-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your career with personalized guidance from industry experts.
            Our AI matches you with the perfect mentor for your goals.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-lg px-8 py-6 rounded-2xl shadow-md">
              <Link href="/ai-assessment" className="flex items-center gap-2">
                Start AI Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 rounded-2xl border-purple-400/50 hover:border-purple-600">
              <Link href="/find-mentor">Browse Mentors</Link>
            </Button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark mb-2">5,000+</div>
              <div className="text-mastero-text-medium">Expert Mentors</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark mb-2">50,000+</div>
              <div className="text-mastero-text-medium">Successful Matches</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark mb-2">95%</div>
              <div className="text-mastero-text-medium">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}