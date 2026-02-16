import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";
import WhyItMatters from "@/components/sections/WhyItMatters";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <Hero />
      <FeatureSection />
      <WhyItMatters />
      <Footer />
    </main>
  );
}
