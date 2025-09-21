import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, memo } from 'react';
import { generateCardColor } from '../constants/colors';
import { BREAKPOINTS } from '../constants/breakpoints';

const getMovieQuote = (title) => {
  const quotes = {
    'Fear Street: Prom Queen': "This is The New Shadyside, The Promise Of A Bright Future. Perhaps This Is Your Chance To Fulfill That Promise.",
    'Young Hearts': "We all make mistakes. If there's one thing that life taught me, it's that you should always follow your heart.",
    'To All the Boys: Always and Forever': "Life is beautiful, and messy, and never goes according to plan. But I do know that love, real love, is choosing each other through all of it, every single day.",
    'The Kissing Booth 2': "This is our time. We're not gonna get another shot at this.",
    'To All the Boys: P.S. I Still Love You': "I know now that I don't want to love or be loved in half measures. I want it all, and to have it all, you have to risk it all.",
    'Tall Girl': "The only thing that we can control is how we deal with it. And the way I see it, we have two choices. We can lay low, or we can stand tall.",
    'To All the Boys I\'ve Loved Before': "You can be mad at someone and still miss them.",
    'The Kissing Booth': "You're lucky if you can even get one really good best friend in your life.",
    'Reality High': "My goal is to survive the high school year with my sanity intact and my GPA above 3.0.",
    '#realityhigh': "My goal is to survive the high school year with my sanity intact and my GPA above 3.0.",
    'Nerve': "Are you a Watcher? Or a Player?",
    'The DUFF': "You need to realize you're only as awesome as you think you are.",
    'The Bling Ring': "Let's go to Paris's. I want to rob!",
    'The Perks of Being a Wallflower': "Things change. And friends leave. Life doesn't stop for anybody.",
    'Monte Carlo': "You must be the change you want to see in the world.",
    'Flipped': "Some of us get dipped in flat. Some in satin. Some in gloss.",
    'Easy A': "Screw all these people.",
    '17 Again': "Sometimes the wrong choices lead you to the right places.",
    'Wild Child': "It's nice to see you when I'm not half-naked or delirious.",
    'High School Musical 3': "My prom is wherever you are.",
    'High School Musical 3: Senior Year': "My prom is wherever you are.",
    'Angus, Thongs and Perfect Snogging': "Georgia's perfect too. She's just a perfect nutter.",
    'The House Bunny': "The eyes are the nipples of the face.",
    'Superbad': "I just wanna go to the rooftops and scream, 'I love my best friend, Evan.'",
    'High School Musical 2': "Hey, whatever happens, as long as we're together, it's cool, right?",
    'Sydney White': "I think I'm in love with a dork!",
    'Step Up': "Every second chance begins with a first step.",
    'She\'s the Man': "Be a man. Suck it up and rub some dirt in it.",
    'High School Musical': "Did you ever think that maybe I could be both?",
    'Aquamarine': "But I've learned it's not where you are, it's who you're with.",
    'Accepted': "I just want to try it my way.",
    'The Sisterhood of the Traveling Pants': "You know what the secret is? It's so simple. We love one another. We're nice to one another.",
    'Ice Princess': "No, Mom. I'm giving up your dream. I'm going after mine.",
    'Mean Girls': "That is so fetch!",
    'A Cinderella Story': "Never let the fear of striking out keep you from playing the game.",
    'Raise Your Voice': "This place is the scariest, hardest, best thing that has ever happened to me.",
    'The Prince & Me': "Sometimes I wish I could just fast forward the next five years…",
    'Freaky Friday': "Girls, this is serious. We need to figure it out or we'll be stuck like this forever.",
    'The Lizzie McGuire Movie': "This is what dreams are made of, I've got somewhere I belong, I've got somebody to love.",
    'What a Girl Wants': "You don't have to fit in to belong.",
    'The Princess Diaries': "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
    'Legally Blonde': "Exercise gives you endorphins. Endorphins make you happy. Happy people just don't shoot their husbands.",
    'Bring It On': "I define being the best as competing against the best there is out there and beating them.",
    '10 Things I Hate About You': "But mostly I hate the way I don't hate you… not even close, not even a little bit, not even at all."
  };
  
  if (quotes[title]) {
    return quotes[title];
  }
  
  const titleLower = title.toLowerCase();
  for (const [key, quote] of Object.entries(quotes)) {
    const keyLower = key.toLowerCase();
    if (titleLower.includes(keyLower.split(':')[0]) || keyLower.includes(titleLower.split(':')[0])) {
      return quote;
    }
  }
  
  return "A story of youth, love, and growing up.";
};

function Movie({ id, coverImg, title, summary, genres, year }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= BREAKPOINTS.TABLET_LARGE;
      setIsMobile(isTouchDevice && isSmallScreen);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleCardClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      if (!isFlipped) {
        setIsFlipped(true);
      }
    }
  };

  const handleCardBackClick = (e) => {
    if (isMobile && isFlipped) {
      e.stopPropagation();
      const cardElement = e.currentTarget;
      cardElement.style.transition = 'all 0.15s ease';
      cardElement.style.transform = 'scale(0.98)';
      setTimeout(() => {
        navigate(`/movie/${id}`);
      }, 100);
    }
  };

  const cardColor = generateCardColor(title, id);

  const cardContent = (
    <div 
      className={`love-card ${isMobile ? 'mobile-card' : ''} ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`${title} (${year}) - ${isMobile ? 'Tap to flip card' : 'Click to view details'}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick(e);
        }
      }}
      style={{
        cursor: isMobile ? 'pointer' : 'default'
      }}
    >
      <div className="love-card-inner">
        <div className="card-front">
          <div style={{
            width: '100%',
            height: '100%',
            background: cardColor.bg,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1.5px solid black`,
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0',
            position: 'relative',
            overflow: 'visible',
            boxShadow: '0px 8px 32px rgba(255, 182, 193, 0.15), 0px 0px 20px rgba(255, 240, 245, 0.3)'
          }}>
            
            <div style={{
              position: 'absolute',
              top: '4px',
              left: '4px',
              right: '4px',
              bottom: '4px',
              border: `2px solid ${cardColor.border}`,
              borderRadius: '10px',
              background: 'transparent',
              pointerEvents: 'none'
            }} />
            
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              right: '10px',
              bottom: '10px',
              border: `1px dotted ${cardColor.accent}`,
              borderRadius: '8px',
              pointerEvents: 'none'
            }} />
            
            {/* 모서리 장식들 - 점선 테두리 안쪽에 배치 */}
            <div style={{
              position: 'absolute',
              top: '18px',
              left: '18px',
              fontSize: '16px',
              color: cardColor.accent,
              lineHeight: '1'
            }}>✧</div>
            
            <div style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              fontSize: '16px',
              color: cardColor.accent,
              lineHeight: '1'
            }}>☽</div>
            
            <div style={{
              position: 'absolute',
              bottom: '18px',
              left: '18px',
              fontSize: '12px',
              color: cardColor.accent,
              lineHeight: '1'
            }}>♡</div>
            
            <div style={{
              position: 'absolute',
              bottom: '18px',
              right: '18px',
              fontSize: '16px',
              color: cardColor.accent,
              lineHeight: '1'
            }}>✦</div>
            
            {/* 러닝타임과 힌트 텍스트 컨테이너 - 상단 중앙 */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              {/* 러닝타임 */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '12px',
                fontWeight: '500',
                fontFamily: '"SUSE Mono", monospace',
                color: 'rgba(29, 29, 31, 0.7)',
                letterSpacing: '0.5px',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '6px 12px',
                borderRadius: '12px',
                border: `1px solid ${cardColor.border}`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                <span>⏱️</span>
                <span>{(() => {
                // 영화별 러닝타임 데이터 (분 단위)
                const runtimesInMinutes = {
                  'Fear Street: Prom Queen': 98,
                  'Young Hearts': 105,
                  'To All the Boys: Always and Forever': 109,
                  'The Kissing Booth 2': 132,
                  'To All the Boys: P.S. I Still Love You': 101,
                  'Tall Girl': 101,
                  'To All the Boys I\'ve Loved Before': 99,
                  'The Kissing Booth': 105,
                  '#realityhigh': 99,
                  'Reality High': 99,
                  'Nerve': 96,
                  'The DUFF': 101,
                  'The Bling Ring': 90,
                  'The Perks of Being a Wallflower': 103,
                  'Monte Carlo': 109,
                  'Flipped': 90,
                  'Easy A': 92,
                  '17 Again': 102,
                  'Wild Child': 98,
                  'High School Musical 3': 112,
                  'High School Musical 3: Senior Year': 112,
                  'Angus, Thongs and Perfect Snogging': 100,
                  'The House Bunny': 97,
                  'Superbad': 113,
                  'High School Musical 2': 104,
                  'Sydney White': 108,
                  'Step Up': 104,
                  'She\'s the Man': 105,
                  'High School Musical': 98,
                  'Aquamarine': 104,
                  'Accepted': 93,
                  'The Sisterhood of the Traveling Pants': 119,
                  'Ice Princess': 98,
                  'Mean Girls': 97,
                  'A Cinderella Story': 95,
                  'Raise Your Voice': 103,
                  'The Prince & Me': 111,
                  'Freaky Friday': 97,
                  'The Lizzie McGuire Movie': 94,
                  'What a Girl Wants': 105,
                  'The Princess Diaries': 115,
                  'Legally Blonde': 96,
                  'Bring It On': 98,
                  '10 Things I Hate About You': 97
                };
                
                const totalMinutes = runtimesInMinutes[title] || 100;
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                
                if (hours > 0) {
                  return `${hours}h ${minutes}m`;
                } else {
                  return `${minutes}m`;
                }
              })()}</span>
              </div>

            </div>
            
            {/* 영화 제목과 연도 - 하단 중앙 고정 */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '32px',
              right: '32px',
              textAlign: 'center'
            }}>

              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: '"Instrument Serif", serif',
                color: 'rgb(29, 29, 31)',
                margin: 0,
                letterSpacing: '-0.5px',
                textAlign: 'center'
              }}>
                {title}
              </h3>
              
              <div style={{
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: '"SUSE Mono", monospace',
                color: 'rgba(29, 29, 31, 0.6)',
                textAlign: 'center',
                marginTop: '8px',
                letterSpacing: '1px'
              }}>
                {year || 2024}
              </div>
            </div>
            
            {/* 명대사 텍스트 */}
            <style>{`
              @media (max-width: 600px) {
                .movie-quote {
                  font-size: clamp(28px, 8vw, 36px) !important;
                }
              }
            `}</style>
            <blockquote className="movie-quote" style={{
              fontSize: 'clamp(24px, 6vw, 32px)',
              fontWeight: '400',
              fontFamily: '"Instrument Serif", serif',
              letterSpacing: '-0.5px',
              lineHeight: '1.3',
              color: 'rgb(29, 29, 31)',
              textAlign: 'left',
              margin: '0px',
              position: 'relative',
              wordBreak: 'break-word',
              hyphens: 'auto',
              maxWidth: '100%',
              padding: '0 24px 32px 24px'
            }}>
              {getMovieQuote(title)}
            </blockquote>
            
          </div>
        </div>

        <div className="card-back">
          <div 
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              border: `1.5px solid black`,
              borderRadius: '12px',
              boxSizing: 'border-box',
              cursor: isMobile && isFlipped ? 'pointer' : 'default'
            }}
            onClick={handleCardBackClick}
          >
            <img 
              src={coverImg} 
              alt={`${title} movie poster`}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '10.5px'
              }}
            />
            
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                linear-gradient(to bottom, 
                  rgba(0, 0, 0, 0.1) 0%, 
                  rgba(0, 0, 0, 0.3) 50%, 
                  rgba(0, 0, 0, 0.7) 100%
                )
              `,
              zIndex: 1
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
              zIndex: 2
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: '"Instrument Serif", serif',
                color: 'white',
                margin: 0,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                letterSpacing: '-0.5px',
                textAlign: 'center',
                marginBottom: '8px'
              }}>
                {title}
              </h3>
              
              <div style={{
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: '"SUSE Mono", monospace',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                marginBottom: '16px',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
                letterSpacing: '1px'
              }}>
                {year || 2024}
              </div>

              {isMobile && isFlipped && (
                <div
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    const cardBackElement = e.currentTarget.closest('.card-back').querySelector('div');
                    cardBackElement.style.transition = 'all 0.15s ease';
                    cardBackElement.style.transform = 'scale(0.98)';
                    
                    setTimeout(() => {
                      navigate(`/movie/${id}`);
                    }, 100);
                  }}
                >
                    <button 
                      className="detail-button-mobile"
                      aria-label={`View details for ${title}`}
                      style={{
                        width: '100%',
                        padding: '10px 20px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        borderRadius: '8px',
                        fontFamily: '"SUSE Mono", monospace',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: 'rgb(29, 29, 31)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.5px',
                        transform: 'scale(1)',
                        WebkitTapHighlightColor: 'transparent',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                      onTouchStart={(e) => {
                        e.target.style.transform = 'scale(0.96)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                      }}
                      onTouchEnd={(e) => {
                        setTimeout(() => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                        }, 100);
                      }}
                    >
                      View Details
                    </button>
                </div>
              )}

              {!isMobile && (
                <div style={{
                  fontSize: '11px',
                  fontFamily: '"SUSE Mono", monospace',
                  color: 'rgba(255, 255, 255, 0.6)',
                  textAlign: 'center',
                  marginTop: '8px',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '0.5px'
                }}>
                  Click to view details
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? (
    cardContent
  ) : (
    <Link 
      to={`/movie/${id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
      }}
    >
      {cardContent}
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  year: PropTypes.number,
};

export default memo(Movie);