import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from '@/components/ui/progressive-carousel';

const base = "/images/";

const cases = [
  {
    sliderName: 'agente-ia',
    tag: 'IA / SaaS',
    title: 'Agente de IA Consultivo',
    result: 'Atendimento com IA',
    link: 'https://rag.aglabs.api.br/',
    img: `${base}agente-ia.png`,
  },
  {
    sliderName: 'barber-pro',
    tag: 'SaaS B2B',
    title: 'Barber Pro',
    result: 'SaaS para barbearias',
    link: 'https://barberias.com.br/',
    img: `${base}barber-pro.png`,
  },
  {
    sliderName: 'templates',
    tag: 'Templates',
    title: 'Pack de Templates',
    result: 'Templates prontos',
    link: 'https://templates.aglabs.ia.br/',
    img: `${base}templates-2.png`,
  },
  {
    sliderName: 'nutri',
    tag: 'Landing Page',
    title: 'LP Gabi Nutri',
    result: 'Landing page de nutrição',
    link: 'https://gabinutri.com.br/',
    img: `${base}lp-nutri.png`,
  },
  {
    sliderName: 'agbooks',
    tag: 'E-commerce',
    title: 'AG Books',
    result: 'Loja de e-books',
    link: 'https://loja.agmusic.cloud/',
    img: `${base}agbooks.png`,
  },
  {
    sliderName: 'ag-plataforma',
    tag: 'Web App',
    title: 'AG LABS — Plataforma IA',
    result: 'Plataforma de automações',
    link: 'https://rag.aglabs.api.br/app',
    img: `${base}ag-labs-2.png`,
  },
  {
    sliderName: 'ag-institucional',
    tag: 'Institucional',
    title: 'AG LABS — Site Institucional',
    result: 'Site institucional',
    link: 'https://aglabs.ia.br/',
    img: `${base}aglabs-insitucional.png`,
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-background relative" id="portfolio">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-3 block">Projetos &amp; Demonstrações</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Projetos e modelos que criamos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Modelos navegáveis que mostram o nível de site que entregamos — exemplos reais do que podemos criar para o seu negócio.
          </p>
        </div>

        <ProgressSlider activeSlider="agente-ia" duration={6000} className="w-full">
          <SliderContent>
            {cases.map((item) => (
              <SliderWrapper key={item.sliderName} value={item.sliderName}>
                <div className="relative rounded-xl overflow-hidden w-full aspect-[16/9] md:aspect-[2/1]">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white">{item.title}</h3>
                      <div className="mt-2 inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary font-bold text-sm">{item.result}</span>
                      </div>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 ml-4 inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      Ver projeto →
                    </a>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          <SliderBtnGroup className="mt-3 bg-card/60 border border-border/50 backdrop-blur-md overflow-hidden grid grid-cols-4 md:grid-cols-7 rounded-lg">
            {cases.map((item) => (
              <SliderBtn
                key={item.sliderName}
                value={item.sliderName}
                className="text-left cursor-pointer p-3 border-r border-b border-border/30 transition-colors hover:bg-white/5 last:border-r-0"
                progressBarClass="bg-primary/25 h-full top-0"
              >
                <span className="block text-[9px] font-bold uppercase tracking-widest text-primary mb-1">
                  {item.tag}
                </span>
                <p className="text-[11px] font-semibold text-foreground/80 line-clamp-2 leading-snug">
                  {item.title}
                </p>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>
      </div>
    </section>
  );
}
