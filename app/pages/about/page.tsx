import AboutHero from '../../components/AboutHero';
import About from '../../components/About';
import CallToAction from '../../components/CallToAction';
import Services from '../../components/Services';
import WorkMethod from '../../components/WorkMethod';
import PartnersSlider from '../../components/PartnersSlider';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AboutHero />
        <About />
        <CallToAction />
        <Services />
        <WorkMethod />
        <PartnersSlider />
      </main>
      <Footer />
    </div>
  );
}
