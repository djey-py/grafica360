import { useState } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import SmartImage from './SmartImage';

const categories = ['Todos', 'T-shirts', 'Polos', 'Uniformes', 'Brindes', 'Publicidade', 'Impressão', 'Identidade visual', 'Eventos'];
interface GalleryItem { title: string; category: string; description: string; image: string; aspect: string; }
const galleryItems: GalleryItem[] = [
  { title: 'T-shirts Corporativas', category: 'T-shirts', description: 'Personalização para equipas empresariais', image: '/images/gallery-1.jpg', aspect: 'aspect-[3/4]' },
  { title: 'Polos Desportivos', category: 'Polos', description: 'Equipamentos personalizados para clubes', image: '/images/gallery-2.jpg', aspect: 'aspect-square' },
  { title: 'Banner Evento', category: 'Publicidade', description: 'Comunicação visual para grande evento', image: '/images/gallery-3.jpg', aspect: 'aspect-[4/3]' },
  { title: 'Canecas Promocionais', category: 'Brindes', description: 'Brindes para campanha de marketing', image: '/images/gallery-4.jpg', aspect: 'aspect-square' },
  { title: 'Cartões de Visita Premium', category: 'Impressão', description: 'Identidade profissional em cada detalhe', image: '/images/gallery-5.jpg', aspect: 'aspect-[3/4]' },
  { title: 'Logotipo & Branding', category: 'Identidade visual', description: 'Criação de identidade visual completa', image: '/images/gallery-6.jpg', aspect: 'aspect-[4/3]' },
  { title: 'Uniformes Fardamento', category: 'Uniformes', description: 'Fardamento profissional personalizado', image: '/images/gallery-7.jpg', aspect: 'aspect-square' },
  { title: 'Stand Evento', category: 'Eventos', description: 'Montagem completa para evento corporativo', image: '/images/gallery-8.jpg', aspect: 'aspect-[3/4]' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const filteredItems = activeCategory === 'Todos' ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="relative py-20 sm:py-32 bg-gsnow overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 from-gcoal-5-to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gprime-05 text-gprime text-sm font-medium mb-4">Portfólio</span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gcoal leading-tight mb-4">Feito para ser <span className="text-gprime">visto</span>.</h2>
          <p className="text-gcoal-60 text-base sm:text-lg">Uma seleção de trabalhos que mostram a qualidade e diversidade dos nossos serviços.</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-gprime text-gsnow shadow-lg' : 'bg-gprime-05 text-gcoal-70 hover:bg-gprime-05'}`}
            >{cat}</button>
          ))}
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5" staggerDelay={0.06}>
          {filteredItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                <div className={item.aspect}>
                  <SmartImage src={item.image} alt={`${item.title} - Gráfica 360`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" fallbackLabel={item.category} fallbackColor="#1D241D" />
                </div>
                <div className="absolute inset-0 from-gprime-60-to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-gvivid-20 text-glime mb-1.5">{item.category}</span>
                  <h3 className="font-sora font-semibold text-gsnow text-sm sm:text-base">{item.title}</h3>
                  <p className="text-gsnow-70 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{item.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        {filteredItems.length === 0 && <div className="text-center py-16"><p className="text-gcoal-40 text-lg">Em breve mais trabalhos nesta categoria.</p></div>}
      </div>
    </section>
  );
}
