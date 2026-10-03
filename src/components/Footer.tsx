import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

const navLinks = [
  { label: 'Início', href: '#inicio' }, { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' }, { label: 'Sobre nós', href: '#sobre' }, { label: 'Contacto', href: '#contacto' },
];
const serviceLinks = [
  { label: 'Serigrafia', href: getWhatsAppLink(WHATSAPP_MESSAGES.serigrafia) },
  { label: 'Sublimação', href: getWhatsAppLink(WHATSAPP_MESSAGES.sublimacao) },
  { label: 'Bordado', href: getWhatsAppLink(WHATSAPP_MESSAGES.bordado) },
  { label: 'DTF', href: getWhatsAppLink(WHATSAPP_MESSAGES.dtf) },
  { label: 'Impressão', href: getWhatsAppLink(WHATSAPP_MESSAGES.orcamento) },
  { label: 'Design', href: getWhatsAppLink(WHATSAPP_MESSAGES.logotipo) },
  { label: 'Brindes', href: getWhatsAppLink(WHATSAPP_MESSAGES.brindes) },
];

export default function Footer() {
  return (
    <footer className="relative bg-gcoal overflow-hidden">
      <div className="h-1 from-gprime-via-gvivid-to-glime" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gvivid flex items-center justify-center font-sora font-bold text-gprime">360</div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-glime rounded-full opacity-80" />
              </div>
              <div>
                <span className="font-sora font-bold text-gsnow text-base block leading-tight">GRÁFICA 360</span>
                <span className="text-gvivid-80 text-xs">Publicidade e Artes</span>
              </div>
            </div>
            <p className="text-gsnow-50 text-sm leading-relaxed mb-4 max-w-xs">Qualidade que dá vida às suas artes.</p>
            <p className="text-gsnow-40 text-xs leading-relaxed max-w-xs">Transformamos ideias em impressões, personalizações e soluções de publicidade que fazem a sua marca ser vista, lembrada e valorizada.</p>
          </div>
          <div>
            <h4 className="font-sora font-semibold text-gsnow text-sm mb-4">Navegação</h4>
            <ul className="space-y-2.5">{navLinks.map((link) => (<li key={link.label}><a href={link.href} className="text-gsnow-50 text-sm hover:text-gvivid transition-colors">{link.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-sora font-semibold text-gsnow text-sm mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (<li key={link.label}><a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gsnow-50 text-sm hover:text-gvivid transition-colors">{link.label}</a></li>))}
              <li><span className="text-glime text-sm font-medium">E muito mais...</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sora font-semibold text-gsnow text-sm mb-4">Contactos</h4>
            <ul className="space-y-3">
              <li><a href={getWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gsnow-50 text-sm hover:text-gvivid transition-colors"><FaWhatsapp className="text-gvivid shrink-0" />+244 957 389 120</a></li>
              <li><a href="tel:+244241818" className="flex items-center gap-2 text-gsnow-50 text-sm hover:text-gvivid transition-colors"><HiPhone className="text-gvivid shrink-0" />+244 241 818</a></li>
              <li><a href="mailto:360grafica360@gmail.com" className="flex items-center gap-2 text-gsnow-50 text-sm hover:text-gvivid transition-colors"><FaEnvelope className="text-gvivid shrink-0" />360grafica360@gmail.com</a></li>
              <li><a href="https://instagram.com/Grafica_360" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gsnow-50 text-sm hover:text-gvivid transition-colors"><FaInstagram className="text-gvivid shrink-0" />@Grafica_360</a></li>
            </ul>
            <h4 className="font-sora font-semibold text-gsnow text-sm mt-6 mb-3">Localização</h4>
            <p className="text-gsnow-50 text-sm leading-relaxed">Cassequel do Buraco<br />Rua 53<br />Luanda, Angola</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gsnow-05">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gsnow-30 text-xs text-center sm:text-left">© 2026 Gráfica 360 - Publicidade e Artes. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href={getWhatsAppLink(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gsnow-05 flex items-center justify-center text-gsnow-40 hover:bg-gvivid-20 hover:text-gvivid transition-all" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://instagram.com/Grafica_360" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gsnow-05 flex items-center justify-center text-gsnow-40 hover:bg-gvivid-20 hover:text-gvivid transition-all" aria-label="Instagram"><FaInstagram /></a>
              <a href="mailto:360grafica360@gmail.com" className="w-8 h-8 rounded-lg bg-gsnow-05 flex items-center justify-center text-gsnow-40 hover:bg-gvivid-20 hover:text-gvivid transition-all" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
