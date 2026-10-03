import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import SmartImage from './SmartImage';

interface Product { name: string; description: string; image: string; messageKey: keyof typeof WHATSAPP_MESSAGES; }

const products: Product[] = [
  { name: 'Guarda-chuva', description: 'Proteção com a sua marca sempre visível.', image: '/images/product-umbrella.jpg', messageKey: 'guardaChuva' },
  { name: 'Camisa Polo', description: 'Elegância e profissionalismo personalizados.', image: '/images/product-polo.jpg', messageKey: 'camisaPolo' },
  { name: 'Sacola', description: 'A sua marca acompanhando o dia a dia.', image: '/images/product-bag.jpg', messageKey: 'sacola' },
  { name: 'Boné', description: 'Estilo e visibilidade para a sua marca.', image: '/images/product-cap.jpg', messageKey: 'bone' },
  { name: 'Garrafa', description: 'Hidratação com identidade personalizada.', image: '/images/product-bottle.jpg', messageKey: 'garrafa' },
  { name: 'Mochila / Saco', description: 'Funcionalidade com a assinatura da sua marca.', image: '/images/product-backpack.jpg', messageKey: 'mochila' },
  { name: 'Caneca', description: 'Presença da marca no quotidiano.', image: '/images/product-mug.jpg', messageKey: 'caneca' },
  { name: 'Outros Brindes', description: 'Variedade de opções para todas as necessidades.', image: '/images/product-other.jpg', messageKey: 'outrosBrindes' },
];

export default function Products() {
  return (
    <section id="produtos" className="relative py-20 sm:py-32 bg-gprime overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-0 left-0 w-48 h-48 border border-gvivid-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gvivid-10 border border-gvivid-20 text-gvivid text-sm font-medium mb-4">
            <div className="w-2 h-2 rounded-full bg-gvivid" />Produtos Personalizados
          </span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gsnow leading-tight mb-4">
            A sua marca também vive nos <span className="text-glime">detalhes</span>.
          </h2>
          <p className="text-gsnow-70 text-base sm:text-lg">Personalizamos produtos para transformar a sua marca em presença.</p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.08}>
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <div className="group relative rounded-2xl overflow-hidden bg-gsnow-05 border border-gsnow-10 hover:border-gvivid-30 transition-all duration-300 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <SmartImage src={product.image} alt={`${product.name} personalizado`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" fallbackLabel={product.name} fallbackColor="#2C6A03" />
                  <div className="absolute inset-0 from-gprime-80-via-20-to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-sora font-semibold text-gsnow text-sm sm:text-base">{product.name}</h3>
                    <p className="text-gsnow-60 text-xs mt-0.5 line-clamp-2">{product.description}</p>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <a href={getWhatsAppLink(WHATSAPP_MESSAGES[product.messageKey])} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gvivid-10 text-gvivid text-xs sm:text-sm font-medium hover:bg-gvivid hover:text-gprime transition-all duration-300"
                  >
                    <FaWhatsapp className="text-xs" />Personalizar
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
