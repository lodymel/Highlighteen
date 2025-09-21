import React from 'react';

function Copyright() {
  return (
    <>
      <style>{`
        .copyright-container {
          position: fixed;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 1000;
          pointer-events: none;
        }
        .copyright-text {
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
          .copyright-text {
            padding: 15px 8px;
            font-size: 11px;
          }
        }
        @media (max-width: 768px) {
          .copyright-text {
            padding: 12px 6px;
            font-size: 10px;
          }
        }
        @media (max-width: 600px) {
          .copyright-container {
            display: none;
          }
        }
      `}</style>
      <div className="copyright-container">
        <div className="copyright-text">
          © Lody
        </div>
      </div>
    </>
  );
}

export default Copyright;
