"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  {
    title: "Let's get to know you",
    description: "Tell us about your background",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
      },
      { name: "age", label: "Age", type: "number", placeholder: "Your age" },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "Your city in Morocco",
      },
    ],
  },
  {
    title: "Your academic goals",
    description: "What are you aiming for?",
    fields: [
      {
        name: "dreamSchools",
        label: "Dream Schools",
        type: "text",
        placeholder: "e.g., Harvard, MIT, Stanford (comma separated)",
      },
      {
        name: "intendedMajor",
        label: "Intended Major",
        type: "text",
        placeholder: "e.g., Computer Science",
      },
      {
        name: "graduationYear",
        label: "Expected High School Graduation",
        type: "text",
        placeholder: "e.g., 2026",
      },
    ],
  },
  {
    title: "Current status",
    description: "Where are you in your journey?",
    fields: [
      {
        name: "satScore",
        label: "SAT Score (if taken)",
        type: "text",
        placeholder: "e.g., 1450 or N/A",
      },
      {
        name: "toeflScore",
        label: "TOEFL Score (if taken)",
        type: "text",
        placeholder: "e.g., 105 or N/A",
      },
      {
        name: "gpa",
        label: "GPA / Average Grade",
        type: "text",
        placeholder: "e.g., 18/20 or 4.0",
      },
    ],
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const router = useRouter();
  const { user } = useUser();

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // TODO: Save data to database
      console.log("Onboarding complete!", formData);
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full"
      >
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Welcome to KeyBridge, {user?.firstName || "there"}! 👋
          </h1>
          <p className="text-gray-600">
            Let&apos;s get you set up in just a few steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 mx-1 rounded-full transition-colors ${
                  i <= currentStep ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600 text-center">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600 mb-8">
              {steps[currentStep].description}
            </p>

            <div className="space-y-4 mb-8">
              {steps[currentStep].fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
