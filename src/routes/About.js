import Footer from '../components/Footer';

function About() {
  return (
    <div className="about-container" style={{ 
      maxWidth: '1400px', 
      margin: '0 auto',
      padding: '60px 40px 60px 40px'
    }}>
      {/* 메인 타이틀 */}
      <div className="main-title-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '160px 0px 20px 0px',
        textAlign: 'center',
        marginBottom: '60px',
        position: 'relative'
      }}>
        <style>{`
          @media (min-width: 1081px) {
            .main-title-container {
              padding: 160px 0px 20px 0px !important;
            }
          }
          @media (max-width: 1400px) {
            .main-title {
              font-size: clamp(2.8rem, 10vw, 6rem) !important;
            }
          }
          @media (max-width: 1080px) {
            .main-title {
              white-space: normal !important;
              overflow: visible !important;
              text-overflow: unset !important;
              line-height: 1.2 !important;
            }
            .main-title .title-float {
              display: inline-block !important;
              margin-bottom: 0.2em !important;
            }
            .main-title-container {
              padding: 160px 0px 20px 0px !important;
            }
          }
          @media (max-width: 768px) {
            .main-title {
              font-size: clamp(2.8rem, 9vw, 4.5rem) !important;
              white-space: normal !important;
              overflow: visible !important;
              text-overflow: unset !important;
              line-height: 1.2 !important;
              margin-bottom: 20px !important;
            }
            .main-title .title-float {
              display: inline-block !important;
              margin-bottom: 0.2em !important;
            }
            .main-title-container {
              padding-top: 160px !important;
            }
          }
          @media (max-width: 480px) {
            .main-title {
              font-size: clamp(2rem, 6vw, 3rem) !important;
              padding: 10px 20px !important;
              margin-bottom: 15px !important;
            }
          }
          @media (max-width: 1080px) and (min-width: 768px) {
            .main-title-container {
              padding-top: 160px !important;
              padding-bottom: 0 !important;
            }
            .main-title {
              font-size: clamp(3.5rem, 10vw, 5.5rem) !important;
              margin-bottom: -55px !important;
            }
          }
          @media (max-width: 780px) and (min-width: 600px) {
            .main-title-container {
              padding-bottom: 0 !important;
            }
            .main-title {
              font-size: clamp(4rem, 12vw, 6rem) !important;
            }
          }
          @media (max-width: 768px) {
            .about-container {
              padding: 60px 20px 60px 20px !important;
            }
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .footer-margin {
              margin-top: 45px !important;
            }
          }
          @media (max-width: 600px) {
            .about-container {
              padding: 100px 20px 60px 20px !important;
            }
            .main-title {
              font-size: clamp(5.6rem, 18vw, 8.4rem) !important;
              margin-bottom: -50px !important;
            }
            .main-title-container {
              padding-top: 100px !important;
            }
          }
          @media (max-width: 480px) {
            .about-container {
              padding: 60px 20px 60px 20px !important;
            }
            .about-grid {
              gap: 30px !important;
            }
            .main-title-container {
              margin-bottom: -15px !important;
              padding-bottom: 0px !important;
            }
          }
          @keyframes floatUp {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @keyframes floatUpDelay1 {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          @keyframes floatUpDelay2 {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .title-float {
            animation: floatUp 4s ease-in-out infinite;
            display: inline-block;
            position: relative;
            transition: all 0.3s ease;
          }
          .title-float:nth-child(1) {
            animation-delay: 0s;
          }
          .title-float:nth-child(2) {
            animation-delay: 0.5s;
            animation-name: floatUpDelay1;
          }
          .title-float:nth-child(3) {
            animation-delay: 1s;
            animation-name: floatUpDelay2;
          }
          .title-float:hover::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 4px;
            background: #ffb6c1;
            border: 1px solid #000000;
            border-radius: 2px;
          }
          .title-float:nth-child(2):hover::after {
            bottom: -4px;
          }
          .title-float:nth-child(3):hover::after {
            bottom: -4px;
          }
          .title-float:hover {
            transform: translateY(-2px);
          }
        `}</style>
        <div className="main-title" style={{
          fontSize: 'clamp(3.5rem, 12vw, 8rem)',
          fontWeight: '300',
          fontFamily: '"Instrument Serif", serif',
          color: '#ffb6c1',
          letterSpacing: '-0.02em',
          margin: 0,
          lineHeight: '1.1',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          WebkitTextStroke: '1px #000000',
          textStroke: '1px #000000'
        }}>
          <span className="title-float" style={{
            WebkitTextStroke: '1px #000000',
            textStroke: '1px #000000'
          }}>Stories</span>
          <span className="title-float" style={{
            WebkitTextStroke: '1px #000000',
            textStroke: '1px #000000',
            fontFamily: '"Alex Brush", cursive',
            fontSize: '0.8em',
            fontWeight: '400',
            position: 'relative',
            top: '-0.05em',
            marginLeft: '0.1em'
          }}>of</span>
          <span className="title-float" style={{
            WebkitTextStroke: '1px #000000',
            textStroke: '1px #000000'
          }}> Youth</span>
          <span className="title-float" style={{
            WebkitTextStroke: '1px #000000',
            textStroke: '1px #000000',
            fontFamily: '"Alex Brush", cursive',
            fontSize: '0.8em',
            fontWeight: '400',
            position: 'relative',
            top: '-0.05em',
            marginLeft: '0.1em'
          }}>in the Spotlight</span>
        </div>
      </div>

      <div style={{
        paddingBottom: '0px',
        paddingTop: '40px'
      }}>
        {/* 2단 레이아웃 */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* 좌측 - 메인 설명 */}
          <div style={{
            paddingTop: '20px'
          }}>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.9', 
              marginBottom: '0',
              color: '#333',
              fontWeight: '400',
              letterSpacing: '0.3px',
              fontFamily: '"SUSE Mono", monospace'
            }}>
              Highlight brings together a collection of the most iconic teen movies — a celebration of the magic and madness of growing up.<br /><br />
              From the rush of first love to the bonds of friendship, from prom night dreams to graduation day tears, every story of adolescence deserves to shine.<br /><br />
              Spanning decades of beloved coming-of-age films, our collection captures the universal language of youth and reminds us why these moments stay with us forever.
            </p>
          </div>

          {/* 우측 - Our Story & Built With */}
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div style={{
              padding: '20px 0',
              borderBottom: '1px solid #f5f5f5'
            }}>
              <span style={{
                fontSize: '12px',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '700',
                fontFamily: '"SUSE Mono", monospace'
              }}>
                Our Story
              </span>
              <p style={{
                marginTop: '10px',
                fontSize: '13px',
                color: '#333',
                lineHeight: '1.7',
                fontFamily: '"SUSE Mono", monospace',
                letterSpacing: '0.2px'
              }}>
                First love & romance, friendship & betrayal, prom & graduation, 
                social hierarchies, family conflicts, coming-of-age journeys
              </p>
            </div>
            
            <div style={{
              padding: '20px 0',
              borderBottom: '1px solid #f5f5f5'
            }}>
              <span style={{
                fontSize: '12px',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '700',
                fontFamily: '"SUSE Mono", monospace'
              }}>
                Built With
              </span>
              <p style={{
                marginTop: '10px',
                fontSize: '13px',
                color: '#333',
                lineHeight: '1.7',
                fontFamily: '"SUSE Mono", monospace',
                letterSpacing: '0.2px'
              }}>
                React.js, React Router, TMDB Movie API
              </p>
            </div>
          </div>
        </div>

       <div className="footer-margin" style={{ marginTop: '200px' }}>
         <Footer />
       </div>
    </div>
    </div>
  );
}

export default About;
