import { BenefitsSection } from "../components/sections/BenefitsSection/BenefitsSection";
import { HeroSection } from "../components/sections/HeroSection/HeroSection";
import { AboutHealiaSection } from "../components/sections/AboutHealiaSection/AboutHealiaSection";
import { IncludedSection } from "../components/sections/IncludedSection/IncludedSection";
import { RootCauseSection } from "../components/sections/RootCauseSection/RootCauseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <IncludedSection />
      <AboutHealiaSection />
      <RootCauseSection />
    </>
  );
}
