import { Link } from 'react-router-dom';
import { getPublicImageUrl, PLACEHOLDER_IMAGES } from '../utils/imageUtils';

function Navigation() {
  
  return (
    <>
      <style>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, 0px) rotate(0deg);
          }
          to {
            transform: translate(-50%, 0px) rotate(360deg);
          }
        }
        @media (max-width: 768px) {
          .nav-container {
            padding: 25px 20px !important;
            grid-template-columns: 1fr auto 1fr !important;
            gap: 15px !important;
          }
          .nav-logo {
            font-size: 24px !important;
          }
          .nav-menu {
            gap: 20px !important;
          }
          .nav-link {
            font-size: 18px !important;
          }
          .nav-symbol {
            width: 180px !important;
            height: 180px !important;
          }
        }
        @media (max-width: 600px) {
          .nav-container {
            padding: 20px 24px !important;
          }
          .nav-symbol {
            width: 160px !important;
            height: 160px !important;
          }
        }
        @media (max-width: 480px) {
          .nav-container {
            padding: 18px 20px !important;
          }
          .nav-logo {
            font-size: 20px !important;
          }
          .nav-menu {
            gap: 16px !important;
          }
          .nav-link {
            font-size: 16px !important;
          }
          .nav-symbol {
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>
      <nav style={{
        borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: 'transparent'
      }}>
        <div className="nav-container" style={{ 
          padding: '20px 40px',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'flex-start',
          gap: '20px'
        }}>
        <Link to="/" className="nav-logo" 
          aria-label="Highlighteen home page"
          style={{
          fontSize: '32px',
          fontWeight: '500',
          textDecoration: 'none',
          color: '#1d1d1f',
          fontFamily: '"Instrument Serif", serif',
          letterSpacing: '-0.5px',
          transition: 'all 0.2s ease',
          justifySelf: 'start',
          alignSelf: 'center'
        }}
        onClick={(e) => {
          if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#ffb6c1';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#1d1d1f';
        }}>
          Highlighteen
        </Link>
        
        <div style={{
          justifySelf: 'center',
          position: 'relative',
          zIndex: 101
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
          }}
          onMouseEnter={(e) => {
            e.target.style.animationPlayState = 'paused';
            e.target.style.transform = 'translate(-50%, 0px) rotate(5deg) scale(1.05)';
            e.target.style.filter = 'drop-shadow(0 0 15px rgba(255, 182, 193, 0.5))';
          }}
          onMouseLeave={(e) => {
            e.target.style.animationPlayState = 'running';
            e.target.style.transform = 'translate(-50%, 0px)';
            e.target.style.filter = 'none';
          }}>
            <img 
              className="nav-symbol"
              src={getPublicImageUrl('highlighteen-symbol.png')}
              alt="Highlighteen Symbol"
              onError={(e) => {
                e.target.src = PLACEHOLDER_IMAGES.symbol;
              }}
              style={{
                width: '180px',
                height: '180px',
                transition: 'all 0.3s ease',
                objectFit: 'contain',
                animation: 'rotate 8s linear infinite',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translate(-50%, 0px)',
                zIndex: 102
              }}
            />
          </Link>
        </div>
        
        <div className="nav-menu" style={{ 
          display: 'flex', 
          gap: '40px',
          justifySelf: 'end',
          alignSelf: 'center'
        }}>
                  <Link to="/" className="nav-link" style={{
                    textDecoration: 'none',
                    color: '#1d1d1f',
                    fontSize: '22px',
                    fontWeight: '400',
                    fontFamily: '"Instrument Serif", serif',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'auto'
                      });
                    }, 100);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffb6c1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#1d1d1f';
                  }}>
                    Home
                  </Link>
                  <Link to="/about" className="nav-link" style={{
                    textDecoration: 'none',
                    color: '#1d1d1f',
                    fontSize: '22px',
                    fontWeight: '400',
                    fontFamily: '"Instrument Serif", serif',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'auto'
                      });
                    }, 100);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffb6c1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#1d1d1f';
                  }}>
                    About
                  </Link>
                </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
