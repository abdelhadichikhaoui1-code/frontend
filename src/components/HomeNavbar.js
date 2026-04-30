import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

function HomeNavbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="home-nav" style={{ 
      padding: '16px clamp(12px, 4vw, 40px)', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      gap: '12px',
      backgroundColor: 'rgba(255,255,255,0.96)', 
      backdropFilter: 'blur(10px)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      borderBottom: '1px solid #e7eef7',
      boxShadow: '0 6px 20px rgba(88, 201, 207, 0.08)'
    }}>
      <Link to={user ? `/${user.role}/dashboard` : "/"} className="home-nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: 'var(--primary)', textDecoration: 'none' }}>
        Step By Step
      </Link>
      <div className="home-nav-right">
        <button
          type="button"
          className="home-nav-menu-btn"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className="home-nav-actions" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <AudioPlayer variant="navbar" />
          {user ? (
            <Link
              to={`/${user.role}/dashboard`}
              className="btn"
              style={{
                padding: 'clamp(8px, 1.8vw, 10px) clamp(14px, 3.4vw, 24px)',
                fontSize: 'clamp(12px, 2.6vw, 14px)',
              }}
            >
              Tableau de Bord
            </Link>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500' }}>Connexion</Link>
              <Link
                to="/register"
                className="btn"
                style={{
                  padding: 'clamp(8px, 1.8vw, 10px) clamp(14px, 3.4vw, 24px)',
                  fontSize: 'clamp(12px, 2.6vw, 14px)',
                }}
              >
                S'inscrire
              </Link>
            </>
          )}
        </div>
      </div>

      <div className={`home-nav-mobile-panel ${isMenuOpen ? 'open' : ''}`} role="dialog" aria-label="Menu">
        <div className="home-nav-mobile-inner">
          <div className="home-nav-mobile-row">
            <AudioPlayer variant="navbar" />
            <span className="home-nav-mobile-muted">Musique</span>
          </div>
          {user ? (
            <Link to={`/${user.role}/dashboard`} className="btn home-nav-mobile-cta" onClick={() => setIsMenuOpen(false)}>
              Tableau de Bord
            </Link>
          ) : (
            <div className="home-nav-mobile-actions">
              <Link to="/login" className="home-nav-mobile-link" onClick={() => setIsMenuOpen(false)}>
                Connexion
              </Link>
              <Link to="/register" className="home-nav-mobile-link home-nav-mobile-link--strong" onClick={() => setIsMenuOpen(false)}>
                S'inscrire
              </Link>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .home-nav-logo {
          font-size: clamp(16px, 2.2vw, 22px);
          white-space: nowrap;
          margin-left: 18px;
        }
        .home-nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .home-nav-menu-btn {
          display: none;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(31, 42, 68, 0.12);
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(10px);
          color: #1f2a44;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 10px 26px -18px rgba(0,0,0,0.28);
        }
        .home-nav-mobile-panel {
          display: none;
        }
        .home-nav-actions {
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        @media (max-width: 640px) {
          .home-nav {
            align-items: center;
          }
          .home-nav-actions {
            display: none !important;
          }
          .home-nav-menu-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .home-nav-mobile-panel {
            display: block;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            z-index: 1100;
            pointer-events: none;
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity 0.18s ease, transform 0.18s ease;
          }
          .home-nav-mobile-panel.open {
            pointer-events: auto;
            opacity: 1;
            transform: translateY(0);
          }
          .home-nav-mobile-inner {
            margin: 10px 12px 0;
            padding: 12px;
            border-radius: 16px;
            background: rgba(255,255,255,0.94);
            border: 1px solid rgba(31, 42, 68, 0.08);
            box-shadow: 0 18px 48px -30px rgba(0,0,0,0.32);
            backdrop-filter: blur(12px);
            display: grid;
            gap: 12px;
            justify-items: start;
          }
          .home-nav-mobile-row {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .home-nav-mobile-muted {
            color: var(--text-muted);
            font-size: 13px;
            font-weight: 600;
          }
          .home-nav-mobile-actions {
            display: grid;
            gap: 6px;
            justify-items: start;
          }
          .home-nav-mobile-link {
            text-decoration: none;
            color: rgba(168, 157, 245, 0.95);
            font-weight: 600;
            font-size: 14px;
            padding: 12px 6px;
            border-radius: 10px;
          }
          .home-nav-mobile-link:hover {
            color: rgba(123, 110, 230, 1);
            background: rgba(168, 157, 245, 0.10);
          }
          .home-nav-mobile-link--strong {
            font-weight: 800;
          }
        }
      `}</style>
    </nav>
  );
}

export default HomeNavbar;
