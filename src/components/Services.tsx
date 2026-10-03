import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineDesktopComputer, HiOutlineSparkles, HiOutlineColorSwatch, HiOutlinePrinter, HiOutlineIdentification, HiOutlineLightningBolt, HiOutlineDocumentText, HiOutlineGift, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineViewGrid, HiOutlineSpeakerphone, HiOutlineStar, HiOutlineGlobe, HiOutlineMail, HiOutlineTicket, HiOutlineFlag } from 'react-icons/hi';

interface Service { title: string; description: string; icon: React.ReactNode; messageKey: keyof typeof WHATSAPP_MESSAGES; }

const leftServices: Service[] = [
  { title: 'Serigrafia', description: 'Personalização resistente e profissional para diferentes tipos de materiais.', icon: <HiOutlineSparkles />, messageKey: 'serigrafia' },
  { title: 'Sublimação', description: 'Impressão de alta qualidade para produtos personalizados.', icon: <HiOutlineColorSwatch />, messageKey: 'sublimacao' },
  { title: 'Bordado', description: 'Acabamento premium para roupas, uniformes e produtos corporativos.', icon: <HiOutlineDesktopComputer />, messageKey: 'bordado' },
  { title: 'Impressão DTF', description: 'Personalização de tecidos com excelente definição e cores vibrantes.', icon: <HiOutlinePrinter />, messageKey: 'dtf' },
  { title: 'Cartão de Visita', description: 'Cartões profissionais para fortalecer a identidade da sua marca.', icon: <HiOutlineIdentification />, messageKey: 'cartaoVisita' },
  { title: 'Criação de Logotipo', description: 'Criamos identidades visuais para marcas que querem ser reconhecidas.', icon: <HiOutlineLightningBolt />, messageKey: 'logotipo' },
  { title: 'Flyer Publicitário', description: 'Materiais promocionais para campanhas, eventos e negócios.', icon: <HiOutlineDocumentText />, messageKey: 'flyer' },
  { title: 'Brindes Corporativos', description: 'Produtos personalizados para empresas, eventos e campanhas.', icon: <HiOutlineGift />, messageKey: 'brindes' },
  { title: 'Carimbos', description: 'Soluções práticas e profissionais para empresas e instituições.', icon: <HiOutlineClipboardList />, messageKey: 'carimbos' },
];

const rightServices: Service[] = [
  { title: 'Banner', description: 'Comunicação visual de grande impacto.', icon: <HiOutlineSpeakerphone />, messageKey: 'banner' },
  { title: 'Lona', description: 'Impressão para publicidade, eventos e comunicação exterior.', icon: <HiOutlinePhotograph />, messageKey: 'lona' },
  { title: 'Vinil', description: 'Soluções de impressão e aplicação para diferentes superfícies.', icon: <HiOutlineViewGrid />, messageKey: 'vinil' },
  { title: 'Pista de Dança', description: 'Personalização visual para eventos e celebrações.', icon: <HiOutlineStar />, messageKey: 'pistaDanca' },
  { title: 'Painel Luminoso', description: 'Comunicação visual para destacar a sua marca.', icon: <HiOutlineGlobe />, messageKey: 'painelLuminoso' },
  { title: 'Roll-Up', description: 'Displays profissionais para eventos, empresas e apresentações.', icon: <HiOutlineDesktopComputer />, messageKey: 'rollUp' },
  { title: 'Convites', description: 'Convites personalizados para eventos especiais.', icon: <HiOutlineTicket />, messageKey: 'convites' },
  { title: 'Bloco de Factura', description: 'Materiais administrativos personalizados para empresas.', icon: <HiOutlineMail />, messageKey: 'blocoFactura' },
  { title: 'Bandeira', description: 'Bandeiras personalizadas para empresas, eventos e campanhas.', icon: <HiOutlineFlag />, messageKey: 'bandeira' },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <a href={getWhatsAppLink(WHATSAPP_MESSAGES[service.messageKey])} target="_blank" rel="noopener noreferrer"
      className={`group relative p-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${isEven ? 'bg-gsnow hover:shadow-gvivid-10' : 'bg-gprime hover:shadow-gvivid-10'}`}
    >
      <div className="flex items-start gap-4">
        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all duration-300 ${isEven ? 'bg-gvivid-10 text-gvivid group-hover:bg-gvivid group-hover:text-gsnow' : 'bg-gvivid-20 text-gvivid group-hover:bg-gvivid group-hover:text-gprime'}`}>
          {service.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-sora font-semibold text-sm mb-1 ${isEven ? 'text-gcoal' : 'text-gsnow'}`}>{service.title}</h3>
          <p className={`text-xs leading-relaxed ${isEven ? 'text-gcoal-60' : 'text-gsnow-60'}`}>{service.description}</p>
        </div>
        <FaWhatsapp className={`shrink-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity ${isEven ? 'text-gvivid' : 'text-glime'}`} />
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 sm:py-32 bg-gsnow overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 from-gcoal-5-to-transparent" />
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-gvivid-03 -translate-y-1/2 translate-x-1/3" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gprime-05 text-gprime text-sm font-medium mb-4">Nossos Serviços</span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gcoal leading-tight mb-4">
            Da ideia à produção, damos <span className="text-gprime">forma</span> à sua comunicação.
          </h2>
          <p className="text-gcoal-60 text-base sm:text-lg">Combinamos técnica, criatividade e experiência para entregar resultados que fazem a diferença.</p>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12" staggerDelay={0.05}>
          <StaggerItem><div className="space-y-3">{leftServices.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}</div></StaggerItem>
          <StaggerItem><div className="space-y-3">{rightServices.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}</div></StaggerItem>
        </StaggerContainer>
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="font-sora font-semibold text-xl text-gprime mb-6">E muito mais<span className="text-glime">...</span></p>
          <a href={getWhatsAppLink(WHATSAPP_MESSAGES.orcamento)} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-gprime text-gsnow font-semibold rounded-xl hover:bg-gvivid hover:text-gprime transition-all duration-300 hover:scale-105 shadow-xl shadow-gvivid-20"
          >
            <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
            Quero fazer um orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
