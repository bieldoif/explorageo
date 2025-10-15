import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Clock, Sparkles, BookCheck } from "lucide-react";

const featuresData = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Mais tempo para você",
    description:
      "Com aulas prontas, você economiza horas de planejamento e pode se dedicar ao que realmente importa: seus alunos.",
    image: PlaceHolderImages.find((img) => img.id === "feature-1"),
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Aulas mais dinâmicas e engajadoras",
    description:
      "Materiais visualmente atraentes que capturam a atenção e despertam a curiosidade dos estudantes.",
    image: PlaceHolderImages.find((img) => img.id === "feature-2"),
  },
  {
    icon: <BookCheck className="h-8 w-8 text-primary" />,
    title: "Conteúdo aprofundado e confiável",
    description:
      "Todos os materiais são elaborados por especialistas e alinhados com a BNCC.",
    image: PlaceHolderImages.find((img) => img.id === "feature-3"),
  },
];

export function Features() {
  return (
    <section className="container pt-24 sm:pt-32">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Transforme sua forma de ensinar{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Geografia
          </span>
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
