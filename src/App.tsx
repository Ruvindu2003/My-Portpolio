import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import OnboardingFlow from './components/OnboardingFlow';
import PageLoader from './components/PageLoader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading page...');

  useEffect(() => {
    // Show loading when route changes
    setIsLoading(true);
    
    // Set loading message based on route
    const routeMessages: { [key: string]: string } = {
      '/': 'Loading home...',
      '/about': 'Loading about...',
      '/projects': 'Loading projects...',
      '/skills': 'Loading skills...',
      '/experience': 'Loading experience...',
      '/education': 'Loading education...',
      '/contact': 'Loading contact...',
    };
    
    setLoadingMessage(routeMessages[location.pathname] || 'Loading page...');

    // Simulate loading time (you can adjust this)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <PageLoader message={loadingMessage} />}
      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageTransition>
    </>
  );
}

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="font-mono bg-terminal-bg-main min-h-screen scroll-smooth">
      <OnboardingFlow onComplete={() => setShowMainContent(true)} />
      {showMainContent && <AppContent />}
    </div>
  );
}

export default App;