import AnimatedSection from './AnimatedSection';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

export default function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-32 bg-gprime overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-10 left-10 w-40 h-40 border border-gvivid-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-56 h-56 border border-glime-10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img src="/images/about-1.jpg" alt="Impressão profissional" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square bg-gvivid-20 flex items-center justify-center p-6">
                  <div className="text-center">
                    <span className="font-sora font-bold text-4xl text-glime">360</span>
                    <p className="text-gsnow-60 text-sm mt-1">Graus de soluções</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img src="/images/about-2.jpg" alt="Personalização de produtos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img src="/images/about-3.jpg" alt="Design e criação" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gvivid-10 border border-gvivid-20 mb-6">
              <div className="w-2 h-2 rounded-full bg-gvivid" />
              <span className="text-gvivid text-sm font-medium">Sobre nós</span>
            </div>
            <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gsnow leading-tight mb-6">
              Muito mais do que uma <span className="text-glime">gráfica</span>.
            </h2>
            <p className="text-gsnow-70 text-base sm:text-lg leading-relaxed mb-4">
              A Gráfica 360 - Publicidade e Artes trabalha para transformar ideias em materiais que representam marcas, empresas, eventos e pessoas.
            </p>
            <p className="text-gsnow-70 text-base sm:text-lg leading-relaxed mb-8">
              Da criação à impressão, da personalização à comunicação visual, desenvolvemos soluções pensadas para <span className="text-gvivid font-medium">destacar cada projeto</span>.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Impressão', 'Personalização', 'Design', 'Brindes', 'Uniformes', 'Publicidade'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-lg bg-gsnow-05 border border-gsnow-10 text-gsnow-80 text-sm">{tag}</span>
              ))}
            </div>
            <a href={getWhatsAppLink(WHATSAPP_MESSAGES.sobre)} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gvivid text-gprime font-semibold rounded-xl hover:bg-glime transition-all duration-300 hover:scale-105 shadow-xl shadow-gvivid-25"
            >
              <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
              Falar com a Gráfica 360
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
