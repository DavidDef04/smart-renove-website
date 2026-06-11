import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import RenovationCompleteSection from './components/RenovationCompleteSection';
import MissionVisionValues from './components/MissionVisionValues';
import About from './components/About';
import StatsSection from './components/StatsSection';
import FormationsSection from './components/FormationsSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ConversionBand from './components/ConversionBand';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <RenovationCompleteSection />
      <MissionVisionValues compact />
      <About />
      <StatsSection />
      <Services />
      <FormationsSection />
      <Testimonials />
      <ConversionBand />
      <Footer />
    </>
  );
}
