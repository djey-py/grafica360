import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gprime-95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gvivid flex items-center justify-center font-sora font-bold text-gprime text-sm sm:text-base group-hover:scale-105 transition-transform">
                  360
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-glime rounded-full opacity-80" />
              </div>
              <div className="flex flex-col">
                <span className="font-sora font-bold text-sm sm:text-base leading-tight text-gsnow">
                  GRÁFICA 360
                </span>
                <span className="text-gvivid-80 text-[10px] sm:text-xs leading-tight">
                  Publicidade e Artes
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gvivid-10 hover:text-glime text-gsnow-90"
                >
                  {link.label}
                </a>
              ))}
              <a href={getWhatsAppLink(WHATSAPP_MESSAGES.orcamento)} target="_blank" rel="noopener noreferrer"
                className="ml-3 px-5 py-2.5 bg-gvivid text-gprime font-semibold text-sm rounded-lg hover:bg-glime transition-all duration-200 hover:scale-105 shadow-lg shadow-gvivid-20"
              >
                Pedir orçamento
              </a>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gsnow hover:text-glime transition-colors"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {isScrolled && <div className="absolute bottom-0 left-0 right-0 h-[2px] from-gprime-to-gvivid-30" />}
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-gcoal-60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-gprime shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-6 px-6">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                      className="px-4 py-3 text-gsnow-90 font-medium rounded-lg hover:bg-gvivid-10 hover:text-glime transition-all"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-auto">
                  <a href={getWhatsAppLink(WHATSAPP_MESSAGES.orcamento)} target="_blank" rel="noopener noreferrer"
                    className="block w-full px-5 py-3 bg-gvivid text-gprime font-semibold text-center rounded-lg hover:bg-glime transition-all"
                  >
                    Pedir orçamento
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
