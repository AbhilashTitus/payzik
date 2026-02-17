import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";
import WhyItMatters from "@/components/sections/WhyItMatters";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import TrustedBy from "@/components/sections/TrustedBy";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <WhyItMatters />
      <CoreCapabilities />
      <HowItWorks />
      <Benefits />
      <TrustedBy />
      <GetStarted />
      <Footer />
    </main>
  );
}
