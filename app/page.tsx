import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import About from './components/About';
import StatsSection from './components/StatsSection';
import PourquoiNous from './components/PourquoiNous';
import Services from './components/Services';
import FormationsSection from './components/FormationsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <ExpertiseSection />
      <About />
      <StatsSection />
      <PourquoiNous />
      <FormationsSection />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
