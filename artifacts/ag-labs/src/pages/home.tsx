import { HeroParallax } from "@/components/HeroParallax";
import { Portfolio } from "@/components/Portfolio";
import { AboutAgLabs } from "@/components/AboutAgLabs";
import { Pricing } from "@/components/Pricing";
import { CinematicFooter } from "@/components/CinematicFooter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Search, Globe, ChevronRight } from "lucide-react";

function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Como funciona</h2>
          <p className="text-muted-foreground text-xl">Simples. Rápido. Sem complicação.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Decorative line connecting steps */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-border -z-10"></div>
          
          <div className="text-center relative">
            <div className="w-24 h-24 mx-auto bg-card border border-border rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-xl relative z-10">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Você manda as infos</h3>
            <p className="text-muted-foreground">Nome do negócio, serviços, fotos (ou a gente busca).</p>
          </div>
          
          <div className="text-center relative">
            <div className="w-24 h-24 mx-auto bg-card border border-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] relative z-10">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">A gente cria em tempo recorde</h3>
            <p className="text-muted-foreground">Você aprova o layout antes de ir ao ar.</p>
          </div>
          
          <div className="text-center relative">
            <div className="w-24 h-24 mx-auto bg-card border border-border rounded-full flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-xl relative z-10">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Site no ar</h3>
            <p className="text-muted-foreground">Otimizado para aparecer no Google e atrair clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-display text-white mb-12">Por que isso importa</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-7xl md:text-9xl font-black font-display text-primary mb-6 tracking-tighter">
            97%
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            das pessoas pesquisam no Google antes de comprar localmente.
          </h3>
          <p className="text-xl text-muted-foreground">
            Sem site, você é invisível pra esses clientes. <br className="hidden md:block"/>
            Com site, você aparece 24h por dia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="bg-background p-6 rounded-2xl border border-border flex items-start text-left">
            <Search className="w-8 h-8 text-primary mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-lg mb-2">Busca Local</h4>
              <p className="text-muted-foreground text-sm">Quando alguém pesquisa "advogado perto de mim", seu concorrente com site leva o cliente.</p>
            </div>
          </div>
          <div className="bg-background p-6 rounded-2xl border border-border flex items-start text-left">
            <Globe className="w-8 h-8 text-primary mr-4 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white text-lg mb-2">Credibilidade</h4>
              <p className="text-muted-foreground text-sm">Um site profissional passa segurança. O cliente sabe que a empresa existe de verdade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-12 text-center">Perguntas frequentes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-border">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary hover:no-underline data-[state=open]:text-primary py-6">
              Já tenho Instagram. Preciso de site?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Instagram some do feed em horas. Site fica no Google pra sempre. O Instagram é ótimo para relacionamento, mas quando alguém precisa resolver um problema (comprar, contratar, agendar), ela procura no Google.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-border">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary hover:no-underline data-[state=open]:text-primary py-6">
              Achei caro. Vale a pena?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Dá cerca de R$16 por dia. Menos que um café para ter presença profissional online. Pense no site como seu melhor funcionário: trabalha 24h, nunca tira folga e atende o cliente na hora que ele precisa.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-border">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary hover:no-underline data-[state=open]:text-primary py-6">
              Não entendo nada de tecnologia. Como faz?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Você não precisa entender nada. A gente cuida de absolutamente tudo do zero: registro do domínio, hospedagem, design, textos, botão de WhatsApp e colocar no Google.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black font-display text-primary-foreground mb-8 tracking-tight">
          Peça agora e receba seu protótipo em até 48h — sem compromisso.
        </h2>
        
        <a 
          href="https://wa.me/5564993259857"
          className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary bg-primary-foreground rounded-lg hover:scale-105 transition-transform shadow-2xl"
        >
          Quero ver meu site <ChevronRight className="ml-2 w-6 h-6" />
        </a>
        
        <p className="mt-6 text-primary-foreground/80 font-medium">
          Vagas limitadas para este mês. Fale direto com a equipe.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-background">
      <div className="relative z-10 bg-background">
        <HeroParallax />
        <Portfolio />
        <HowItWorks />
        <SocialProof />
        <AboutAgLabs />
        <Pricing />
        <FAQ />
        <CTAFinal />
      </div>
      <CinematicFooter />
    </div>
  );
}
