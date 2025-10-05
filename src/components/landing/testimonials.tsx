// @ts-nocheck
"use client";

import { useState } from "react";
import { highlightTestimonialsAction } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Professora de Geografia há 5 anos",
    avatar: "AS",
    quote:
      "O GeoLeap mudou minha rotina. As aulas prontas me poupam um tempo precioso e meus alunos estão muito mais engajados. Recomendo demais!",
  },
  {
    id: 2,
    name: "Carlos Pereira",
    role: "Professor em cursinho pré-vestibular",
    avatar: "CP",
    quote:
      "Finalmente encontrei um material de qualidade e que realmente dialoga com a realidade dos jovens. Os mapas mentais são fantásticos!",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Professora iniciante",
    avatar: "JC",
    quote:
      "Estava insegura por ser recém-formada, mas o GeoLeap me deu a base que eu precisava. O material é super completo e fácil de adaptar.",
  },
];

const focusAreas = [
  {
    key: "saving_time",
    label: "Economia de Tempo",
    prompt: "Estou buscando maneiras de economizar tempo no preparo das aulas.",
  },
  {
    key: "student_engagement",
    label: "Engajamento dos Alunos",
    prompt:
      "Quero saber como posso deixar minhas aulas mais interessantes e engajadoras para os alunos.",
  },
  {
    key: "content_quality",
    label: "Qualidade do Conteúdo",
    prompt:
      "Preciso de materiais de alta qualidade, confiáveis e que me deem segurança para ensinar.",
  },
];

export function Testimonials() {
  const [highlightedIds, setHighlightedIds] = useState<number[]>([]);
  const [loadingFocus, setLoadingFocus] = useState<string | null>(null);
  const { toast } = useToast();

  const handleHighlight = async (focusArea: (typeof focusAreas)[0]) => {
    setLoadingFocus(focusArea.key);
    setHighlightedIds([]);

    const testimonialsText = testimonialsData
      .map((t) => `"${t.quote}" - ${t.name}`)
      .join("\n\n");

    const result = await highlightTestimonialsAction({
      pageContent: testimonialsText,
      userFocusAreas: focusArea.prompt,
    });

    if (result.highlightedTestimonials.includes("Ocorreu um erro")) {
      toast({
        title: "Erro de IA",
        description: result.highlightedTestimonials,
        variant: "destructive",
      });
    } else {
      const newHighlightedIds = testimonialsData
        .filter((t) => result.highlightedTestimonials.includes(t.quote))
        .map((t) => t.id);

      if (newHighlightedIds.length > 0) {
        setHighlightedIds(newHighlightedIds);
        toast({
          title: "Depoimento em destaque!",
          description: `Encontramos o depoimento mais relevante para '${focusArea.label}'.`,
        });
      } else {
         toast({
          title: "Nenhum depoimento específico encontrado",
          description: `Não conseguimos destacar um depoimento específico para '${focusArea.label}', mas todos eles mostram o valor do GeoLeap!`,
        });
      }
    }

    setLoadingFocus(null);
  };

  return (
    <section className="bg-secondary/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            O que os{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              professores dizem
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Use nossa IA para destacar os depoimentos mais relevantes para você.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {focusAreas.map((area) => (
            <Button
              key={area.key}
              variant="outline"
              onClick={() => handleHighlight(area)}
              disabled={!!loadingFocus}
            >
              {loadingFocus === area.key ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {area.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={cn(
                "transform border-2 bg-background/80 p-1 shadow-lg transition-all duration-500",
                highlightedIds.includes(testimonial.id)
                  ? "border-accent/80 glow-shadow-purple"
                  : "border-transparent"
              )}
            >
              <CardContent className="p-6">
                <blockquote className="text-lg text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback className="bg-primary/20 font-bold text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-headline font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
