// @ts-nocheck
"use server";

import { highlightRelevantTestimonials } from "@/ai/flows/highlight-relevant-testimonials";
import type { HighlightRelevantTestimonialsInput } from "@/ai/flows/highlight-relevant-testimonials";

export async function highlightTestimonialsAction(
  input: HighlightRelevantTestimonialsInput
) {
  try {
    const result = await highlightRelevantTestimonials(input);
    return result;
  } catch (error) {
    console.error("AI action failed:", error);
    return {
      highlightedTestimonials:
        "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
    };
  }
}
