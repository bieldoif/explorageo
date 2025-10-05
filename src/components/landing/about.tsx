import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === "about-image");

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Para quem é o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ExploraGeo?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professores de Geografia do Ensino Médio que buscam otimizar seu
            tempo e aprimorar a qualidade de suas aulas. Seja você um professor
            iniciante ou experiente, o ExploraGeo oferece as ferramentas que você
            precisa para se destacar.
          </p>
        </div>
        <div className="flex justify-center">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={500}
              height={500}
              className="rounded-2xl object-cover shadow-2xl"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
