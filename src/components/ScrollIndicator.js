import React, { useState, useEffect } from 'react';
import { getPublicImageUrl, PLACEHOLDER_IMAGES } from '../utils/imageUtils';

function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const movieGrid = document.querySelector('.movie-grid');
    if (movieGrid) {
      const rect = movieGrid.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 100;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.5,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        .scroll-indicator {
          position: relative;
          display: flex;
          justify-content: center;
          margin: 20px 0 60px 0;
          z-index: 10;
          opacity: 1;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        @media (min-width: 1081px) {
          .scroll-indicator {
            margin: -66px 0 60px 0;
          }
        }
        
        .scroll-button {
          width: auto;
          height: auto;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: visible;
        }
        
        .scroll-button:hover {
          transform: translateY(-10px) scale(1.1);
        }
        
        
        .scroll-arrow {
          width: 120px;
          height: 120px;
          transition: all 0.3s ease;
          transform: translateY(0);
          animation: bounce 2s infinite;
          filter: drop-shadow(0 6px 12px rgba(255, 107, 157, 0.3));
          position: relative;
          z-index: 1;
        }
        
        .scroll-button:hover .scroll-arrow {
          transform: translateY(2px);
          animation: none;
          filter: drop-shadow(0 6px 12px rgba(255, 20, 147, 0.4));
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
        
        
        @media (max-width: 768px) {
          .scroll-indicator {
            margin: 15px 0 50px 0;
          }
          .scroll-arrow {
            width: 100px;
            height: 100px;
          }
        }
        
        @media (max-width: 480px) {
          .scroll-indicator {
            margin: 10px 0 40px 0;
          }
          .scroll-arrow {
            width: 90px;
            height: 90px;
          }
        }
      `}</style>
      
      <div className="scroll-indicator">
        <div 
          className="scroll-button"
          onClick={scrollToContent}
        >
          <img 
            src={getPublicImageUrl('scroll-arrow.png')}
            alt="Scroll arrow"
            className="scroll-arrow"
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'contain',
              display: 'block'
            }}
            onError={(e) => {
              e.target.src = PLACEHOLDER_IMAGES.arrow;
            }}
          />
          <svg 
            style={{
              display: 'none',
              width: '120px',
              height: '120px',
              color: '#ff6b9d'
            }}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </>
  );
}

export default ScrollIndicator;
