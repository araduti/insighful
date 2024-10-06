import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

interface ResultsAreaProps {
  question: string;
  answer: string;
  isLoading: boolean;
}

export function ResultsArea({ question, answer, isLoading }: ResultsAreaProps) {
  if (!question) {
    return null;
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-primary/10">
        <CardTitle className="text-2xl font-bold">{question}</CardTitle>
        <CardDescription>AI-generated answer</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>
        ) : (
          <p className="text-lg leading-relaxed">{answer}</p>
        )}
      </CardContent>
    </Card>
  );
}