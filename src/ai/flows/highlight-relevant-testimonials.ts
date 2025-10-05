'use server';

/**
 * @fileOverview This file defines a Genkit flow for highlighting relevant testimonials based on user focus areas on a landing page.
 *
 * - highlightRelevantTestimonials - A function that takes the landing page content and user focus areas, and returns testimonials highlighted for relevance.
 * - HighlightRelevantTestimonialsInput - The input type for the highlightRelevantTestimonials function.
 * - HighlightRelevantTestimonialsOutput - The return type for the highlightRelevantTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HighlightRelevantTestimonialsInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The complete content of the landing page as a string.'),
  userFocusAreas: z
    .string()
    .describe(
      'A description of the areas on the page the user is most focused on.'
    ),
});
export type HighlightRelevantTestimonialsInput = z.infer<
  typeof HighlightRelevantTestimonialsInputSchema
>;

const HighlightRelevantTestimonialsOutputSchema = z.object({
  highlightedTestimonials: z
    .string()
    .describe(
      'A list of testimonials from the landing page, highlighted based on relevance to the user focus areas.'
    ),
});
export type HighlightRelevantTestimonialsOutput = z.infer<
  typeof HighlightRelevantTestimonialsOutputSchema
>;

export async function highlightRelevantTestimonials(
  input: HighlightRelevantTestimonialsInput
): Promise<HighlightRelevantTestimonialsOutput> {
  return highlightRelevantTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'highlightRelevantTestimonialsPrompt',
  input: {schema: HighlightRelevantTestimonialsInputSchema},
  output: {schema: HighlightRelevantTestimonialsOutputSchema},
  prompt: `You are an AI assistant designed to identify and highlight testimonials that are most relevant to a user's areas of focus on a given landing page.

  Landing Page Content: {{{pageContent}}}
  User Focus Areas: {{{userFocusAreas}}}

  Given the landing page content and the user's focus areas, identify the testimonials that are most relevant to the user's interests and concerns. Highlight these testimonials in a way that makes them stand out from the rest. Return the highlighted testimonials as a string.
  Ensure the highlighted testimonials clearly address the user's specific questions and pain points.
`,
});

const highlightRelevantTestimonialsFlow = ai.defineFlow(
  {
    name: 'highlightRelevantTestimonialsFlow',
    inputSchema: HighlightRelevantTestimonialsInputSchema,
    outputSchema: HighlightRelevantTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
