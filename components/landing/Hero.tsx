"use client"; // ← Needed because we use animations (client-side JavaScript)

import { motion } from "framer-motion"; // ← Animation library
import Link from "next/link"; // ← Next.js link (faster than <a>)
import { ArrowRight, Sparkles } from "lucide-react"; // ← Icons

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main content container - fades in from bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // ← Starts invisible, 20px down
          animate={{ opacity: 1, y: 0 }} // ← Ends visible, normal position
          transition={{ duration: 0.6 }} // ← Takes 0.6 seconds
        >
          {/* AI badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by AI</span>
          </div>

          {/* Main headline with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Journey to
            <br />
            US Universities Starts Here
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Personalized guidance, AI-powered learning, and expert mentorship to
            help Moroccan students achieve their American dream.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05 }} // ← Grows 5% on hover
                whileTap={{ scale: 0.95 }} // ← Shrinks 5% on click
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link href="#features">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                See How It Works
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats section - appears after main content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} // ← Starts 0.2s after page loads
          className="mt-16 relative"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Students Guided" },
                { number: "95%", label: "Acceptance Rate" },
                { number: "$2M+", label: "Scholarships Won" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }} // ← Starts small
                  animate={{ opacity: 1, scale: 1 }} // ← Grows to full size
                  transition={{ delay: 0.4 + i * 0.1 }} // ← Each stat appears slightly after previous
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
