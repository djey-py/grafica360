import AnimatedSection from './AnimatedSection';

const keywords = ['PUBLICIDADE', 'PERSONALIZAÇÃO', 'IMPRESSÃO', 'DESIGN'];

export default function ImpactSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gsnow overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gvivid-03 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-glime-03 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-gcoal leading-tight mb-6">
            A sua marca merece mais do que uma <span className="text-gprime">impressão</span>.
          </h2>
          <p className="text-gcoal-60 text-lg sm:text-xl leading-relaxed">
            Criamos materiais que <span className="font-medium text-gprime">comunicam</span>,{' '}
            <span className="font-medium text-gprime">valorizam</span> e dão{' '}
            <span className="font-medium text-gprime">presença</span> à sua marca.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {keywords.map((word, i) => (
            <div key={word}
              className={`relative group overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 cursor-default ${
                i % 2 === 0 ? 'bg-gprime' : 'bg-gvivid'
              }`}
            >
              <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${i % 2 === 0 ? 'bg-gvivid-10' : 'bg-gprime-05'}`} />
              <div className={`absolute -bottom-6 -left-6 w-16 h-16 rounded-full ${i % 2 === 0 ? 'bg-glime-10' : 'bg-gsnow-05'}`} />
              <span className={`relative font-sora font-extrabold text-lg sm:text-xl md:text-2xl tracking-wider ${i % 2 === 0 ? 'text-gsnow' : 'text-gprime'}`}>
                {word}
              </span>
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${i % 2 === 0 ? 'bg-glime' : 'bg-gprime'}`} />
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
