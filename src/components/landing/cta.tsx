import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const includedFeatures = [
  "Aulas Prontas e Editáveis (PPTX e Google Slides)",
  "Mapas Mentais e Infográficos",
  "Listas de Exercícios com Gabarito",
  "Atualizações Constantes e Acesso Vitalício",
];

export function Cta() {
  return (
    <section id="cta" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
      <div className="container flex justify-center">
        <Card className="w-full max-w-2xl bg-background/80 shadow-2xl backdrop-blur-sm glow-shadow-blue">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Oferta Especial por Tempo Limitado!
            </CardTitle>
            <CardDescription className="pt-2 text-lg text-muted-foreground">
              Acesso completo e vitalício a todo o material do ExploraGeo.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-xl text-muted-foreground line-through">
                De R$497,00
              </p>
              <p className="font-headline text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                12x de R$19,90
              </p>
              <p className="text-muted-foreground">ou R$197,00 à vista</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-center font-headline text-xl font-semibold">
                O que você recebe:
              </h3>
              <ul className="flex flex-col items-center gap-3 text-muted-foreground sm:items-start">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              size="lg"
              className="h-16 w-full bg-gradient-to-r from-primary to-accent px-12 py-4 font-headline text-xl font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
            >
              GARANTIR MINHA VAGA
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
