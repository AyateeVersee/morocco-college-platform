"use client";

import { motion } from "framer-motion";
import { Brain, Users, Trophy, Zap, Target, BookOpen } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Personalized study plans that adapt to your strengths and weaknesses",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with students from your dream schools for guidance",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Gamified Experience",
    description: "Stay motivated with achievements, streaks, and leaderboards",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Real-time Progress",
    description:
      "Track your application progress with live updates and reminders",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "Get matched with the perfect mentor for your goals",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    description:
      "Access workbooks, videos, and practice tests all in one place",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete platform designed specifically for Moroccan students
            applying to US universities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
