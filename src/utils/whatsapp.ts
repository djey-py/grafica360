const WHATSAPP_NUMBER = '244957389120';

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Olá, Gráfica 360! Gostaria de saber mais sobre os serviços.',
  orcamento: 'Olá, Gráfica 360! Gostaria de solicitar um orçamento. Podem ajudar-me?',
  sobre: 'Olá, Gráfica 360! Gostaria de saber mais sobre os vossos serviços.',
  ideia: 'Olá, Gráfica 360! Tenho uma ideia/projeto e gostaria de falar com vocês.',
  serigrafia: 'Olá, Gráfica 360! Tenho interesse em serigrafia e gostaria de solicitar um orçamento.',
  sublimacao: 'Olá, Gráfica 360! Tenho interesse em sublimação e gostaria de solicitar um orçamento.',
  bordado: 'Olá, Gráfica 360! Tenho interesse em bordado e gostaria de solicitar um orçamento.',
  dtf: 'Olá, Gráfica 360! Tenho interesse em impressão DTF e gostaria de solicitar um orçamento.',
  cartaoVisita: 'Olá, Gráfica 360! Gostaria de solicitar um orçamento para cartões de visita.',
  logotipo: 'Olá, Gráfica 360! Tenho interesse na criação de um logotipo. Gostaria de saber mais sobre o serviço.',
  flyer: 'Olá, Gráfica 360! Tenho interesse em flyer publicitário e gostaria de solicitar um orçamento.',
  brindes: 'Olá, Gráfica 360! Tenho interesse em brindes corporativos personalizados. Gostaria de conhecer as opções disponíveis.',
  carimbos: 'Olá, Gráfica 360! Tenho interesse em carimbos personalizados. Gostaria de solicitar um orçamento.',
  banner: 'Olá, Gráfica 360! Preciso de um banner e gostaria de solicitar um orçamento.',
  lona: 'Olá, Gráfica 360! Preciso de lona/publicidade e gostaria de solicitar um orçamento.',
  vinil: 'Olá, Gráfica 360! Tenho interesse em vinil e gostaria de solicitar um orçamento.',
  pistaDanca: 'Olá, Gráfica 360! Tenho interesse em personalização de pista de dança. Gostaria de solicitar um orçamento.',
  painelLuminoso: 'Olá, Gráfica 360! Tenho interesse em painel luminoso e gostaria de solicitar um orçamento.',
  rollUp: 'Olá, Gráfica 360! Preciso de um roll-up e gostaria de solicitar um orçamento.',
  convites: 'Olá, Gráfica 360! Tenho interesse em convites personalizados. Gostaria de solicitar um orçamento.',
  blocoFactura: 'Olá, Gráfica 360! Preciso de blocos de factura personalizados. Gostaria de solicitar um orçamento.',
  bandeira: 'Olá, Gráfica 360! Tenho interesse em bandeiras personalizadas. Gostaria de solicitar um orçamento.',
  uniformes: 'Olá, Gráfica 360! Tenho interesse em uniformes/equipamentos personalizados. Gostaria de solicitar um orçamento.',
  guardaChuva: 'Olá, Gráfica 360! Tenho interesse em personalizar guarda-chuvas. Gostaria de saber os preços e opções disponíveis.',
  camisaPolo: 'Olá, Gráfica 360! Tenho interesse em personalizar camisas polo. Gostaria de saber os preços e opções disponíveis.',
  sacola: 'Olá, Gráfica 360! Tenho interesse em personalizar sacolas. Gostaria de saber os preços e opções disponíveis.',
  bone: 'Olá, Gráfica 360! Tenho interesse em personalizar bonés. Gostaria de saber os preços e opções disponíveis.',
  garrafa: 'Olá, Gráfica 360! Tenho interesse em personalizar garrafas. Gostaria de saber os preços e opções disponíveis.',
  mochila: 'Olá, Gráfica 360! Tenho interesse em personalizar mochilas/sacos. Gostaria de saber os preços e opções disponíveis.',
  caneca: 'Olá, Gráfica 360! Tenho interesse em personalizar canecas. Gostaria de saber os preços e opções disponíveis.',
  outrosBrindes: 'Olá, Gráfica 360! Tenho interesse em brindes personalizados. Gostaria de conhecer as opções disponíveis.',
} as const;

export function getProductWhatsAppLink(productKey: keyof typeof WHATSAPP_MESSAGES): string {
  return getWhatsAppLink(WHATSAPP_MESSAGES[productKey]);
}
