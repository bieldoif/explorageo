"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const galleryImages = PlaceHolderImages.filter((img) =>
  img.id.startsWith("gallery-")
);

export function Gallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="container pb-24 sm:pb-32">
      <div className="mb-16 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Tenha acesso ao nossos Materiais!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Veja uma amostra da qualidade dos nossos materiais.
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {galleryImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
