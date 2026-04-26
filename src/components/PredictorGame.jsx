import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './PredictorGame.css';

const questions = [
  {
    text: "Apa yang paling senang kamu lakukan saat waktu luang?",
    options: [
      { text: "Menyusun puzzle rumit & balok 🧩", score: "spasial" },
      { text: "Bercerita dan membaca buku 📚", score: "linguistik" },
      { text: "Bermain dengan banyak teman 🤝", score: "interpersonal" },
      { text: "Bermain di kebun/taman 🌳", score: "naturalis" }
    ]
  },
  {
    text: "Kalau sedang bermain di luar, apa yang paling kamu perhatikan?",
    options: [
      { text: "Cara kerja sebuah mainan ⚙️", score: "logika" },
      { text: "Lagu anak-anak yang diputar 🎵", score: "musikal" },
      { text: "Bermain lari-larian/olahraga 🏃", score: "kinestetik" },
      { text: "Melihat serangga kecil 🐜", score: "naturalis" }
    ]
  },
  {
    text: "Saat diminta menggambar, kamu biasanya menggambar...",
    options: [
      { text: "Gedung tinggi & peta jalan 🏙️", score: "spasial" },
      { text: "Angka & bentuk berhitung 🔢", score: "logika" },
      { text: "Orang dengan ekspresi wajah 🙂", score: "interpersonal" },
      { text: "Hewan peliharaan atau hutan 🦁", score: "naturalis" }
    ]
  },
  {
    text: "Jika kamu sedang sedih atau bosan, apa yang membuatmu gembira lagi?",
    options: [
      { text: "Menulis atau membuat karangan ✍️", score: "linguistik" },
      { text: "Mendengarkan atau bernyanyi lagu 🎤", score: "musikal" },
      { text: "Menari atau bergerak aktif 💃", score: "kinestetik" },
      { text: "Menghabiskan waktu membuat rencana sendiri 💭", score: "intrapersonal" }
    ]
  }
];

const intelligenceData = {
  spasial: {
    kid: "Wah! Kamu si Arsitek Cilik yang jago mengingat jalan & warna!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Visual-Spasial. Kapasitas ini mencerminkan kemampuan dalam memahami dan memvisualisasikan dunia secara akurat.",
    recommendations: [
      "Fasilitasi ananda dengan permainan bongkar pasang, origami, dan peralatan gambar.",
      "Ajak ananda melakukan observasi lingkungan dengan menggambar peta rute menuju sekolah.",
      "Pertimbangkan kelas seni rupa, desain desain, atau fotografi sebagai ekstrakurikuler."
    ]
  },
  linguistik: {
    kid: "Wah! Kamu si Penutur Hebat yang pandai merangkai kata!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Linguistik-Verbal. Ini merepresentasikan kepekaan tinggi terhadap makna kata, ritme bahasa, dan kelancaran berekspresi.",
    recommendations: [
      "Bantu ananda membangun perpustakaan mini di rumah dan bacakan buku cerita bersama.",
      "Ajak ananda berdiskusi tentang kegiatan sehari-hari untuk mengembangkan kosa katanya.",
      "Ikutsertakan ananda pada kegiatan mendongeng, jurnalistik anak, atau kursus menulis kreatif."
    ]
  },
  logika: {
    kid: "Mantap! Kamu si Penemu Pintar yang suka teka-teki!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Logika-Matematika. Ananda memiliki kapasitas yang baik dalam mengenali pola rumit, berhitung, dan abstraksi logis.",
    recommendations: [
      "Tawarkan mainan berbasis logika, permainan catur, atau puzzle yang menantang.",
      "Libatkan ananda dalam kegiatan menghitung, menakar resep, atau melakukan eksperimen sains sederhana di rumah.",
      "Arahkan minatnya pada coding (pemrograman dasar anak) atau robotika."
    ]
  },
  kinestetik: {
    kid: "Luar Biasa! Kamu si Atlet Lincah yang penuh energi!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Kinestetik-Jasmani. Ini ditandai dengan penggunaan anggota tubuh yang optimal untuk mengekspresikan ide, perasaan, dan keterampilan motorik yang matang.",
    recommendations: [
      "Berikan ruang yang cukup bagi ananda untuk berlari, melompat, dan bereksplorasi secara fisik.",
      "Fasilitasi ananda untuk membuat kerajinan tangan yang membutuhkan koordinasi motorik halus.",
      "Arahkan minat ananda pada klub olahraga (renang, sepak bola, senam) atau sanggar tari."
    ]
  },
  musikal: {
    kid: "Asyik! Kamu si Maestro Nada yang suaranya merdu!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Musikal. Ananda memiliki kepekaan tajam akan nada, irama, melodi, dan struktur komposisi sebuah bunyi.",
    recommendations: [
      "Perdengarkan berbagai jenis genre instrumen atau musik yang positif sehari-hari.",
      "Beri kesempatan ananda mencoba berbagai alat musik ringan (pianika, rekoder, atau perkusi).",
      "Pertimbangkan les vokal atau instrumen musik sebagai sarat pengembangan emosi ananda."
    ]
  },
  interpersonal: {
    kid: "Keren! Kamu si Pemimpin Ramah yang disukai banyak teman!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Interpersonal. Ananda sangat mudah membaca emosi, motivasi, serta intensi dari individu lain di sekitarnya.",
    recommendations: [
      "Ajak ananda ke berbagai forum sosial, kegiatan relawan anak, atau acara kumpul-kumpul kelompok bermain.",
      "Berikan tanggung jawab kecil seperti melatih kerja sama saat bermain dengan saudara.",
      "Dukung pembentukan karakter kepemimpinannya melalui program pramuka atau klub diskusi tingkat dasar."
    ]
  },
  intrapersonal: {
    kid: "Hebat! Kamu si Pemikir Kritis yang mandiri dan berani!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Intrapersonal. Ananda memiliki kesadaran diri yang baik serta memahami dengan jelas kelebihan, kekurangan, dan emosinya sendiri.",
    recommendations: [
      "Beri ananda ruang aman dan waktu privat untuk merenung serta menyelesaikan proyek mandirinya sendiri.",
      "Bantu ananda menyusun jurnal atau buku harian agar ia stabil meregulasi emosinya.",
      "Berikan ananda kebebasan memilih minat dengan opsi yang dipandu (guided autonomy)."
    ]
  },
  naturalis: {
    kid: "Seru Sekali! Kamu si Penjelajah Alam yang sayang bumi!",
    parent: "Ananda menunjukkan indikasi kuat pada Kecerdasan Naturalis. Ini ditandai ketertarikan tinggi untuk meneliti, merawat, dan berinteraksi secara konsisten terhadap tumbuhan maupun hewan.",
    recommendations: [
      "Sediakan wadah eksplorasi alam terbuka secara rutin, seperti berkemah, berkebun, dan hiking.",
      "Ajak ananda mengadopsi atau merawat satu hewan peliharaan agar tumbuh rasa empati dan tanggung jawab.",
      "Biasakan ananda untuk menonton dokumenter sains, lingkungan alam, dan biologi."
    ]
  }
};

export default function PredictorGame({ isVisible }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ 
    spasial: 0, linguistik: 0, logika: 0, 
    kinestetik: 0, musikal: 0, interpersonal: 0, 
    intrapersonal: 0, naturalis: 0 
  });
  const [result, setResult] = useState(null);

  const handleAnswer = (scoreType) => {
    const newScores = { ...scores, [scoreType]: scores[scoreType] + 1 };
    setScores(newScores);
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate
      let maxScore = 0;
      let topCategory = 'spasial'; // default
      
      for (const [key, val] of Object.entries(newScores)) {
        if (val > maxScore) {
          maxScore = val;
          topCategory = key;
        }
      }
      setResult(topCategory);
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      var particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 250);
  };

  if (!isVisible) return null;

  return (
    <div className="game-section glass-panel" id="predictor-game">
      {!result ? (
        <div className="question-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(currentQ / questions.length) * 100}%` }}></div>
          </div>
          <h2 className="game-question">{questions[currentQ].text}</h2>
          <div className="options-grid">
            {questions[currentQ].options.map((opt, i) => (
              <button 
                key={i} 
                className="glass-button option-btn" 
                onClick={() => handleAnswer(opt.score)}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-container result-animated">
          <div className="kid-result">
            <h2 className="result-title">Selesai! 🎉</h2>
            <p className="result-desc-kid">{intelligenceData[result].kid}</p>
          </div>
          
          <div className="parent-result glass-panel">
            <h3 className="parent-title">Laporan Analisis Kepada Orang Tua</h3>
            <p className="parent-text">{intelligenceData[result].parent}</p>
            <h4 className="recommendation-title">Rekomendasi Tindak Lanjut:</h4>
            <ul className="recommendation-list">
              {intelligenceData[result].recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
          
          <button className="glass-button secondary restart-btn" onClick={() => {
            setCurrentQ(0);
            setScores({ 
              spasial: 0, linguistik: 0, logika: 0, 
              kinestetik: 0, musikal: 0, interpersonal: 0, 
              intrapersonal: 0, naturalis: 0 
            });
            setResult(null);
          }}>
            Main Lagi! 🔄
          </button>
        </div>
      )}
    </div>
  );
}
