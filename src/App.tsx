import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { Button } from './components/ui/button';
import { GamepadIcon, Brain, AlertTriangle, Utensils } from 'lucide-react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Here you would typically trigger the search or API call
  };

  const suggestedQueries = [
    { icon: <GamepadIcon className="w-4 h-4" />, text: "Best gaming consoles of 2024" },
    { icon: <Brain className="w-4 h-4" />, text: "Summarize the research on brain breaks" },
    { icon: <AlertTriangle className="w-4 h-4" />, text: "Penalty for late tax filing" },
    { icon: <Utensils className="w-4 h-4" />, text: "Latest cooking trends on TikTok" },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-start pt-20 px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">
            Unlock insights, <span className="text-primary">spark brilliance</span>
          </h1>
          <SearchBar onSearch={handleSearch} />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-3xl">
            {suggestedQueries.map((query, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto py-3 px-4 rounded-xl border border-border/50 hover:bg-accent/50 transition-colors"
                onClick={() => handleSearch(query.text)}
              >
                <span className="mr-3 bg-accent p-2 rounded-lg">{query.icon}</span>
                {query.text}
              </Button>
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;