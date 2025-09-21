import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './routes/Home';
import Detail from './routes/Detail';
import About from './routes/About';
import Navigation from './components/Navigation';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 'a') ||
        (e.ctrlKey && e.key === 'c') ||
        (e.ctrlKey && e.key === 'v') ||
        (e.ctrlKey && e.key === 'x')
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <style>
        {`
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&family=Instrument+Serif:ital,wght@0,400;0,600;1,400;1,600&family=Alex+Brush&family=SUSE+Mono:wght@100..800&family=Space+Grotesk:wght@300;400;500;600;700&family=Libertinus+Math&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          img {
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            user-drag: none;
          }
          
          .nav-symbol {
            pointer-events: auto !important;
          }
          
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            color-scheme: light only;
            background: #ffeef8 !important;
          }
          
          @media (prefers-color-scheme: dark) {
            * {
              color-scheme: light only !important;
            }
            
            body, html, #root {
              background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 25%, #f8f9ff 50%, #fff5f5 75%, #ffeef8 100%) !important;
              color: #1d1d1f !important;
            }
          }
          
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes rotate360 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes rotate360Y {
            from { transform: translate(-50%, -50%) rotateY(0deg); }
            to { transform: translate(-50%, -50%) rotateY(360deg); }
          }
          
          .y2k-heart-3d {
            transform-origin: center center;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          .love-card {
            width: 100%;
            height: 480px;
            position: relative;
            cursor: pointer;
            perspective: 1000px;
          }
          
          .love-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .love-card:hover .love-card-inner {
            transform: rotateY(180deg);
          }

          .mobile-card .love-card-inner {
            transform: rotateY(0deg);
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .mobile-card.flipped .love-card-inner {
            transform: rotateY(180deg);
          }

          @media (max-width: 1024px) and (pointer: coarse) {
            .love-card:hover .love-card-inner {
              transform: rotateY(0deg);
            }
            
            .mobile-card:hover .love-card-inner {
              transform: rotateY(0deg);
            }
            
            .mobile-card.flipped:hover .love-card-inner {
              transform: rotateY(180deg);
            }

            .mobile-card {
              -webkit-tap-highlight-color: transparent;
              user-select: none;
            }

            .mobile-card:active {
              transform: scale(0.98);
              transition: transform 0.1s ease-out;
            }
          }

          .detail-button-mobile {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
            -webkit-tap-highlight-color: transparent;
          }

          .detail-button-mobile:focus {
            outline: none;
            box-shadow: 0px 6px 20px rgba(255, 182, 193, 0.5), 0px 0px 16px rgba(255, 240, 245, 0.6) !important;
          }
          
          .card-front, .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            box-shadow: 
              0 10px 30px rgba(255, 107, 157, 0.1),
              0 1px 8px rgba(0, 0, 0, 0.05);
            transition: box-shadow 0.3s ease;
          }
          
          .card-front {
            overflow: visible;
          }
          
          .card-back {
            overflow: hidden;
          }
          
          .card-front {
            backdrop-filter: blur(20px);
          }
          
          .card-back {
            transform: rotateY(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .love-card:hover .card-front,
          .love-card:hover .card-back {
            box-shadow: 
              0 25px 50px rgba(255, 107, 157, 0.2),
              0 10px 30px rgba(196, 69, 105, 0.1);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #ff6b9d, #c44569, #8e44ad);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #ff6b9d; }
          }
          
                  @keyframes glow {
                    0%, 100% { 
                      text-shadow: 0 0 20px rgba(255, 107, 157, 0.3);
                    }
                    50% { 
                      text-shadow: 0 0 40px rgba(255, 107, 157, 0.6), 0 0 60px rgba(196, 69, 105, 0.4);
                    }
                  }
                  
                  @keyframes pulse3d {
                    0%, 100% { transform: scale3d(1, 1, 1) rotateY(0deg); }
                    50% { transform: scale3d(1.05, 1.05, 1.05) rotateY(15deg); }
                  }
                  
                  @keyframes rotate360Y {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                  }
                  
                  @keyframes newjeansGlow {
                    0% { 
                      filter: brightness(1.0) saturate(1.1) contrast(1.0);
                      box-shadow: 0 0 20px rgba(173, 216, 255, 0.6), 0 0 40px rgba(255, 182, 193, 0.4);
                    }
                    33% { 
                      filter: brightness(1.1) saturate(1.2) contrast(1.05);
                      box-shadow: 0 0 25px rgba(255, 182, 193, 0.7), 0 0 50px rgba(173, 216, 255, 0.5);
                    }
                    66% { 
                      filter: brightness(1.05) saturate(1.15) contrast(1.02);
                      box-shadow: 0 0 30px rgba(248, 248, 255, 0.8), 0 0 60px rgba(173, 216, 255, 0.6);
                    }
                    100% { 
                      filter: brightness(1.0) saturate(1.1) contrast(1.0);
                      box-shadow: 0 0 20px rgba(173, 216, 255, 0.6), 0 0 40px rgba(255, 182, 193, 0.4);
                    }
                  }
                  
                  @keyframes gentleFloat {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-8px) scale(1.02); }
                  }
                  
                  .heart-3d {
                    position: relative;
                    width: 60px;
                    height: 54px;
                    transform-style: preserve-3d;
                    animation: pulse3d 4s ease-in-out infinite;
                  }
                  
                  .heart-3d:before,
                  .heart-3d:after {
                    content: '';
                    width: 30px;
                    height: 48px;
                    position: absolute;
                    left: 30px;
                    background: linear-gradient(135deg, #ff6b9d, #ff1493, #dc143c);
                    border-radius: 30px 30px 0 0;
                    transform: rotate(-45deg);
                    transform-origin: 0 100%;
                    box-shadow: 
                      0 0 20px rgba(255, 20, 147, 0.6),
                      inset -5px -5px 10px rgba(0, 0, 0, 0.2),
                      inset 5px 5px 10px rgba(255, 255, 255, 0.3);
                  }
                  
                  .heart-3d:after {
                    left: 0;
                    transform: rotate(45deg);
                    transform-origin: 100% 100%;
                  }
                  
                  .y2k-heart-3d {
                    position: relative;
                    width: 100px;
                    height: 90px;
                    transform-style: preserve-3d;
                    animation: rotate360Y 6s linear infinite;
                    filter: drop-shadow(0 0 20px rgba(173, 216, 255, 0.7));
                  }
                  
                  .y2k-heart-3d::before,
                  .y2k-heart-3d::after {
                    content: '';
                    width: 50px;
                    height: 80px;
                    position: absolute;
                    left: 50px;
                    background: linear-gradient(
                      135deg, 
                      #add8ff 0%,
                      #b8e6ff 20%,
                      #c8f0ff 40%,
                      #f0f8ff 60%,
                      #ffb6c1 80%,
                      #ffc0cb 100%
                    );
                    border-radius: 50px 50px 0 0;
                    transform: rotate(-45deg) translateZ(20px);
                    transform-origin: 0 100%;
                    box-shadow: 
                      0 0 25px rgba(173, 216, 255, 0.8),
                      inset -8px -8px 15px rgba(0, 0, 0, 0.1),
                      inset 8px 8px 15px rgba(255, 255, 255, 0.7),
                      0 0 50px rgba(255, 182, 193, 0.5);
                  }
                  
                  .y2k-heart-3d::after {
                    left: 0;
                    transform: rotate(45deg) translateZ(20px);
                    transform-origin: 100% 100%;
                    background: linear-gradient(
                      135deg, 
                      #ffc0cb 0%,
                      #ffb6c1 20%,
                      #f0f8ff 40%,
                      #c8f0ff 60%,
                      #b8e6ff 80%,
                      #add8ff 100%
                    );
                  }
                  
                  
                  .hl-heart-logo {
                    position: relative;
                    width: 140px;
                    height: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform-style: preserve-3d;
                    animation: pulse3d 4s ease-in-out infinite;
                  }
                  
                  .letter-h-heart {
                    font-family: '"Instrument Serif", serif';
                    font-size: 80px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #ff6b9d, #ff1493, #dc143c);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                    transform: rotate(-15deg) skewY(-5deg);
                    filter: drop-shadow(4px 4px 8px rgba(255, 20, 147, 0.4));
                    margin-right: -15px;
                    z-index: 2;
                  }
                  
                  .letter-l-heart {
                    font-family: '"Instrument Serif", serif';
                    font-size: 80px;
                    font-weight: 700;
                    background: linear-gradient(135deg, #ff1493, #dc143c, #b91372);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                    transform: rotate(15deg) skewY(5deg) scaleX(-1);
                    filter: drop-shadow(-4px 4px 8px rgba(255, 20, 147, 0.4));
                    margin-left: -15px;
                    z-index: 1;
                  }
                  
                  .hl-heart-logo::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 120px;
                    height: 100px;
                    background: radial-gradient(ellipse at center, rgba(255, 107, 157, 0.1), transparent);
                    border-radius: 50%;
                    z-index: 0;
                  }
                  
                  .hl-heart-logo::after {
                    content: '🎬';
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    font-size: 20px;
                    opacity: 0.7;
                    animation: float 2s ease-in-out infinite;
                    z-index: 3;
                  }
                  
                  /* Y2K 영화 심볼들 */
                  .movie-film-icon {
                    position: relative;
                    width: 80px;
                    height: 60px;
                    background: linear-gradient(45deg, #ff6b9d, #c44569, #8e44ad);
                    border-radius: 8px;
                    animation: pulse3d 3s ease-in-out infinite;
                    box-shadow: 0 0 20px rgba(255, 107, 157, 0.4);
                  }
                  
                  .movie-film-icon::before,
                  .movie-film-icon::after {
                    content: '';
                    position: absolute;
                    width: 8px;
                    height: 100%;
                    background: linear-gradient(45deg, #ff6b9d, #c44569);
                    border-radius: 4px;
                  }
                  
                  .movie-film-icon::before {
                    left: 8px;
                  }
                  
                  .movie-film-icon::after {
                    right: 8px;
                  }
                  
                  .popcorn-icon {
                    position: relative;
                    width: 60px;
                    height: 80px;
                    background: linear-gradient(135deg, #ffd166, #ff9f43);
                    border-radius: 30px 30px 15px 15px;
                    animation: gentleFloat 2s ease-in-out infinite;
                    box-shadow: 0 8px 25px rgba(255, 159, 67, 0.3);
                  }
                  
                  .popcorn-icon::before {
                    content: '🍿';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 24px;
                    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
                  }
                  
                  .ticket-icon {
                    position: relative;
                    width: 70px;
                    height: 100px;
                    background: linear-gradient(135deg, #7bdff2, #4ecdc4);
                    border-radius: 15px;
                    animation: rotate360Y 4s linear infinite;
                    box-shadow: 0 0 25px rgba(123, 223, 242, 0.5);
                  }
                  
                  .ticket-icon::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: -8px;
                    width: 16px;
                    height: 16px;
                    background: #fff;
                    border-radius: 50%;
                    transform: translateY(-50%);
                  }
                  
                  .ticket-icon::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: -8px;
                    width: 16px;
                    height: 16px;
                    background: #fff;
                    border-radius: 50%;
                    transform: translateY(-50%);
                  }
                  
        `}
      </style>
      <div style={{ 
        background: 'linear-gradient(135deg, #ffeef8 0%, #fff0f5 25%, #f8f9ff 50%, #fff5f5 75%, #ffeef8 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 12s ease infinite',
        minHeight: '100vh',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        
        <audio id="bgMusic" loop>
          <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        </audio>
        
        <Router>
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
