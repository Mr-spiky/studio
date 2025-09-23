// src/ai/flows/personalized-service-recommendations.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing personalized service recommendations based on user interaction.
 *
 * - personalizedServiceRecommendations - A function that takes user interaction data and returns personalized service recommendations.
 * - PersonalizedServiceRecommendationsInput - The input type for the personalizedServiceRecommendations function.
 * - PersonalizedServiceRecommendationsOutput - The return type for the personalizedServiceRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedServiceRecommendationsInputSchema = z.object({
  interactionData: z
    .string()
    .describe(
      'A string containing the user interaction data with the service offerings.  Include specific services the user has interacted with.'
    ),
});
export type PersonalizedServiceRecommendationsInput = z.infer<
  typeof PersonalizedServiceRecommendationsInputSchema
>;

const PersonalizedServiceRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A string containing personalized service recommendations based on the user interaction data.'
    ),
});
export type PersonalizedServiceRecommendationsOutput = z.infer<
  typeof PersonalizedServiceRecommendationsOutputSchema
>;

export async function personalizedServiceRecommendations(
  input: PersonalizedServiceRecommendationsInput
): Promise<PersonalizedServiceRecommendationsOutput> {
  return personalizedServiceRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedServiceRecommendationsPrompt',
  input: {schema: PersonalizedServiceRecommendationsInputSchema},
  output: {schema: PersonalizedServiceRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized service recommendations based on user interaction data.

  Based on the following user interaction data, provide personalized service recommendations. Be concise and focus on the most relevant services.

  Interaction Data: {{{interactionData}}}

  Recommendations: `,
});

const personalizedServiceRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedServiceRecommendationsFlow',
    inputSchema: PersonalizedServiceRecommendationsInputSchema,
    outputSchema: PersonalizedServiceRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
