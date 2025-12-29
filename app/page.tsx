import Hero from "@/components/landing/Hero"; // ← Import Hero component
import Features from "@/components/landing/Features"; // ← Import Features component

export default function Home() {
  return (
    <main>
      <Hero /> {/* ← Display Hero section */}
      <Features /> {/* ← Display Features section */}
    </main>
  );
}
