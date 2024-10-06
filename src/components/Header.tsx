import { Lightbulb } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-background border-b border-border">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Lightbulb className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">Insightful</span>
      </div>
      <ModeToggle />
    </header>
  );
}