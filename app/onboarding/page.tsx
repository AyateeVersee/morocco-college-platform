"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

type OnboardingData = {
  fullName: string;
  gradeLevel: string;
  targetSchools: string[];
  intendedMajor: string;
  budget: string;
  timeline: string;
};

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    fullName: "",
    gradeLevel: "",
    targetSchools: [],
    intendedMajor: "",
    budget: "",
    timeline: "",
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleComplete = () => {
    localStorage.setItem("onboardingData", JSON.stringify(data));
    router.push("/dashboard");
  };

  const updateData = (field: keyof OnboardingData, value: any) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-2xl w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">KB</span>
          </div>
          <span className="text-xl font-semibold text-white">KeyBridge</span>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-zinc-400">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-zinc-500">
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1
                key="step1"
                data={data}
                updateData={updateData}
                onNext={handleNext}
              />
            )}
            {step === 2 && (
              <Step2
                key="step2"
                data={data}
                updateData={updateData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <Step3
                key="step3"
                data={data}
                updateData={updateData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Step1({
  data,
  updateData,
  onNext,
}: {
  data: OnboardingData;
  updateData: (field: keyof OnboardingData, value: any) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Welcome to KeyBridge
      </h2>
      <p className="text-zinc-400 text-lg mb-10">
        Let's personalize your journey to US universities
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => updateData("fullName", e.target.value)}
            className="w-full px-4 py-3.5 bg-black border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
            placeholder="Mohamed Alami"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Current Grade Level
          </label>
          <select
            value={data.gradeLevel}
            onChange={(e) => updateData("gradeLevel", e.target.value)}
            className="w-full px-4 py-3.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-700 transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-900">Select your grade</option>
            <option value="9th" className="bg-zinc-900">9th Grade (3ème Collège)</option>
            <option value="10th" className="bg-zinc-900">10th Grade (Tronc Commun)</option>
            <option value="11th" className="bg-zinc-900">11th Grade (1ère Bac)</option>
            <option value="12th" className="bg-zinc-900">12th Grade (2ème Bac)</option>
            <option value="gap" className="bg-zinc-900">Gap Year</option>
          </select>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!data.fullName || !data.gradeLevel}
        className="w-full mt-10 px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        Continue
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

function Step2({
  data,
  updateData,
  onNext,
  onBack,
}: {
  data: OnboardingData;
  updateData: (field: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [schoolInput, setSchoolInput] = useState("");

  const addSchool = () => {
    if (schoolInput.trim() && data.targetSchools.length < 10) {
      updateData("targetSchools", [...data.targetSchools, schoolInput.trim()]);
      setSchoolInput("");
    }
  };

  const removeSchool = (index: number) => {
    updateData(
      "targetSchools",
      data.targetSchools.filter((_, i) => i !== index)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Your Academic Goals
      </h2>
      <p className="text-zinc-400 text-lg mb-10">
        What are you aiming for in your college journey?
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Target Schools <span className="text-zinc-500">(Optional)</span>
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={schoolInput}
              onChange={(e) => setSchoolInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSchool();
                }
              }}
              className="flex-1 px-4 py-3.5 bg-black border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
              placeholder="MIT, Stanford, UC Berkeley..."
              disabled={data.targetSchools.length >= 10}
            />
            <button
              onClick={addSchool}
              disabled={!schoolInput.trim() || data.targetSchools.length >= 10}
              className="px-6 py-3.5 bg-zinc-800 border border-zinc-700 text-white rounded-xl hover:bg-zinc-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed font-medium"
            >
              Add
            </button>
          </div>
          {data.targetSchools.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.targetSchools.map((school, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-white rounded-lg text-sm flex items-center gap-2"
                >
                  {school}
                  <button
                    onClick={() => removeSchool(index)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Intended Major
          </label>
          <input
            type="text"
            value={data.intendedMajor}
            onChange={(e) => updateData("intendedMajor", e.target.value)}
            className="w-full px-4 py-3.5 bg-black border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
            placeholder="Computer Science, Business, Engineering..."
          />
        </div>
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={onBack}
          className="px-6 py-3.5 bg-zinc-800 border border-zinc-700 text-white rounded-xl hover:bg-zinc-700 transition-all flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!data.intendedMajor}
          className="flex-1 px-6 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-zinc-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
        >
          Continue
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

function Step3({
  data,
  updateData,
  onNext,
  onBack,
}: {
  data: OnboardingData;
  updateData: (field: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Budget & Timeline
      </h2>
      <p className="text-zinc-400 text-lg mb-10">
        Help us understand your situation to provide better guidance
      </p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Annual Budget for College
          </label>
          <select
            value={data.budget}
            onChange={(e) => updateData("budget", e.target.value)}
            className="w-full px-4 py-3.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-700 transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-900">Select your budget range</option>
            <option value="0-10k" className="bg-zinc-900">$0 - $10,000 (Need full financial aid)</option>
            <option value="10k-25k" className="bg-zinc-900">$10,000 - $25,000</option>
            <option value="25k-50k" className="bg-zinc-900">$25,000 - $50,000</option>
            <option value="50k+" className="bg-zinc-900">$50,000+ (Can pay full tuition)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Application Timeline
          </label>
          <select
            value={data.timeline}
            onChange={(e) => updateData("timeline", e.target.value)}
            className="w-full px-4 py-3.5 bg-black border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-700 transition-colors appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-900">When do you plan to apply?</option>
            <option value="fall-2025" className="bg-zinc-900">Fall 2025 (Applying this year)</option>
            <option value="fall-2026" className="bg-zinc-900">Fall 2026 (Next year)</option>
            <option value="fall-2027" className="bg-zinc-900">Fall 2027 (2+ years away)</option>
            <option value="undecided" className="bg-zinc-900">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={onBack}
          className="px-6 py-3.5 bg-zinc-800 border border-zinc-700 text-white rounded-xl hover:bg-zinc-700 transition-all flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!data.budget || !data.timeline}
          className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
        >
          Complete Setup
          <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
