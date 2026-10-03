import { motion } from 'framer-motion';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const floatingProducts = [
  { name: 'Camisa Polo', top: '8%', left: '58%', delay: 0, rotate: -5, color: '#66BB0A' },
  { name: 'Boné', top: '15%', left: '80%', delay: 0.5, rotate: 8, color: '#BBED22' },
  { name: 'Caneca', top: '45%', left: '65%', delay: 1, rotate: -3, color: '#66BB0A' },
  { name: 'Cartão de Visita', top: '70%', left: '72%', delay: 1.5, rotate: 5, color: '#BBED22' },
  { name: 'Banner', top: '55%', left: '88%', delay: 0.7, rotate: -7, color: '#66BB0A' },
  { name: 'Sacola', top: '30%', left: '82%', delay: 1.2, rotate: 4, color: '#BBED22' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gprime">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute inset-0 geometric-grid opacity-30" />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-gvivid-10 animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-glime-10 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-glime-30 animate-float-delay" />
      <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-gvivid-25 animate-float-delay-2" />
      <div className="absolute -bottom-1 left-0 right-0 h-24 from-gprime-50-to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] from-gprime-to-gvivid-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gvivid-10 border border-gvivid-20 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-gvivid animate-pulse" />
              <span className="text-gvivid text-sm font-medium">Publicidade & Artes Gráficas</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sora font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl text-gsnow leading-[1.1] mb-6"
            >
              Qualidade que dá <span className="text-glime">vida</span> às suas{' '}
              <span className="relative inline-block">
                <span className="text-glime">artes</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" fill="none">
                  <path d="M2 6C20 2 40 2 50 4C60 6 80 2 98 4" stroke="#66BB0A" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="text-gsnow-70 text-base sm:text-lg leading-relaxed mb-8 max-w-md"
            >
              Transformamos ideias em impressões, personalizações e soluções de publicidade que fazem a sua marca ser{' '}
              <span className="text-gvivid font-medium">vista</span>,{' '}
              <span className="text-gvivid font-medium">lembrada</span> e{' '}
              <span className="text-gvivid font-medium">valorizada</span>.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={getWhatsAppLink(WHATSAPP_MESSAGES.orcamento)} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gvivid text-gprime font-semibold rounded-xl hover:bg-glime transition-all duration-300 hover:scale-105 shadow-xl shadow-gvivid-25"
              >
                <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                Pedir orçamento
              </a>
              <a href="#servicos"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-gsnow-10 text-gsnow font-medium rounded-xl hover:border-gvivid-30 hover:text-gvivid transition-all duration-300"
              >
                Conhecer os nossos serviços
                <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="relative hidden lg:block h-[520px]">
            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: -3 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-8 left-4 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="/images/hero-product-1.jpg" alt="Produtos personalizados Gráfica 360" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 from-gprime-80-via-20-to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-glime uppercase tracking-wider">Personalização</span>
                <p className="text-gsnow font-sora font-semibold text-sm mt-1">Camisa Polo Premium</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 4 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-0 right-0 w-56 h-72 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="/images/hero-product-2.jpg" alt="Impressão e design Gráfica 360" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 from-gprime-80-via-20-to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-glime uppercase tracking-wider">Impressão</span>
                <p className="text-gsnow font-sora font-semibold text-sm mt-1">Brindes & Canecas</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute bottom-0 left-20 w-60 h-48 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="/images/hero-product-3.jpg" alt="Banners e publicidade Gráfica 360" className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 from-gprime-80-via-20-to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-medium text-glime uppercase tracking-wider">Publicidade</span>
                <p className="text-gsnow font-sora font-semibold text-sm mt-1">Banners & Comunicação</p>
              </div>
            </motion.div>

            {floatingProducts.map((product, i) => (
              <motion.div key={product.name} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + product.delay }}
                className="absolute animate-float"
                style={{ top: product.top, left: product.left, animationDelay: `${i * 0.8}s`, animationDuration: `${4 + i * 0.5}s` }}
              >
                <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gsnow shadow-lg backdrop-blur-sm bg-gvivid-20 border border-gvivid-20"
                  style={{ transform: `rotate(${product.rotate}deg)` }}
                >
                  {product.name}
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-4 left-1/2 w-16 h-16 rounded-full border-2 border-gvivid-20" />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 1.4 }}
              className="absolute bottom-12 right-10 w-10 h-10 rounded-full bg-glime-10" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-gsnow-10"
        >
          {[
            { number: '360', label: 'Graus de criatividade' },
            { number: '+500', label: 'Projetos realizados' },
            { number: '+50', label: 'Tipos de produtos' },
            { number: '100%', label: 'Compromisso com qualidade' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-sora font-bold text-2xl sm:text-3xl text-glime">{stat.number}</p>
              <p className="text-gsnow-50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
