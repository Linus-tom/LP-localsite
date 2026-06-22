import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!footerRef.current || !textRef.current) return;
    
    // Parallax effect for the massive background text
    gsap.fromTo(textRef.current, 
      { y: -100, opacity: 0 },
      { 
        y: 0, 
        opacity: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      <h2 
        ref={textRef}
        className="absolute top-0 left-0 w-full text-[15vw] leading-none font-display font-black text-center text-primary pointer-events-none select-none opacity-10"
      >
        AG LABS
      </h2>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-end h-full">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-2xl font-bold font-display text-white mb-6">AG Labs</div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" onClick={scrollToTop} className="hover:text-primary transition-colors">Início</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Projetos</a>
            <a href="https://aglabs.ia.br/" className="hover:text-primary transition-colors">Sobre Nós</a>
            <a href="https://wa.me/5564993259857" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary transition-all mb-6 mx-auto md:ml-auto md:mr-0"
            aria-label="Voltar ao topo"
          >
            ↑
          </button>
          <p className="text-sm text-muted-foreground">© 2025 AG Labs. Todos os direitos reservados.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-primary/10 border-t border-primary/20 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex space-x-4">
          <span className="text-primary font-mono text-xs uppercase tracking-widest">
            Sites Profissionais ✦ Domínio Incluso ✦ Aparece no Google ✦ Entrega em 48h ✦ Suporte Incluso ✦ Sites Profissionais ✦ Domínio Incluso ✦ Aparece no Google ✦ Entrega em 48h ✦ Suporte Incluso ✦
          </span>
        </div>
      </div>
    </footer>
  );
}
