"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter Pack",
    price: "1,500",
    currency: "DH",
    description: "Perfect for students just starting to explore",
    features: [
      "Complete roadmap & timeline",
      "All templates & resources",
      "SAT/TOEFL prep groups",
      "Monthly webinars",
      "Essay outlines & guides",
    ],
    notIncluded: ["No 1-on-1 mentorship"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Guided Path",
    price: "5,000",
    currency: "DH",
    description: "For serious students who want expert guidance",
    features: [
      "Everything in Starter Pack",
      "4 mentor sessions (1h each)",
      "College list building session",
      "Essay brainstorming & review",
      "Review of 2 essays",
      "Priority mentor access",
    ],
    cta: "Start Now",
    popular: true,
  },
  {
    name: "Full Support",
    price: "12,000",
    currency: "DH",
    description: "Complete guidance from start to acceptance",
    features: [
      "Everything in Guided Path",
      "10 mentor sessions (6-8 months)",
      "Unlimited essay reviews (8 apps)",
      "Full Common App review",
      "Scholarship strategy",
      "Mock interviews",
      "Regular WhatsApp check-ins",
    ],
    cta: "Get Full Support",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-32 bg-zinc-950">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            10x more affordable than traditional agencies. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-white text-black ring-2 ring-white'
                  : 'bg-zinc-900 border border-zinc-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
                  {plan.price}
                </span>
                <span className={`text-xl ${plan.popular ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  {plan.currency}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-8 ${plan.popular ? 'text-zinc-700' : 'text-zinc-400'}`}>
                {plan.description}
              </p>

              {/* CTA Button */}
              <Link href="/sign-up">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-zinc-900'
                      : 'bg-white text-black hover:bg-zinc-100'
                  }`}
                >
                  {plan.cta}
                </button>
              </Link>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-green-600' : 'text-green-400'
                    }`} />
                    <span className={plan.popular ? 'text-zinc-700' : 'text-zinc-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded && plan.notIncluded.map((item, i) => (
                  <li key={`not-${i}`} className="flex items-start gap-3 opacity-50">
                    <span className="text-zinc-500">✕</span>
                    <span className="text-zinc-500 line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Money-back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 text-lg">
            <span className="font-semibold text-white">14-day money-back guarantee.</span> Not satisfied? Full refund, no questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
