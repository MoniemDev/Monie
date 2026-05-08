import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetail from './features/projects/ProjectDetail';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';
import { logPageView } from './analytics';
import { useEffect } from 'react';
import './i18n/config';

// Move useLocation and logPageView into a separate component
function AnalyticsListener() {
  const location = useLocation();
  useEffect(() => {
    logPageView();
  }, [location]);
  return null;
}

function App() {
  // Set RTL direction for Arabic by default
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <>
      
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Router>
          <AnalyticsListener />
          <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
