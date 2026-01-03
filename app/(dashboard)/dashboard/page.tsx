"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Target, 
  BookOpen, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  Video,
  MessageSquare
} from "lucide-react";

type OnboardingData = {
  fullName: string;
  gradeLevel: string;
  targetSchools: string[];
  intendedMajor: string;
  budget: string;
  timeline: string;
};

export default function DashboardPage() {
  const [userData, setUserData] = useState<OnboardingData | null>(null);

  useEffect(() => {
    // Load user data from localStorage
    const stored = localStorage.getItem("onboardingData");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const upcomingDeadlines = [
    { title: "SAT Registration", date: "Feb 15, 2025", status: "upcoming" },
    { title: "Common App Opens", date: "Aug 1, 2025", status: "upcoming" },
    { title: "Early Decision Deadline", date: "Nov 1, 2025", status: "future" },
  ];

  const quickActions = [
    { 
      icon: FileText, 
      label: "Start Your Essay", 
      description: "Begin your Common App personal statement",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: Users, 
      label: "Book a Mentor", 
      description: "Schedule a 1-on-1 session",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: Video, 
      label: "Watch Webinar", 
      description: "Learn about financial aid",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Target, 
      label: "Build College List", 
      description: "Find your best-fit schools",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {userData?.fullName?.split(" ")[0] || "Student"}
          </h1>
          <p className="text-zinc-400 text-lg">
            Let's continue building your path to US universities
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Target}
            label="Target Schools"
            value={userData?.targetSchools?.length || 0}
            color="from-blue-500 to-cyan-500"
          />
          <StatCard
            icon={CheckCircle2}
            label="Tasks Complete"
            value="2/15"
            color="from-green-500 to-emerald-500"
          />
          <StatCard
            icon={Calendar}
            label="Days Until Deadline"
            value="45"
            color="from-orange-500 to-red-500"
          />
          <StatCard
            icon={TrendingUp}
            label="Progress"
            value="13%"
            color="from-purple-500 to-pink-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Section title="Quick Actions">
              <div className="grid md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all text-left group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{action.label}</h3>
                    <p className="text-zinc-400 text-sm">{action.description}</p>
                  </motion.button>
                ))}
              </div>
            </Section>

            {/* Progress Tracker */}
            <Section title="Your Progress">
              <div className="space-y-4">
                <ProgressItem
                  title="Complete Profile"
                  description="Add your academic background and test scores"
                  progress={100}
                  status="complete"
                />
                <ProgressItem
                  title="Build College List"
                  description="Research and select your target schools"
                  progress={userData?.targetSchools?.length ? 50 : 0}
                  status={userData?.targetSchools?.length ? "in-progress" : "pending"}
                />
                <ProgressItem
                  title="Prepare for SAT"
                  description="Join study groups and take practice tests"
                  progress={25}
                  status="in-progress"
                />
                <ProgressItem
                  title="Write Essays"
                  description="Draft your personal statement and supplements"
                  progress={0}
                  status="pending"
                />
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Deadlines */}
            <Section title="Upcoming Deadlines">
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">
                          {deadline.title}
                        </h4>
                        <p className="text-zinc-400 text-sm">{deadline.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Your Schools */}
            {userData?.targetSchools && userData.targetSchools.length > 0 && (
              <Section title="Your Target Schools">
                <div className="space-y-2">
                  {userData.targetSchools.slice(0, 5).map((school, index) => (
                    <div
                      key={index}
                      className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white text-sm"
                    >
                      {school}
                    </div>
                  ))}
                  {userData.targetSchools.length > 5 && (
                    <button className="w-full p-3 text-zinc-400 hover:text-white text-sm transition-colors">
                      +{userData.targetSchools.length - 5} more
                    </button>
                  )}
                </div>
              </Section>
            )}

            {/* Need Help */}
            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl">
              <MessageSquare className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Need Help?</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Book a session with a mentor who studied at your dream school
              </p>
              <button className="w-full px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-100 transition-all text-sm">
                Book a Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}

function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  color 
}: { 
  icon: any; 
  label: string; 
  value: string | number; 
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} p-2 mb-4`}>
        <Icon className="w-full h-full text-white" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-zinc-400 text-sm">{label}</div>
    </motion.div>
  );
}

function ProgressItem({
  title,
  description,
  progress,
  status,
}: {
  title: string;
  description: string;
  progress: number;
  status: "complete" | "in-progress" | "pending";
}) {
  return (
    <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-xl">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-1">{title}</h3>
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>
        {status === "complete" && (
          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`h-full ${
              status === "complete"
                ? "bg-green-500"
                : status === "in-progress"
                ? "bg-blue-500"
                : "bg-zinc-700"
            }`}
          />
        </div>
        <span className="text-zinc-400 text-sm font-medium w-12 text-right">
          {progress}%
        </span>
      </div>
    </div>
  );
}
