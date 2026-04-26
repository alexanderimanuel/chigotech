import React from 'react';
import { Rocket } from 'lucide-react';
import './Hero.css';

export default function Hero({ onStart }) {
  return (
    <section className="hero-section glass-panel">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-word color-1">Chi</span>
          <span className="title-word color-2">go</span>
          <span className="title-word color-3">tech</span>
        </h1>
        <h2 className="hero-subtitle">Prediktor Minat Sang Buah Hati</h2>
        <p className="hero-description">
          Ayo temukan kehebatan tersembunyimu dengan petualangan magis! 
        </p>
        
        <button className="glass-button start-btn" onClick={onStart}>
          <Rocket className="btn-icon" />
          Mulai Petualangan!
        </button>
      </div>
      
      <div className="hero-decorations">
        {/* We can place floating SVG assets or characters here */}
        <div className="planet-1">🪐</div>
        <div className="star-1">⭐</div>
        <div className="star-2">✨</div>
        <div className="rocket-img">🚀</div>
      </div>
    </section>
  );
}
