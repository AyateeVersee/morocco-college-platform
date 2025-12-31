"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Minimal & Clean */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">KB</span>
            </div>
            <span className="text-xl font-semibold text-white tracking-tight">
              KeyBridge
            </span>
          </Link>

          {/* Desktop Menu - Minimal Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#features"
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA - Clean & Minimal */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link href="/sign-up">
              <button className="px-5 py-2.5 text-sm rounded-lg bg-white text-black font-semibold hover:bg-zinc-100 transition-all">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger - Minimal */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Clean Slide Down */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-zinc-800/50 mt-2">
            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="#features"
                className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-sm text-zinc-400 hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-5 py-2.5 text-sm rounded-lg border border-zinc-800 text-white font-medium hover:bg-zinc-900 transition-all">
                    Sign In
                  </button>
                </Link>
                <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-5 py-2.5 text-sm rounded-lg bg-white text-black font-semibold hover:bg-zinc-100 transition-all">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
