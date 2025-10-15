import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Clock, Sparkles, BookCheck } from "lucide-react";

const featuresData = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Recupere seu tempo mais valioso",
    description:
      "Com aulas prontas e editáveis, você economiza horas de planejamento e pode focar no que realmente importa: interagir, ensinar e inspirar seus alunos.",
    image: PlaceHolderImages.find((img) => img.id === "feature-1"),
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Aulas que capturam a atenção",
    description:
      "Use materiais visualmente atraentes e dinâmicos, que despertam a curiosidade e transformam alunos distraídos em participantes ativos.",
    image: PlaceHolderImages.find((img) => img.id === "feature-2"),
  },
  {
    icon: <BookCheck className="h-8 w-8 text-primary" />,
    title: "Ensine com a confiança de um especialista",
    description:
      "Todo o nosso conteúdo é elaborado por especialistas e alinhado à BNCC. Tenha a segurança de estar oferecendo o melhor material, sem precisar duvidar.",
  },
];

export function Features() {
  return (
    <section className="container pt-24 sm:pt-0">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          A{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            transformação
          </span>{" "}
          começa aqui
        </h2>
      </div>

      <div className="space-y-24">
        {featuresData.map((feature, index) => (
          <div
            key={feature.title}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
          >
            <div
              className={`space-y-4 ${index % 2 === 1 ? "lg:order-last" : ""}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="font-headline text-2xl font-bold">
                  {feature.title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground">
                {feature.description}
              </p>
            </div>
            <div className="flex justify-center">
              {feature.image && (
                <Image
                  src={feature.image.imageUrl}
                  alt={feature.image.description}
                  width={450}
                  height={450}
                  className="rounded-2xl object-cover shadow-2xl"
                  data-ai-hint={feature.image.imageHint}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
