"use client";

import { motion } from "framer-motion";
import { Brain, Users, Trophy, Zap, Target, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized study plans that adapt to your strengths and weaknesses",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with students from your dream schools for guidance",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Gamified Experience",
    description: "Stay motivated with achievements, streaks, and leaderboards",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Real-time Progress",
    description: "Track your application progress with live updates and reminders",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Get matched with the perfect mentor for your goals",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    description: "Access workbooks, videos, and practice tests all in one place",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-black">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A complete platform designed specifically for Moroccan students applying to US universities
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
