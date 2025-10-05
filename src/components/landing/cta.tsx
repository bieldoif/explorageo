import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-accent/10 to-background bg-[400%_400%] animate-subtle-gradient" />
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Dê o próximo passo na sua{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              carreira
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Junte-se a centenas de professores que estão revolucionando suas
            aulas de Geografia. Tenha acesso a um material de excelência e veja
            a diferença no engajamento e aprendizado dos seus alunos.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="h-16 bg-gradient-to-r from-primary to-accent px-12 py-4 font-headline text-xl font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 animate-pulse-glow"
            >
              QUERO ACESSO IMEDIATO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
