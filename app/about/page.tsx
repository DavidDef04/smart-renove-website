import AboutHero from '../components/AboutHero';
import About from '../components/About';
import WorkMethod from '../components/WorkMethod';
import ConversionBand from '../components/ConversionBand';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <AboutHero />
        <About />
        <WorkMethod />
        <ConversionBand />
      </div>
      <Footer />
    </div>
  );
}
