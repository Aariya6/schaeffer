import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Assessment } from './components/Assessment';
import { Resources } from './components/Resources';
import { Progress } from './components/Progress';
import { Education } from './components/Education';
import { Support } from './components/Support';
import { Crisis } from './components/Crisis';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'assessment':
        return <Assessment />;
      case 'resources':
        return <Resources />;
      case 'progress':
        return <Progress />;
      case 'education':
        return <Education />;
      case 'support':
        return <Support />;
      case 'crisis':
        return <Crisis />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="transition-all duration-500 ease-in-out">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;