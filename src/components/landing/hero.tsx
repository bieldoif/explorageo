import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/50 to-secondary/80 bg-[400%_400%] animate-subtle-gradient" />
      <div className="container relative grid min-h-[calc(100vh-4rem)] place-items-center">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Dê um{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              salto
            </span>{" "}
            na sua carreira de professor de Geografia.
          </h1>
          <p className="max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
            Chega de perder tempo criando aulas do zero. Tenha acesso a
            materiais completos, atualizados e prontos para usar, e encante seus
            alunos com aulas incríveis.
          </p>
          <a href="#cta">
            <Button
              size="lg"
              className="h-14 bg-gradient-to-r from-primary to-accent px-10 py-4 font-headline text-lg font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-pulse-glow"
            >
              QUERO TRANSFORMAR MINHAS AULAS
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
