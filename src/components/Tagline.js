import React from 'react';

function Tagline() {
  return (
    <>
      <style>{`
        .tagline-container {
          position: fixed;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 1000;
          pointer-events: none;
        }
        .tagline-text {
          font-family: "SUSE Mono", monospace;
          font-size: 12px;
          color: #666;
          letter-spacing: 0.5px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          padding: 20px 10px;
          background: transparent;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: none;
        }
        @media (max-width: 1080px) {
          .tagline-text {
            padding: 15px 8px;
            font-size: 11px;
          }
        }
        @media (max-width: 768px) {
          .tagline-text {
            padding: 12px 6px;
            font-size: 10px;
          }
        }
        @media (max-width: 600px) {
          .tagline-container {
            display: none;
          }
        }
      `}</style>
      <div className="tagline-container">
        <div className="tagline-text">
          where every teen story shines
        </div>
      </div>
    </>
  );
}

export default Tagline;
