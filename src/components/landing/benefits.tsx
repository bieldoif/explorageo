import {
  Presentation,
  BrainCircuit,
  ListChecks,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: <Presentation className="h-10 w-10 text-neon-blue" />,
    title: "Aulas Prontas e Editáveis",
    description:
      "Slides em formato PPTX e Google Slides, com design moderno e conteúdo aprofundado sobre todos os temas da Geografia.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-neon-purple" />,
    title: "Mapas Mentais e Infográficos",
    description:
      "Recursos visuais que facilitam a compreensão e a memorização dos conteúdos.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-neon-blue" />,
    title: "Listas de Exercícios e Gabaritos",
    description:
      "Questões de vestibulares e autorais, com gabarito comentado, para praticar e avaliar o aprendizado.",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-neon-purple" />,
    title: "Atualizações Constantes",
    description:
      "Acesso a novos materiais e atualizações periódicas para manter suas aulas sempre relevantes.",
  },
];

export function Benefits() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            O que você vai encontrar no{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              GeoLeap?
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group transform border-2 border-transparent bg-background/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-neon-blue/50 hover:shadow-2xl hover:shadow-neon-blue/10"
            >
              <CardHeader className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-slate-100 p-4">{benefit.icon}</div>
                <CardTitle className="font-headline text-xl font-bold">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
