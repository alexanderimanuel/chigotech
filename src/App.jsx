import React, { useState } from 'react';
import './App.css';
import FloatingParticles from './components/FloatingParticles';
import Hero from './components/Hero';
import PredictorGame from './components/PredictorGame';

function App() {
  const [showGame, setShowGame] = useState(false);

  const handleStartGame = () => {
    setShowGame(true);
    // Scroll to the game section
    setTimeout(() => {
      document.getElementById('predictor-game')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      <FloatingParticles />
      
      <main className="main-content">
        <Hero onStart={handleStartGame} />
        
        <PredictorGame isVisible={showGame} />
      </main>
    </div>
  );
}

export default App;
