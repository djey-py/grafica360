import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiPhone, HiOutlineLocationMarker } from 'react-icons/hi';

const contactMethods = [
  { icon: <FaWhatsapp className="text-2xl" />, label: 'WhatsApp', value: '+244 957 389 120', href: getWhatsAppLink(WHATSAPP_MESSAGES.general), cta: 'Falar no WhatsApp' },
  { icon: <HiPhone className="text-2xl" />, label: 'Telefone', value: '+244 241 818', href: 'tel:+244241818', cta: 'Ligar agora' },
  { icon: <FaEnvelope className="text-2xl" />, label: 'Email', value: '360grafica360@gmail.com', href: 'mailto:360grafica360@gmail.com', cta: 'Enviar email' },
  { icon: <FaInstagram className="text-2xl" />, label: 'Instagram', value: '@Grafica_360', href: 'https://instagram.com/Grafica_360', cta: 'Seguir no Instagram' },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-32 bg-gsnow overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-gvivid-03 -translate-x-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gprime-05 text-gprime text-sm font-medium mb-4">Contacto</span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gcoal leading-tight mb-4">Vamos criar algo <span className="text-gprime">juntos</span>?</h2>
          <p className="text-gcoal-60 text-base sm:text-lg">Estamos prontos para ajudar. Entre em contacto e transforme as suas ideias em realidade.</p>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {contactMethods.map((method) => (
              <StaggerItem key={method.label}>
                <div className="group flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-gsnow border border-gcoal-05 hover:border-gvivid-30 hover:shadow-lg transition-all duration-300">
                  <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gvivid-10 text-gvivid transition-all duration-300 group-hover:scale-110">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gcoal-50 text-xs font-medium uppercase tracking-wider mb-0.5">{method.label}</p>
                    <p className="font-sora font-semibold text-gcoal text-sm sm:text-base truncate">{method.value}</p>
                  </div>
                  <a href={method.href} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2 rounded-lg bg-gprime-05 text-gprime text-xs sm:text-sm font-medium hover:bg-gprime hover:text-gsnow transition-all duration-300"
                  >{method.cta}</a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection direction="right">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden bg-gprime p-6 sm:p-8 flex flex-col justify-between">
              <div className="absolute inset-0 hero-pattern" />
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-gvivid-10 -translate-y-1/3 translate-x-1/3" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gvivid-20 flex items-center justify-center text-gvivid text-2xl mb-6"><HiOutlineLocationMarker /></div>
                <h3 className="font-sora font-bold text-xl sm:text-2xl text-gsnow mb-2">Localização</h3>
                <p className="text-gsnow-70 text-base sm:text-lg leading-relaxed">Cassequel do Buraco<br />Rua 53<br />Luanda, Angola</p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="p-4 rounded-xl bg-gsnow-05 border border-gsnow-10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gvivid animate-pulse" />
                    <p className="text-gsnow-80 text-sm">Atendimento de segunda a sábado</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
