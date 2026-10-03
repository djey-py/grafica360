import Header from './components/Header';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Uniforms from './components/Uniforms';
import Process from './components/Process';
import Gallery from './components/Gallery';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-gsnow">
      <Header />
      <main>
        <Hero />
        <ImpactSection />
        <About />
        <Services />
        <Products />
        <Uniforms />
        <Process />
        <Gallery />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
