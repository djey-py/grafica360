import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <a href={getWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
        className="relative flex items-center gap-3 bg-gvivid text-gprime p-4 rounded-2xl shadow-xl shadow-gvivid-30 hover:bg-glime transition-all duration-300 hover:scale-105 group"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <AnimatePresence>
          {isHovered && (
            <motion.span initial={{ width: 0, opacity: 0 }} animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.2 }}
              className="font-semibold text-sm whitespace-nowrap overflow-hidden"
            >Fale connosco</motion.span>
          )}
        </AnimatePresence>
      </a>
      <div className="absolute inset-0 rounded-2xl border-2 border-gvivid-30 animate-ping pointer-events-none" />
    </motion.div>
  );
}
