import React from 'react';

function HomeFooter() {
  return (
    <footer style={{ padding: 'clamp(16px, 4vw, 40px)', textAlign: 'center', borderTop: '1px solid #e8eff8', fontSize: 'clamp(12px, 2vw, 14px)', color: 'var(--text-muted)', backgroundColor: '#fff' }}>
      <div>© 2026 Step By Step • Tous droits réservés</div>
      <div className="home-footer-signature" aria-hidden="true">
        Oumayma & Abdelhadi
      </div>
      <style>{`
        .home-footer-signature {
          margin-top: 6px;
          text-align: right;
          font-family: "Great Vibes", cursive;
          font-size: clamp(18px, 2.6vw, 26px);
          color: rgba(168, 157, 245, 0.92);
          text-shadow: 0 10px 22px rgba(0,0,0,0.10);
          pointer-events: none;
          user-select: none;
        }
        @media (max-width: 480px) {
          .home-footer-signature {
            text-align: right;
            font-size: 22px;
          }
        }
      `}</style>
    </footer>
  );
}

export default HomeFooter;
