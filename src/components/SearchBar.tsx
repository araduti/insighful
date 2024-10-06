import { useState, useRef, useEffect } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { AlignJustify, Paperclip, ArrowRight } from 'lucide-react';
import { Switch } from './ui/switch';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isMultiline, setIsMultiline] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const lineHeight = parseInt(getComputedStyle(textareaRef.current).lineHeight);
      const paddingTop = parseInt(getComputedStyle(textareaRef.current).paddingTop);
      const paddingBottom = parseInt(getComputedStyle(textareaRef.current).paddingBottom);
      const minHeight = lineHeight + paddingTop + paddingBottom;

      textareaRef.current.style.height = 'auto';
      const newHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${newHeight}px`;

      setIsMultiline(newHeight > minHeight);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Textarea
            ref={textareaRef}
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full py-4 pl-5 pr-40 text-lg rounded-2xl bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-[60px] resize-none overflow-hidden ${
              isMultiline ? 'pb-16' : 'h-[60px]'
            }`}
            style={{
              paddingTop: isMultiline ? '16px' : '18px',
            }}
            rows={1}
          />
          <div
            className={`absolute right-2 flex items-center space-x-2 transition-all duration-300 ${
              isMultiline ? 'bottom-2' : 'top-1/2 -translate-y-1/2'
            }`}
          >
            <Button 
              type="button" 
              size="icon"
              variant="ghost"
              className="rounded-full w-8 h-8"
            >
              <AlignJustify className="h-4 w-4" />
            </Button>
            <Button 
              type="button" 
              size="icon"
              variant="ghost"
              className="rounded-full w-8 h-8"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">Pro</span>
              <Switch />
            </div>
            <Button 
              type="submit" 
              size="icon"
              className="rounded-full w-10 h-10 bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5 text-primary-foreground" />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}