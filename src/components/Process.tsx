import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { HiOutlineChat, HiOutlinePencilAlt, HiOutlineCog, HiOutlineTruck } from 'react-icons/hi';

const steps = [
  { number: '01', title: 'Conte-nos a sua ideia', description: 'O cliente explica o que precisa. Partilhe a sua visão e nós cuidamos de tudo.', icon: <HiOutlineChat />, accent: 'gvivid' as const },
  { number: '02', title: 'Criamos', description: 'A equipa desenvolve ou adapta a arte. Transformamos a ideia em design.', icon: <HiOutlinePencilAlt />, accent: 'glime' as const },
  { number: '03', title: 'Produzimos', description: 'A Gráfica 360 imprime, personaliza e produz com qualidade e precisão.', icon: <HiOutlineCog />, accent: 'gvivid' as const },
  { number: '04', title: 'Entregamos', description: 'O cliente recebe o resultado final. A sua ideia ganhou vida.', icon: <HiOutlineTruck />, accent: 'glime' as const },
];

export default function Process() {
  return (
    <section className="relative py-20 sm:py-32 bg-gprime overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gvivid-10 border border-gvivid-20 text-gvivid text-sm font-medium mb-4">
            <div className="w-2 h-2 rounded-full bg-gvivid" />O nosso processo
          </span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gsnow leading-tight mb-4">
            Da ideia à <span className="text-glime">realidade</span>.
          </h2>
          <p className="text-gsnow-70 text-base sm:text-lg">Um processo simples, eficiente e pensado para entregar resultados que superam expectativas.</p>
        </AnimatedSection>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative group h-full">
                {i < steps.length - 1 && <div className="hidden lg:block absolute top-12 left-full w-8 h-[2px] from-gvivid-to-transparent z-10" />}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-gsnow-05 border border-gsnow-10 hover:border-gvivid-30 transition-all duration-300 hover:bg-gsnow-07 h-full">
                  <div className="mb-6">
                    <span className={`font-sora font-extrabold text-5xl sm:text-6xl opacity-10 ${step.accent === 'gvivid' ? 'text-gvivid' : 'text-glime'}`}>{step.number}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 ${step.accent === 'gvivid' ? 'bg-gvivid-10 text-gvivid' : 'bg-glime-10 text-glime'}`}>
                    {step.icon}
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-gsnow mb-2">{step.title}</h3>
                  <p className="text-gsnow-60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
