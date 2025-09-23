'use server';

import { personalizedServiceRecommendations } from '@/ai/flows/personalized-service-recommendations';

export async function getAiRecommendations(interactionData: string) {
  if (!interactionData.trim()) {
    return { recommendations: "Please select services you're interested in to receive a personalized recommendation." };
  }
  
  try {
    const result = await personalizedServiceRecommendations({ interactionData });
    return result;
  } catch (error) {
    console.error("Error getting AI recommendations:", error);
    return { recommendations: "We're sorry, but an error occurred while generating your recommendation. Please try again later." };
  }
}
