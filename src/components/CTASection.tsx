import AnimatedSection from './AnimatedSection';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="relative py-20 sm:py-32 bg-gprime overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gvivid-05 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-glime-05 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-glime-30 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gvivid-25 animate-float-delay" />
      <div className="absolute top-0 right-0 w-1/3 h-full from-gvivid-5-to-transparent" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gsnow leading-tight mb-4">Tem uma ideia?</h2>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-glime leading-tight mb-8">Vamos dar vida a ela.</h2>
          <p className="text-gsnow-70 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Conte-nos o que precisa e a nossa equipa ajuda a transformar a sua ideia em algo que pode ser{' '}
            <span className="text-gvivid font-medium">visto</span>,{' '}
            <span className="text-gvivid font-medium">tocado</span> e{' '}
            <span className="text-gvivid font-medium">lembrado</span>.
          </p>
          <a href={getWhatsAppLink(WHATSAPP_MESSAGES.ideia)} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-gvivid text-gprime font-bold text-lg rounded-2xl hover:bg-glime transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse-glow"
          >
            <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />Falar no WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
