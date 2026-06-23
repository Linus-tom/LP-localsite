import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const FOUNDER_IMG =
  "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/aglabs/Equipe_corporativa_em_202604122253.jpeg";

const AGLABS_URL = "https://aglabs.ia.br";

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/ag_labs/", Icon: IconInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/ag-labs", Icon: IconLinkedin, label: "LinkedIn" },
];

/** Word-by-word heading reveal, reduced-motion aware. */
function HeadingReveal({ text }: { text: string }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <>{text}</>;

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.07, delayChildren: 0.15 }}
      aria-hidden="true"
    >
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 250, damping: 30 } },
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function AboutAgLabs() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 px-4 bg-background">
      {/* Fades verticais para fundir com as seções vizinhas */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Glow central */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]"
        style={{
          width: 900,
          height: 900,
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-[1] mx-auto max-w-6xl">
        <div className="relative">
          {/* Header: rótulo + ícones sociais */}
          <Reveal className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2">
              <span className="animate-[spin_4s_linear_infinite] text-lg text-primary">✱</span>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">AG LABS</span>
            </div>
            <div className="flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AG Labs no ${label}`}
                  className="flex items-center justify-center rounded-sm border border-border bg-white/[0.03] text-white/50 transition-all duration-200 hover:border-primary/40 hover:text-white md:h-8 md:w-8 h-6 w-6"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Imagem com clip SVG */}
          <Reveal>
            <figure className="relative group m-0">
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(200,255,230,0.28) 0%, rgba(180,255,220,0.08) 55%, transparent 75%)",
                  filter: "blur(50px)",
                  transform: "scale(1.4)",
                }}
              />
              <svg className="w-full" width="100%" height="100%" viewBox="0 0 100 40" role="img" aria-label="Equipe AG Labs">
                <defs>
                  <clipPath id="ag-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z" />
                  </clipPath>
                </defs>
                <image
                  clipPath="url(#ag-clip)"
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                  href={FOUNDER_IMG}
                />
              </svg>
            </figure>
          </Reveal>

          {/* Stats abaixo da imagem */}
          <Reveal className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold text-primary">3+</span>
                <span className="text-muted-foreground">anos de experiência</span>
                <span className="text-muted-foreground/40">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="font-bold text-primary">100+</span>
                <span className="text-muted-foreground">automações entregues</span>
              </div>
            </div>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <div className="flex lg:text-3xl sm:text-2xl text-xl items-center gap-2 mb-2">
                <span className="font-semibold text-primary">200+</span>
                <span className="text-white uppercase text-sm">ferramentas</span>
              </div>
              <div className="flex items-center gap-2 mb-2 text-xs">
                <span className="font-bold text-primary">30%</span>
                <span className="text-muted-foreground">redução de tempo operacional</span>
                <span className="text-muted-foreground/40 lg:hidden block">|</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Conteúdo principal */}
        <div className="grid md:grid-cols-3 gap-8 mt-2">
          <div className="md:col-span-2">
            <h2 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold font-display text-white mb-8">
              <HeadingReveal text="O ecossistema AG LABS une agentes, produtos e plataformas." />
            </h2>

            <Reveal className="grid md:grid-cols-2 gap-8">
              <Reveal delay={80} className="sm:text-base text-xs">
                <p className="leading-relaxed text-justify text-muted-foreground">
                  A AG LABS vai além dos modelos. Construímos um ecossistema completo
                  de agentes a APIs e plataformas que ajudam empresas a inovar com 
                  inteligência artificial.
                </p>
              </Reveal>
              <Reveal delay={160} className="sm:text-base text-xs">
                <p className="leading-relaxed text-justify text-muted-foreground">
                  Cada projeto que entregamos devolve horas, reduz erros e escala com o
                  seu negócio. Tecnologia trabalhando por você, 24 horas por dia, sete dias
                  por semana.
                </p>
              </Reveal>
            </Reveal>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <Reveal className="mb-2" delay={100}>
                <div className="text-2xl font-bold font-display text-primary">AG LABS</div>
              </Reveal>
              <Reveal delay={160}>
                <div className="text-muted-foreground text-sm mb-8">Automação de Processos & Sites</div>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-white font-medium mb-4 text-sm">
                  Quer conhecer tudo o que a AG Labs faz pelo seu negócio?
                </p>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href={AGLABS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:gap-4 hover:border-primary/50 ml-auto"
                >
                  CONHEÇA A AG LABS <ArrowRight size={16} />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
