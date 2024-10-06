import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface RelatedQuestionsProps {
  questions: string[];
}

export function RelatedQuestions({ questions }: RelatedQuestionsProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-secondary/10">
        <CardTitle>Related Questions</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          {questions.map((question, index) => (
            <li key={index} className="group">
              <Button variant="ghost" className="w-full justify-start text-left hover:bg-secondary/20 transition-all duration-300">
                <ChevronRight className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                {question}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}