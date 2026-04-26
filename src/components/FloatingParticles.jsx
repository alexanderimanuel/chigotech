import React from 'react';
import './FloatingParticles.css';

export default function FloatingParticles() {
  // Create an array of 20 elements for particles
  const particles = Array.from({ length: 20 });

  return (
    <div className="particles-container">
      {particles.map((_, i) => (
        <div 
          key={i} 
          className={`particle shape-${i % 3}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        >
          {i % 3 === 0 ? '✨' : i % 3 === 1 ? '☁️' : '🎈'}
        </div>
      ))}
    </div>
  );
}
