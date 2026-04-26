import React from 'react';
import './ValueProposition.css';
import { Building2, Users, Cpu } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      id: 'institusi',
      title: 'Institusi',
      icon: <Building2 className="value-icon" />,
      desc: 'Mengoptimalkan proses identifikasi potensi peserta didik berbasis data. Mendukung keputusan pendidikan objektif, terukur, dan adaptif!',
      color: '#FF6B6B'
    },
    {
      id: 'masyarakat',
      title: 'Masyarakat',
      icon: <Users className="value-icon" />,
      desc: 'Memberdayakan orang tua & siswa dalam memahami potensi diri untuk menciptakan generasi unggul yang kompetitif.',
      color: '#4ECDC4'
    },
    {
      id: 'dudi',
      title: 'DUDI',
      icon: <Cpu className="value-icon" />,
      desc: 'Personalisasi pembelajaran AI memberi nilai tambah industri pendidikan, tingkatkan efektivitas SDM masa depan.',
      color: '#845EC2'
    }
  ];

  return (
    <section className="vp-section">
      <h2 className="section-title">Kenapa Chigotech?</h2>
      <div className="cards-container">
        {values.map(val => (
          <div className="vp-card glass-panel" key={val.id} style={{ '--card-color': val.color }}>
            <div className="icon-wrapper" style={{ background: val.color }}>
              {val.icon}
            </div>
            <h3 className="card-title" style={{ color: val.color }}>{val.title}</h3>
            <p className="card-desc">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
