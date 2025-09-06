import Link from "next/link";
import { ArrowRight, Sparkles, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-b from-mastero-bg-subtle to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 shadow-sm">
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
            Connect with{" "}
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
            Transform your career with personalized guidance from industry
            experts. Our AI matches you with the perfect mentor for your goals.
          </motion.p>

          {/* CTA Buttons */}
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 
               text-base 
               px-6 py-4 
               rounded-xl shadow-md  md:w-auto"
            >
              <Link
                href="/ai-assessment"
                className="flex items-center gap-2 justify-center"
              >
                Start AI Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base 
               px-8 py-4 
               rounded-xl border-purple-400/50 hover:border-purple-600 
               md:w-auto"
            >
              <Link
                href="/find-mentor"
                className="flex items-center justify-center"
              >
                Browse Mentors
              </Link>
            </Button>
          </motion.div>

          {/* Hero Stats with Icons (responsive) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto"
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md flex-1">
              <Users className="h-8 w-8 text-purple-500 mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark">
                5,000+
              </div>
              <div className="text-mastero-text-medium mt-1">
                Expert Mentors
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md flex-1">
              <CheckCircle className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark">
                50,000+
              </div>
              <div className="text-mastero-text-medium mt-1">
                Successful Matches
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md flex-1">
              <Star className="h-8 w-8 text-yellow-500 mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark">
                95%
              </div>
              <div className="text-mastero-text-medium mt-1">
                Satisfaction Rate
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
