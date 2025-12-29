import { UserButton } from "@clerk/nextjs";
import { Bell, Home, Trophy, Users, BookOpen, BarChart } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/dashboard">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                KeyBridge
              </h1>
            </Link>
            <div className="hidden md:flex gap-6">
              {[
                { icon: Home, label: "Dashboard", href: "/dashboard" },
                { icon: BarChart, label: "Progress", href: "/progress" },
                { icon: Users, label: "Mentors", href: "/mentors" },
                { icon: BookOpen, label: "Resources", href: "/resources" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
