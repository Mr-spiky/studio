'use client';

import { useState, useTransition } from 'react';
import { getAiRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';

export default function AIPoweredInsights({ selectedServices }: { selectedServices: string[] }) {
  const [isPending, startTransition] = useTransition();
  const [recommendation, setRecommendation] = useState<string>('');

  const handleGetRecommendation = () => {
    const hasSelection = selectedServices.length > 0;
    
    startTransition(async () => {
      const interaction = hasSelection 
        ? `User has shown interest in the following services: ${selectedServices.join(', ')}.`
        : '';
      const result = await getAiRecommendations(interaction);
      setRecommendation(result.recommendations);
    });
  };

  return (
    <section id="ai-insights" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto text-center shadow-lg border-2 border-primary/10 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl sm:text-3xl text-primary flex items-center justify-center gap-2">
              <Wand2 className="h-7 w-7" />
              AI-Powered Insights
            </CardTitle>
            <CardDescription className="text-lg">
              Select services you're interested in, and our AI will provide customized suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleGetRecommendation} disabled={isPending} size="lg">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : 'Generate My Recommendation'}
            </Button>
            {recommendation && (
              <div className="mt-6 p-4 bg-background border rounded-lg text-left text-sm transition-all animate-in fade-in-50">
                <h4 className="font-semibold text-primary mb-2">Your Personalized Recommendation:</h4>
                <p className="text-foreground/90 leading-relaxed">{recommendation}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
