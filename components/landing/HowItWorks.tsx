"use client";

import { motion } from "framer-motion";
import { Search, FileText, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Explore Your Path",
    description: "Get matched with mentors who studied at your dream schools. Build your college list based on fit, not just rankings.",
    features: ["College list building", "SAT/TOEFL prep groups", "Access to all resources"],
  },
  {
    number: "02",
    icon: FileText,
    title: "Build Your Application",
    description: "Work with mentors to craft authentic essays, perfect your Common App, and submit your strongest application.",
    features: ["1-on-1 mentorship", "Essay brainstorming & review", "Application strategy"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Get Accepted",
    description: "Navigate financial aid, scholarships, and visa processes. Join a community of Moroccan students heading to the US.",
    features: ["Scholarship guidance", "Mock interviews", "Visa support resources"],
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From exploration to acceptance—your clear path to US universities
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Icon & Number */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-6xl font-bold text-zinc-800 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-zinc-300">
                            <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right: Visual */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-12 flex items-center justify-center overflow-hidden">
                    {/* Decorative gradient blob */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                    <step.icon className="w-32 h-32 text-zinc-700 relative z-10" />
                  </div>
                </div>
              </div>

              {/* Connector line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-zinc-700 to-transparent mt-12"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
