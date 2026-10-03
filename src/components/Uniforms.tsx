import AnimatedSection from './AnimatedSection';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

const items = ['Equipamentos desportivos','Uniformes empresariais','Camisas personalizadas','Polos','T-shirts','Fardamentos','Roupa para eventos','Personalização profissional'];

export default function Uniforms() {
  return (
    <section className="relative py-20 sm:py-32 bg-gsnow overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gvivid-03 -translate-y-1/3 translate-x-1/3" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gprime-05 text-gprime text-sm font-medium mb-4">Uniformes & Equipamentos</span>
            <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gcoal leading-tight mb-4">
              Uniformes, equipamentos desportivos e <span className="text-gprime">personalização</span>
            </h2>
            <p className="font-sora font-semibold text-xl text-gvivid-80 mb-6">Vista a sua equipa. Reforce a sua marca.</p>
            <p className="text-gcoal-60 text-base sm:text-lg leading-relaxed mb-8">Do fardamento corporativo ao equipamento desportivo, personalizamos cada peça para que a sua marca esteja presente em todos os momentos.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gcoal-80">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-gvivid" />{item}
                </div>
              ))}
            </div>
            <a href={getWhatsAppLink(WHATSAPP_MESSAGES.uniformes)} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-gprime text-gsnow font-semibold rounded-xl hover:bg-gvivid hover:text-gprime transition-all duration-300 hover:scale-105 shadow-xl shadow-gvivid-20"
            >
              <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />Personalizar uniformes
            </a>
          </AnimatedSection>
          <AnimatedSection direction="right" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/uniforms.jpg" alt="Uniformes personalizados" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <div className="absolute inset-0 from-gprime-60-to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-gcoal-80 backdrop-blur-sm border border-gvivid-20">
                <p className="font-sora font-semibold text-gsnow text-sm mb-1">Personalização Profissional</p>
                <p className="text-gsnow-60 text-xs">Serigrafia • Sublimação • Bordado • DTF</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-gvivid-20 rounded-2xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-glime-10 rounded-xl -rotate-6" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
