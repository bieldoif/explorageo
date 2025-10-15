import {
  Presentation,
  BrainCircuit,
  ListChecks,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: <Presentation className="h-10 w-10 text-primary" />,
    title: "Aulas Prontas e Editáveis",
    description:
      "Slides completos (PPTX e Google Slides) com design profissional para você adaptar e usar em minutos.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: "Mapas Mentais e Infográficos",
    description:
      "Ferramentas visuais de alto impacto que simplificam temas complexos e aceleram o aprendizado.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-primary" />,
    title: "Exercícios com Gabarito",
    description:
      "Questões de vestibulares e autorais com gabarito comentado para fixar o conteúdo e avaliar o progresso.",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-accent" />,
    title: "Atualizações Constantes",
    description:
      "Acesso a novos materiais e atualizações para suas aulas estarem sempre alinhadas com o mundo de hoje.",
  },
];

export function Benefits() {
  return (
    <section className="bg-secondary/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            O arsenal completo para o professor de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              sucesso
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group transform border-2 border-transparent bg-background/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardHeader className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-full bg-secondary p-4">{benefit.icon}</div>
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
