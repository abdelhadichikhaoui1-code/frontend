import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import HomeFooter from '../components/HomeFooter';

function Home() {
  useEffect(() => {
    // Keep horizontal overflow hidden while preserving vertical scroll on small screens.
    const previousOverflowX = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = previousOverflowX;
    };
  }, []);

  return (
    <div className="home-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #f5fcfd 0%, #ffffff 40%, #f9f7ff 100%)', color: 'var(--text)', overflow: 'hidden' }}>
      <HomeNavbar />
      <div className="home-floating-shapes" aria-hidden="true">
        <span className="shape shape-star">⭐</span>
        <span className="shape shape-heart">💜</span>
        <span className="shape shape-ball">●</span>
        <span className="shape shape-spark">✨</span>
      </div>

      {/* Hero Section */}
      <main className="home-hero-main" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden' }}>
        <div className="home-hero-content" style={{ flex: '0 1 600px', maxWidth: '600px', animation: 'fadeInLeft 1s ease-out' }}>
          <h1 className="home-title" style={{ lineHeight: '1.2', fontWeight: '800', marginBottom: '24px', color: '#1f2a44' }}>
            La rééducation, plus simple <br />
            <span style={{ color: 'var(--primary)' }}>et motivante.</span>
          </h1>
          <p className="home-description" style={{ color: '#4a5b76', marginBottom: '40px', lineHeight: '1.7', opacity: 0.95 }}>
            Un espace clair et intuitif pour accompagner la rééducation à domicile comme en cabinet. Suivez les progrès, adaptez le programme et avancez en confiance.
          </p>
          <div className="home-kids-tags">
            <span>Exercices guidés</span>
            <span>Suivi des progrès</span>
            <span>Programmes personnalisés</span>
          </div>
          <div className="home-cta-row" style={{ display: 'flex', gap: '16px' }}>
            <Link to="/register" className="btn" style={{ padding: '14px 32px', boxShadow: '0 12px 20px -6px rgba(88, 201, 207, 0.45)' }}>
              Commencer
            </Link>
          </div>
        </div>

        <div className="home-hero-image-wrap" style={{ flex: '0 1 490px', position: 'relative', animation: 'fadeInRight 1s ease-out' }}>
          <div className="home-hero-photos" aria-label="Photos de rééducation">
            <div className="home-hero-bubble home-hero-bubble--lg">
              <img src="/assets/home_photo_2.png" alt="Exercice de motricité en rééducation" />
            </div>
            <div className="home-hero-bubble home-hero-bubble--sm">
              <img src="/assets/home_photo_1.png" alt="Enfant en consultation de rééducation" />
            </div>
          </div>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(168,157,245,0.25) 0%, rgba(255,255,255,0) 70%)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(88,201,207,0.18) 0%, rgba(255,255,255,0) 70%)', zIndex: 1 }}></div>
        </div>
      </main>

      <HomeFooter />

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .home-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          position: relative;
        }
        .home-floating-shapes .shape {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }
        .shape-star { top: 110px; left: 4vw; font-size: 20px; animation: floatSoft 4s ease-in-out infinite; }
        .shape-heart { top: 170px; right: 7vw; font-size: 22px; animation: floatSoft 5s ease-in-out infinite; }
        .shape-ball { bottom: 180px; left: 8vw; font-size: 18px; color: #58c9cf; animation: floatSoft 4.6s ease-in-out infinite; }
        .shape-spark { bottom: 120px; right: 8vw; font-size: 24px; animation: twinkle 2.4s ease-in-out infinite; }
        .home-hero-main {
          padding: 0 clamp(16px, 6vw, 100px);
          gap: clamp(20px, 5vw, 48px);
          position: relative;
          z-index: 2;
        }
        .home-title {
          font-size: clamp(1.85rem, 5.3vw, 3.5rem);
        }
        .home-description {
          font-size: clamp(0.98rem, 2vw, 1.15rem);
        }
        .home-cta-row .btn {
          font-size: clamp(13px, 1.9vw, 16px);
        }
        .home-kids-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }
        .home-kids-tags span {
          background: #eef1ff;
          border: 1px solid #d7d0ff;
          color: #5146a6;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          padding: 7px 12px;
        }
        .home-hero-photos {
          position: relative;
          z-index: 2;
          width: min(100%, 520px);
          margin-left: auto;
          height: 520px;
        }
        .home-hero-bubble {
          position: absolute;
          overflow: hidden;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 28px 60px -28px rgba(0,0,0,0.28);
          border: 1px solid rgba(31, 42, 68, 0.08);
        }
        .home-hero-bubble--lg {
          width: 420px;
          height: 420px;
          right: 0;
          top: 18px;
          border-radius: 44% 56% 52% 48% / 44% 46% 54% 56%;
        }
        .home-hero-bubble--sm {
          width: 270px;
          height: 270px;
          left: 0;
          bottom: 14px;
          border-radius: 56% 44% 48% 52% / 54% 56% 44% 46%;
        }
        .home-hero-bubble img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }
        .home-hero-bubble--sm img {
          object-position: 32% center;
        }
        @media (max-width: 900px) {
          .home-hero-main {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding-top: 20px;
            padding-bottom: 24px;
            overflow: visible;
          }
          .home-hero-content {
            flex: 1 1 auto;
            max-width: 100%;
          }
          .home-cta-row {
            justify-content: center;
          }
          .home-kids-tags {
            justify-content: center;
          }
          .shape-star { top: 96px; left: 5vw; }
          .shape-heart { top: 140px; right: 5vw; }
          .shape-ball { bottom: 190px; left: 4vw; }
          .shape-spark { bottom: 120px; right: 4vw; }
          .home-hero-image-wrap {
            width: min(100%, 540px);
            flex: 1 1 auto;
          }
          .home-hero-photos {
            margin: 0 auto;
            height: 520px;
          }
          .home-hero-bubble--lg {
            width: min(420px, 92vw);
            height: min(420px, 92vw);
            right: 50%;
            transform: translateX(50%);
          }
          .home-hero-bubble--sm {
            width: min(270px, 72vw);
            height: min(270px, 72vw);
            left: 50%;
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .home-hero-photos {
            height: 520px;
          }
          .home-hero-bubble--lg {
            top: -150px;
            width: min(330px, 94vw);
            height: min(390px, 94vw);
            right: 44%;
            transform: translateX(50%);
          }
          .home-hero-bubble--sm {
            width: min(240px, 70vw);
            height: min(240px, 70vw);
            left: 0%;
            bottom: 120px;
            transform: none;
            z-index: 3;
          }
        }
        @media (max-width: 480px) {
          .home-hero-main {
            padding-left: 12px;
            padding-right: 12px;
          }
          .home-description {
            margin-bottom: 24px;
          }
          .home-cta-row .btn {
            width: 100%;
            max-width: 300px;
          }
          .home-hero-photos {
            height: 460px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
