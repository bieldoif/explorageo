"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Professora de Geografia há 5 anos",
    avatar: "AS",
    quote:
      "O GeoProf mudou minha rotina. As aulas prontas me poupam um tempo precioso e meus alunos estão muito mais engajados. Recomendo demais!",
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
      "Estava insegura por ser recém-formada, mas o GeoProf me deu a base que eu precisava. O material é super completo e fácil de adaptar.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A prova de que o GeoProf funciona?{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nossos próprios clientes.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Professores como você já estão transformando suas aulas e retomando
            o prazer de ensinar. Veja o que eles dizem:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={cn(
                "transform border-2 bg-background/80 p-1 shadow-lg transition-all duration-300 hover:scale-105 focus:scale-105 border-primary/20 glow-shadow-blue"
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
