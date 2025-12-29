"use client";

import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import {
  Target,
  Clock,
  Award,
  TrendingUp,
  BookOpen,
  Users,
  Calendar,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useUser();

  const stats = [
    {
      icon: Target,
      label: "Applications",
      value: "0/8",
      color: "blue",
      description: "Track your progress",
    },
    {
      icon: Clock,
      label: "Days Left",
      value: "180",
      color: "orange",
      description: "Until deadlines",
    },
    {
      icon: Award,
      label: "Tasks Done",
      value: "0/25",
      color: "green",
      description: "Complete your checklist",
    },
    {
      icon: TrendingUp,
      label: "Streak",
      value: "1 day",
      color: "purple",
      description: "Keep going!",
    },
  ];

  const quickActions = [
    {
      icon: BookOpen,
      label: "Start Placement Test",
      description: "Find your level",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      label: "Find a Mentor",
      description: "Get matched with experts",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      label: "View Deadlines",
      description: "Stay on track",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.firstName}! 👋
        </h1>
        <p className="text-blue-100">
          Ready to continue your journey to US universities?
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-${stat.color}-100 flex items-center justify-center mb-4`}
            >
              <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-gray-900 font-medium mb-1">{stat.label}</div>
            <div className="text-gray-500 text-sm">{stat.description}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all text-left"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}
              >
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{action.label}</h3>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Tasks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
      >
        <h2 className="text-xl font-bold mb-4">Today&apos;s Tasks</h2>
        <div className="space-y-3">
          {[
            { task: "Complete your profile", progress: 100, color: "green" },
            { task: "Take English placement test", progress: 0, color: "blue" },
            { task: "Research 3 universities", progress: 0, color: "purple" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={item.progress === 100}
                readOnly
                className="w-5 h-5 rounded"
              />
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span
                    className={
                      item.progress === 100
                        ? "line-through text-gray-400"
                        : "text-gray-900"
                    }
                  >
                    {item.task}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${item.color}-500 transition-all`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Motivational Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100"
      >
        <p className="text-lg italic text-gray-700 mb-2">
          &quot;The future belongs to those who believe in the beauty of their
          dreams.&quot;
        </p>
        <p className="text-sm text-gray-500">— Eleanor Roosevelt</p>
      </motion.div>
    </div>
  );
}
