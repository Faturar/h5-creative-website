import AboutSection from './components/AboutSection';
import AnalyticsSection from './components/AnalyticsSection';
import CoreValuesSection from './components/CoreValuesSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LogoStrip from './components/LogoStrip';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ServicesGrid from './components/ServicesGrid';
import StatsCounterSection from './components/StatsCounterSection';
import TeamSection from './components/TeamSection';
import TestimonialSection from './components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LogoStrip />
      <AboutSection />
      <StatsCounterSection />
      <ServicesGrid />
      <PricingSection />
      <PortfolioSection />
      <TestimonialSection />
      <AnalyticsSection />
      <TeamSection />
      <CoreValuesSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
