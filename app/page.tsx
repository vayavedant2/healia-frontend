import { BenefitsSection } from "../components/sections/BenefitsSection/BenefitsSection";
import { HeroSection } from "../components/sections/HeroSection/HeroSection";
import { AboutHealiaSection } from "../components/sections/AboutHealiaSection/AboutHealiaSection";
import { IncludedSection } from "../components/sections/IncludedSection/IncludedSection";
import { RootCauseSection } from "../components/sections/RootCauseSection/RootCauseSection";
import { ExpertsSection } from "../components/sections/ExpertsSection/ExpertsSection";
import { MobileAppSection } from "../components/sections/MobileAppSection/MobileAppSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection/TestimonialsSection";
import { CertificationSection } from "../components/sections/CertificationSection/CertificationSection";
import { InsightsSection } from "../components/sections/InsightsSection/InsightsSection";
import { FinalCTASection } from "../components/sections/FinalCTASection/FinalCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <IncludedSection />
      <AboutHealiaSection />
      <RootCauseSection />
      <ExpertsSection />
      <MobileAppSection />
      <TestimonialsSection />
      <CertificationSection />
      <InsightsSection />
      <FinalCTASection />
    </>
  );
}
