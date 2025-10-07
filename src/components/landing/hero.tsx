import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container relative grid min-h-[calc(100vh-4rem)] items-start gap-12 pt-20 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-start gap-8 text-left">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Dê um{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              salto
            </span>{" "}
            na sua carreira de professor de Geografia.
          </h1>
          <p className="max-w-xl text-balance text-lg text-muted-foreground md:text-xl">
            Chega de perder tempo criando aulas do zero. Tenha acesso a
            materiais completos, atualizados e prontos para usar, e encante seus
            alunos com aulas incríveis.
          </p>
          <a
            href="https://pay.cakto.com.br/oma9ji5_598300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="h-14 rounded-md bg-gradient-to-r from-primary to-accent px-10 py-4 font-headline text-lg font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
            >
              QUERO TRANSFORMAR MINHAS AULAS
            </Button>
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={550}
              height={550}
              className="rounded-2xl object-cover shadow-2xl"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
