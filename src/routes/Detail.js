import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [teenMovieIds, setTeenMovieIds] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  
  const movieFinancialData = {
    'Mean Girls': { budget: 17000000, revenue: 130000000, type: 'theatrical' },
    '10 Things I Hate About You': { budget: 16000000, revenue: 53000000, type: 'theatrical' },
    'Legally Blonde': { budget: 18000000, revenue: 141000000, type: 'theatrical' },
    'High School Musical': { budget: 4200000, revenue: 252000000, type: 'theatrical' },
    'The Princess Diaries': { budget: 26000000, revenue: 165000000, type: 'theatrical' },
    'Bring It On': { budget: 11000000, revenue: 90400000, type: 'theatrical' },
    'She\'s the Man': { budget: 20000000, revenue: 57100000, type: 'theatrical' },
    'High School Musical 2': { budget: 7000000, revenue: 250000000, type: 'tv' }, // TV 영화 - 추정 총 수익
    'Superbad': { budget: 20000000, revenue: 170000000, type: 'theatrical' },
    'The House Bunny': { budget: 25000000, revenue: 70000000, type: 'theatrical' },
    'High School Musical 3: Senior Year': { budget: 11000000, revenue: 252000000, type: 'theatrical' },
    'Wild Child': { budget: 20000000, revenue: 35000000, type: 'theatrical' },
    '17 Again': { budget: 20000000, revenue: 139000000, type: 'theatrical' },
    'Easy A': { budget: 8000000, revenue: 75000000, type: 'theatrical' },
    'Flipped': { budget: 14000000, revenue: 17500000, type: 'theatrical' },
    'Monte Carlo': { budget: 20000000, revenue: 39000000, type: 'theatrical' },
    'The Perks of Being a Wallflower': { budget: 13000000, revenue: 33000000, type: 'theatrical' },
    'The Bling Ring': { budget: 15000000, revenue: 20000000, type: 'theatrical' },
    'The DUFF': { budget: 8500000, revenue: 43000000, type: 'theatrical' },
    'Nerve': { budget: 20000000, revenue: 85000000, type: 'theatrical' },
    'The Kissing Booth': { budget: 15000000, revenue: 80000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'To All the Boys I\'ve Loved Before': { budget: 18000000, revenue: 90000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'The Kissing Booth 2': { budget: 20000000, revenue: 85000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'To All the Boys: P.S. I Still Love You': { budget: 16000000, revenue: 75000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'To All the Boys: Always and Forever': { budget: 17000000, revenue: 70000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'Tall Girl': { budget: 12000000, revenue: 60000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'Fear Street: Prom Queen': { budget: 25000000, revenue: 50000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    'Young Hearts': { budget: 8000000, revenue: 40000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
    
    // 추가 하이틴 영화들
    'Clueless': { budget: 12000000, revenue: 56500000, type: 'theatrical' },
    'Ferris Bueller\'s Day Off': { budget: 6000000, revenue: 70100000, type: 'theatrical' },
    'The Breakfast Club': { budget: 1000000, revenue: 51200000, type: 'theatrical' },
    'Sixteen Candles': { budget: 6500000, revenue: 23000000, type: 'theatrical' },
    'Pretty in Pink': { budget: 9000000, revenue: 40400000, type: 'theatrical' },
    'Some Kind of Wonderful': { budget: 13000000, revenue: 18500000, type: 'theatrical' },
    'Say Anything': { budget: 8000000, revenue: 20700000, type: 'theatrical' },
    'Can\'t Buy Me Love': { budget: 1000000, revenue: 31500000, type: 'theatrical' },
    'Pretty Woman': { budget: 14000000, revenue: 463000000, type: 'theatrical' },
    'Dirty Dancing': { budget: 6000000, revenue: 214000000, type: 'theatrical' },
    'Footloose': { budget: 8200000, revenue: 80000000, type: 'theatrical' },
    'Flashdance': { budget: 7000000, revenue: 95000000, type: 'theatrical' },
    'Grease': { budget: 6000000, revenue: 396000000, type: 'theatrical' },
    'Saturday Night Fever': { budget: 3500000, revenue: 237000000, type: 'theatrical' },
    'A Cinderella Story': { budget: 19000000, revenue: 70000000, type: 'theatrical' },
    'What a Girl Wants': { budget: 25000000, revenue: 50000000, type: 'theatrical' },
    'The Lizzie McGuire Movie': { budget: 17000000, revenue: 55000000, type: 'theatrical' },
    'Freaky Friday': { budget: 20000000, revenue: 160000000, type: 'theatrical' },
    'The Prince & Me': { budget: 18000000, revenue: 37000000, type: 'theatrical' },
    'Raise Your Voice': { budget: 15000000, revenue: 12000000, type: 'theatrical' },
    'Ice Princess': { budget: 24000000, revenue: 27000000, type: 'theatrical' },
    'The Sisterhood of the Traveling Pants': { budget: 25000000, revenue: 42000000, type: 'theatrical' },
    'Accepted': { budget: 20000000, revenue: 36000000, type: 'theatrical' },
    'Aquamarine': { budget: 12000000, revenue: 23000000, type: 'theatrical' },
    'Step Up': { budget: 12000000, revenue: 114000000, type: 'theatrical' },
    'Sydney White': { budget: 15000000, revenue: 14000000, type: 'theatrical' },
    'Angus, Thongs and Perfect Snogging': { budget: 4000000, revenue: 10000000, type: 'theatrical' },
    'John Tucker Must Die': { budget: 18000000, revenue: 69000000, type: 'theatrical' },
    'She\'s All That': { budget: 10000000, revenue: 103000000, type: 'theatrical' },
    'Never Been Kissed': { budget: 25000000, revenue: 84000000, type: 'theatrical' },
    'Drive Me Crazy': { budget: 10000000, revenue: 17000000, type: 'theatrical' },
    'Varsity Blues': { budget: 16000000, revenue: 54000000, type: 'theatrical' },
    'American Pie': { budget: 11000000, revenue: 235000000, type: 'theatrical' },
    'American Pie 2': { budget: 30000000, revenue: 287000000, type: 'theatrical' },
    'American Wedding': { budget: 55000000, revenue: 231000000, type: 'theatrical' },
    'Not Another Teen Movie': { budget: 15000000, revenue: 66000000, type: 'theatrical' },
    'EuroTrip': { budget: 25000000, revenue: 20600000, type: 'theatrical' },
    'Road Trip': { budget: 16000000, revenue: 68000000, type: 'theatrical' },
    'Old School': { budget: 24000000, revenue: 87000000, type: 'theatrical' },
    'Wedding Crashers': { budget: 40000000, revenue: 285000000, type: 'theatrical' },
    'The Girl Next Door': { budget: 15000000, revenue: 30000000, type: 'theatrical' },
    'Orange County': { budget: 15000000, revenue: 41000000, type: 'theatrical' },
    
    // 추가 넷플릭스 오리지널 영화들
    '#realityhigh': { budget: 10000000, revenue: 45000000, type: 'streaming' }, // 넷플릭스 오리지널 - 추정 제작비
  };

  // 숫자 포맷팅 함수 (천 단위 콤마, 달러 표시)
  const formatCurrency = (amount, movieTitle, type) => {
    // 디버깅 로그
    console.log('formatCurrency 입력값:', amount, typeof amount, '영화:', movieTitle, '타입:', type);
    
    // 영화별 매핑 데이터가 있으면 우선 사용
    if (movieTitle && movieFinancialData[movieTitle]) {
      const mappedData = movieFinancialData[movieTitle];
      const mappedAmount = type === 'budget' ? mappedData.budget : mappedData.revenue;
      
      
      if (mappedAmount && mappedAmount > 0) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(mappedAmount);
      }
    }
    
    // null, undefined, 0, 빈 문자열 체크
    if (amount === null || amount === undefined || amount === 0 || amount === '') {
      return 'N/A';
    }
    
    // 숫자가 아닌 경우
    if (isNaN(amount)) {
      return 'N/A';
    }
    
    // 음수인 경우 (예산은 음수가 될 수 없음)
    if (amount < 0) {
      return 'N/A';
    }
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Home.js에서 저장된 영화 순서를 가져오는 함수
  const getTeenMovieIds = async () => {
    try {
      // localStorage에서 Home.js가 저장한 영화 순서를 가져옴
      const savedMovieIds = localStorage.getItem('teenMovieIds');
      
      if (savedMovieIds) {
        const movieIds = JSON.parse(savedMovieIds);
        setTeenMovieIds(movieIds);
        console.log('Home.js에서 저장된 영화 ID 순서:', movieIds);
        return;
      }
      
      // localStorage에 저장된 데이터가 없으면 기본 하이틴 영화 ID 사용
      const defaultTeenMovieIds = [
        11778,  // 10 Things I Hate About You
        11470,  // Bring It On
        7214,   // Legally Blonde
        9880,   // The Princess Diaries
        10681,  // Mean Girls
        11470,  // What a Girl Wants
        11470,  // The Lizzie McGuire Movie
        11470,  // Freaky Friday
        11470,  // The Prince & Me
        11470,  // Raise Your Voice
        11470,  // A Cinderella Story
        11470,  // Ice Princess
        11470,  // The Sisterhood of the Traveling Pants
        11470,  // Accepted
        11470,  // Aquamarine
        11470,  // High School Musical
        11470,  // Step Up
        11470,  // She's the Man
        11470,  // Sydney White
        11470,  // High School Musical 2
        11470,  // Superbad
        11470,  // The House Bunny
        11470,  // Angus, Thongs and Perfect Snogging
        11470,  // High School Musical 3
        11470,  // Wild Child
        11470,  // 17 Again
      ];
      
      // 중복 제거
      const uniqueIds = [...new Set(defaultTeenMovieIds)];
      setTeenMovieIds(uniqueIds);
      console.log('기본 하이틴 영화 ID 순서:', uniqueIds);
    } catch (error) {
      console.error('하이틴 영화 ID 가져오기 실패:', error);
    }
  };
  
  // 트레일러 정보를 가져오는 함수
  const getTrailer = async (movieId) => {
    try {
      const TMDB_API_KEY = '8265bd1679663a7ea12ac168da84d2e8';
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
      );
      
      if (response.ok) {
        const data = await response.json();
        // YouTube 트레일러 찾기
        const trailer = data.results?.find(video => 
          video.type === 'Trailer' && video.site === 'YouTube'
        );
        
        if (trailer) {
          setTrailerKey(trailer.key);
          return trailer.key;
        }
      }
      return null;
    } catch (error) {
      console.error('트레일러 정보 가져오기 실패:', error);
      return null;
    }
  };

  const getMovie = async (movieId = id) => {
    try {
      setLoading(true);
      setError(false);
      setTrailerKey(null); // 트레일러 초기화
      
      // TMDB API 사용
      const TMDB_API_KEY = '8265bd1679663a7ea12ac168da84d2e8';
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const tmdbMovie = await response.json();

      // 영화가 존재하지 않는 경우
      if (tmdbMovie.success === false || !tmdbMovie.title) {
        throw new Error('Movie not found');
      }

      // 디버깅: budget과 revenue 값 확인
      console.log('TMDB API 응답 데이터:', {
        title: tmdbMovie.title,
        budget: tmdbMovie.budget,
        revenue: tmdbMovie.revenue,
        budgetType: typeof tmdbMovie.budget,
        revenueType: typeof tmdbMovie.revenue,
        fullResponse: tmdbMovie
      });
      
      // 매핑된 데이터 확인
      const mappedData = movieFinancialData[tmdbMovie.title];
      console.log('매핑된 데이터:', {
        title: tmdbMovie.title,
        mappedBudget: mappedData?.budget,
        mappedRevenue: mappedData?.revenue,
        mappedType: mappedData?.type,
        hasMapping: !!mappedData
      });

      // TMDB 데이터를 기존 형식으로 변환
      const formattedMovie = {
        title: tmdbMovie.title,
        year: new Date(tmdbMovie.release_date).getFullYear(),
        rating: tmdbMovie.vote_average,
        runtime: tmdbMovie.runtime,
        genres: tmdbMovie.genres?.map(g => g.name) || [],
        language: tmdbMovie.original_language?.toUpperCase() || 'EN',
        country: (() => {
          // 특정 영화들의 국가 정보 수정 (TMDB 데이터 오류 보정)
          const movieCountryMap = {
            // Nerve는 미국 영화
            'Nerve': 'United States',
            // 다른 잘못된 국가 정보들도 여기에 추가 가능
          };
          
          if (movieCountryMap[tmdbMovie.title]) {
            return movieCountryMap[tmdbMovie.title];
          }
          
          // 기본 로직: 미국을 우선으로 하되, 실제 제작국이 있으면 그것을 사용
          const countries = tmdbMovie.production_countries || [];
          const usCountry = countries.find(country => 
            country.name === 'United States' || 
            country.name === 'USA' ||
            country.iso_3166_1 === 'US'
          );
          
          return usCountry?.name || countries[0]?.name || 'United States';
        })(),
        description_full: tmdbMovie.overview,
        budget: tmdbMovie.budget,
        revenue: tmdbMovie.revenue,
        large_cover_image: tmdbMovie.poster_path ?
          `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}` :
          'https://via.placeholder.com/500x750?text=No+Image',
        medium_cover_image: tmdbMovie.poster_path ?
          `https://image.tmdb.org/t/p/w300${tmdbMovie.poster_path}` :
          'https://via.placeholder.com/300x450?text=No+Image'
      };

      setMovie(formattedMovie);
      
      // 트레일러 정보도 함께 가져오기
      await getTrailer(movieId);
      
      setLoading(false);
    } catch (error) {
      console.error('영화 상세 정보 가져오기 실패:', error);
      setError(true);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    // 페이지 진입 시 항상 상단으로 스크롤
    window.scrollTo(0, 0);
    
    // 먼저 하이틴 영화 ID들을 가져온 후 영화 정보를 가져옴
    getTeenMovieIds().then(() => {
      getMovie();
    });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
      <style>{`
        @media (max-width: 1400px) {
          .detail-grid {
            display: grid !important;
            grid-template-columns: 400px 1fr !important;
            gap: 32px !important;
            align-items: start !important;
            max-width: 1400px !important;
            margin: 0px auto !important;
            padding: 0px !important;
          }
        }
        @media (max-width: 1080px) {
          .detail-grid {
            display: grid !important;
            grid-template-columns: 400px 1fr !important;
            gap: 32px !important;
            align-items: start !important;
            max-width: 1400px !important;
            margin: 0px auto !important;
            padding: 0px !important;
          }
          .detail-grid > div:last-child {
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }
          .detail-bottom-nav {
            position: static !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            margin-top: 40px !important;
            justify-content: space-between !important;
          }
          .back-to-home-btn {
            display: none !important;
          }
          .trailer-button {
            padding: 24px 24px !important;
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
          }
          .summary-trailer-container {
            margin-bottom: 0px !important;
          }
        }
        @media (max-width: 768px) {
          .detail-container {
            padding: 140px 20px 60px 20px !important;
            margin-top: -145px !important;
          }
          .detail-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          div.detail-container {
            margin-top: -40px !important;
            padding: 140px 24px 0px 24px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          
          .trailer-button {
            width: 100% !important;
            font-size: 13px !important;
            padding: 10px 20px !important;
          }
        }
        @media (max-width: 480px) {
          .detail-container {
            padding: 180px 20px 60px 20px !important;
          }
          .detail-grid {
            gap: 30px !important;
          }
        }
        @media (max-width: 1080px) {
          .detail-container {
            padding: 260px 32px 0px 32px !important;
          }
        }
      `}</style>
      <div className="detail-container" style={{ 
        padding: '220px 32px 60px 32px', 
        maxWidth: '1400px', 
        margin: '0 auto',
        backgroundColor: 'transparent',
        minHeight: '100vh'
      }}>
      {loading ? (
                <div style={{ 
                  textAlign: 'left', 
                  fontSize: '14px', 
                  color: '#666',
                  marginTop: '100px',
                  fontWeight: '400',
                  fontFamily: '"SUSE Mono", monospace',
                  letterSpacing: '1px'
                }}>
                  Loading...
                </div>
      ) : error ? (
        <div style={{
          textAlign: 'center',
          padding: '100px 20px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '400',
            fontFamily: '"Instrument Serif", serif',
            color: '#1d1d1f',
            marginBottom: '20px'
          }}>
            Movie Not Found
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#666',
            fontFamily: '"SUSE Mono", monospace',
            marginBottom: '40px'
          }}>
            This movie doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: '"SUSE Mono", monospace',
              color: '#666',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f8f9fa';
              e.target.style.borderColor = '#1d1d1f';
              e.target.style.color = '#1d1d1f';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.color = '#666';
            }}
          >
            Back to Home
          </button>
        </div>
      ) : (
          <div className="detail-grid" style={{
            display: 'grid',
            gridTemplateColumns: '400px 1fr',
            gap: '70px',
            alignItems: 'start',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0'
          }}>
            <div style={{ position: 'relative' }}>
              {/* 포스터 컨테이너 - 홈페이지 카드와 동일한 스타일 */}
              <div style={{
                width: '100%',
                height: '600px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 182, 193, 0.6) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid black',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0px 8px 32px rgba(255, 182, 193, 0.15), 0px 0px 20px rgba(255, 240, 245, 0.3)'
              }}>
                {/* 포스터 이미지 */}
                <img
                  src={movie.large_cover_image || movie.medium_cover_image}
                  alt={movie.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0px'
                  }}
                />
                
                {/* 깔끔한 테두리 - 화이트 배경 제거 */}
                <div style={{
                  position: 'absolute',
                  top: '4px',
                  left: '4px',
                  right: '4px',
                  bottom: '4px',
                  border: '2px solid rgba(255, 182, 193, 0.5)',
                  borderRadius: '10px',
                  background: 'transparent',
                  pointerEvents: 'none'
                }} />
                
                {/* 내부 점선 테두리 */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '10px',
                  bottom: '10px',
                  border: '1px dotted rgba(255, 182, 193, 0.8)',
                  borderRadius: '8px',
                  pointerEvents: 'none'
                }} />
                
                {/* 모서리 장식들 - 점선 테두리 안쪽에 배치 */}
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  fontSize: '16px',
                  color: 'rgba(255, 182, 193, 0.8)',
                  lineHeight: '1'
                }}>✧</div>
                
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  fontSize: '16px',
                  color: 'rgba(255, 182, 193, 0.8)',
                  lineHeight: '1'
                }}>☽</div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '18px',
                  fontSize: '12px',
                  color: 'rgba(255, 182, 193, 0.8)',
                  lineHeight: '1'
                }}>♡</div>
                
                <div style={{
                  position: 'absolute',
                  bottom: '18px',
                  right: '18px',
                  fontSize: '16px',
                  color: 'rgba(255, 182, 193, 0.8)',
                  lineHeight: '1'
                }}>✩</div>
              </div>
            </div>

            <div>
                    <h1 style={{ 
                      fontSize: '42px', 
                      fontWeight: '400',
                      fontFamily: '"Instrument Serif", serif',
                      marginBottom: '20px',
                      color: 'rgb(29, 29, 31)',
                      lineHeight: '1.2',
                      letterSpacing: '-0.5px',
                      textDecoration: 'none',
                      transition: '0.2s',
                      opacity: 1
                    }}>
                      {movie.title}
                    </h1>
            
            <div style={{ 
              marginBottom: '32px',
              paddingBottom: '32px',
              borderBottom: '1px solid #e0e0e0'
            }}>
                      {/* 러닝타임 표시 */}
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '10px',
                        fontSize: '14px',
                        fontWeight: '400',
                        fontFamily: '"SUSE Mono", monospace',
                        color: 'rgba(29, 29, 31, 0.7)',
                        letterSpacing: '0.5px'
                      }}>
                        <span>⏱️</span>
                        <span>{(() => {
                          const totalMinutes = movie.runtime || 100;
                          const hours = Math.floor(totalMinutes / 60);
                          const minutes = totalMinutes % 60;
                          
                          if (hours > 0) {
                            return `${hours}h ${minutes}m`;
                          } else {
                            return `${minutes}m`;
                          }
                        })()}</span>
                      </div>
              
                      <div style={{ 
                        display: 'flex', 
                        gap: '30px', 
                        fontSize: '12px', 
                        color: '#666',
                        marginTop: '20px',
                        fontFamily: '"SUSE Mono", monospace',
                        letterSpacing: '1px'
                      }}>
                <span>{movie.year}</span>
              </div>
              
              {/* 예산과 수익 정보 */}
              <div style={{
                display: 'flex',
                gap: '24px',
                marginTop: '16px',
                flexWrap: 'wrap'
              }}>
                {/* 예산 */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#999',
                    fontFamily: '"SUSE Mono", monospace',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Production Budget
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#333',
                    fontFamily: '"SUSE Mono", monospace',
                    fontWeight: '500'
                  }}>
                    {formatCurrency(movie.budget, movie.title, 'budget')}
                  </div>
                </div>
                
                {/* 수익 */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#999',
                    fontFamily: '"SUSE Mono", monospace',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    Worldwide Revenue
                    <div 
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        backgroundColor: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        position: 'relative'
                      }}
                      onMouseEnter={(e) => {
                        const tooltip = document.createElement('div');
                        tooltip.id = 'revenue-tooltip';
                        tooltip.style.cssText = `
                          position: absolute;
                          bottom: 100%;
                          left: 50%;
                          transform: translateX(-50%);
                          margin-bottom: 12px;
                          background: rgba(255, 255, 255, 0.15);
                          backdrop-filter: blur(20px);
                          -webkit-backdrop-filter: blur(20px);
                          color: #1d1d1f;
                          padding: 10px 16px;
                          border-radius: 12px;
                          font-size: 11px;
                          font-family: "SUSE Mono", monospace;
                          z-index: 1000;
                          pointer-events: none;
                          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
                          border: 1px solid rgba(255, 255, 255, 0.3);
                          max-width: 280px;
                          white-space: nowrap;
                          text-align: center;
                          text-transform: none;
                          font-weight: 500;
                        `;
                        
                        
                        if (window.innerWidth <= 768) {
                          tooltip.style.cssText += `
                            max-width: 240px;
                            font-size: 10px;
                            padding: 8px 12px;
                            white-space: normal;
                          `;
                        }
                        
                        if (window.innerWidth <= 480) {
                          tooltip.style.cssText += `
                            max-width: 200px;
                            font-size: 9px;
                            padding: 6px 10px;
                            white-space: normal;
                          `;
                        }
                        
                        tooltip.textContent = 'Total revenue from all sources';
                        e.target.appendChild(tooltip);
                      }}
                      onMouseLeave={(e) => {
                        const tooltip = document.getElementById('revenue-tooltip');
                        if (tooltip) tooltip.remove();
                      }}
                    >
                      ?
                    </div>
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#333',
                    fontFamily: '"SUSE Mono", monospace',
                    fontWeight: '500'
                  }}>
                    {formatCurrency(movie.revenue, movie.title, 'revenue')}
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '12px',
                marginBottom: '0px'
              }}>
                {movie.genres?.map((genre) => (
                  <span 
                    key={genre}
                            style={{
                              color: '#666',
                              fontSize: '11px',
                              fontWeight: '400',
                              fontFamily: '"SUSE Mono", monospace',
                              textTransform: 'uppercase',
                              letterSpacing: '2px',
                              padding: '8px 14px',
                              border: '1px solid #e0e0e0',
                              backgroundColor: '#fafafa',
                              borderRadius: '20px'
                            }}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="summary-trailer-container" style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#333',
                fontWeight: '400',
                fontFamily: '"SUSE Mono", monospace',
                letterSpacing: '0.3px',
                marginBottom: '32px'
              }}>
                {movie.description_full || movie.description_medium || 'No description available.'}
              </p>
              
              {/* Trailer 링크 버튼 */}
              {trailerKey ? (
                <button
                  className="trailer-button"
                  onClick={() => {
                    // 실제 트레일러가 있으면 YouTube에서 바로 재생
                    const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
                    window.open(youtubeUrl, '_blank');
                  }}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#ffb6c1',
                  color: '#000000',
                  border: '1px solid #000000',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: '"SUSE Mono", monospace',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ffa0b4';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffb6c1';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Trailer
              </button>
              ) : (
                <button
                  className="trailer-button"
                  onClick={() => {
                    // 트레일러가 없으면 YouTube 검색 결과로 이동
                    const searchQuery = encodeURIComponent(`${movie.title} official trailer`);
                    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
                    window.open(youtubeUrl, '_blank');
                  }}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#ffb6c1',
                    color: '#000000',
                    border: '1px solid #000000',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: '"SUSE Mono", monospace',
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#ffa0b4';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#ffb6c1';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Search Trailer
                </button>
              )}
            </div>


          </div>
        </div>
      )}
      
      {!loading && <Footer />}
      </div>
      
      {/* 고정된 네비게이션 버튼들 - 화면 하단 중앙에 항상 같은 위치 */}
      <div className="detail-bottom-nav" style={{
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        padding: '16px 24px',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999
      }}>
        <style>{`
          @media (max-width: 1080px) {
            .detail-bottom-nav {
              bottom: 20px;
            }
          }
          @media (max-width: 768px) {
            .detail-bottom-nav {
              bottom: 15px;
              padding: 12px 16px;
              gap: 12px;
            }
          }
        `}</style>
        <style>{`
          .nav-button {
            color: #1d1d1f !important;
            transform: translateY(0px) !important;
            transition: all 0.3s ease !important;
          }
          .nav-button svg {
            stroke: #1d1d1f !important;
            color: #1d1d1f !important;
            transition: all 0.3s ease !important;
          }
          .nav-button:hover {
            color: #ffb6c1 !important;
            transform: translateY(-2px) !important;
            transition: all 0.3s ease !important;
          }
          .nav-button:hover svg {
            stroke: #ffb6c1 !important;
            color: #ffb6c1 !important;
            transition: all 0.3s ease !important;
          }
          .nav-button:hover::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 4px;
            background: #ffb6c1;
            border: 1px solid #000000;
            border-radius: 2px;
            transition: all 0.3s ease !important;
          }
          
          /* 버튼 포커스 상태 완전히 제거 */
          .nav-button:focus {
            outline: none !important;
            box-shadow: none !important;
            background: transparent !important;
          }
          
          .nav-button:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }
          
          .nav-button:active {
            outline: none !important;
            box-shadow: none !important;
          }
          
          /* 태블릿/모바일에서 터치 하이라이트 제거 */
          @media (max-width: 1024px) {
            .nav-button {
              -webkit-tap-highlight-color: transparent !important;
              -webkit-touch-callout: none !important;
              -webkit-user-select: none !important;
              -khtml-user-select: none !important;
              -moz-user-select: none !important;
              -ms-user-select: none !important;
              user-select: none !important;
            }
            
            .nav-button:focus,
            .nav-button:active,
            .nav-button:hover {
              outline: none !important;
              box-shadow: none !important;
              background: transparent !important;
            }
          }
        `}</style>
        <button
          className="nav-button"
          onClick={(e) => {
            if (teenMovieIds.length === 0) return;
            
            // 버튼 포커스 완전히 제거 (태블릿에서 활성화 상태 방지)
            e.target.blur();
            setTimeout(() => {
              e.target.blur();
              document.activeElement.blur();
            }, 0);
            
            const currentIndex = teenMovieIds.indexOf(parseInt(id));
            if (currentIndex > 0) {
              const prevId = teenMovieIds[currentIndex - 1];
              navigate(`/movie/${prevId}`);
            } else {
              const lastId = teenMovieIds[teenMovieIds.length - 1];
              navigate(`/movie/${lastId}`);
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 0px',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: '"SUSE Mono", monospace',
            color: '#1d1d1f',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Previous
        </button>

        <button
          className="back-to-home-btn"
          onClick={() => navigate('/')}
          style={{
            padding: '12px 20px',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: '"SUSE Mono", monospace',
            color: '#1d1d1f',
            cursor: 'pointer',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.color = '#ffb6c1';
            e.target.style.transform = 'translateY(-2px)';
            // 언더라인 추가
            const underline = document.createElement('div');
            underline.className = 'nav-underline';
            underline.style.cssText = `
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 4px;
              background: #ffb6c1;
              border: 1px solid #000000;
              border-radius: 2px;
            `;
            e.target.appendChild(underline);
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.color = '#1d1d1f';
            e.target.style.transform = 'translateY(0px)';
            // 언더라인 제거
            const underline = e.target.querySelector('.nav-underline');
            if (underline) underline.remove();
          }}
        >
          Back to Home
        </button>

        <button
          className="nav-button"
          onClick={(e) => {
            if (teenMovieIds.length === 0) return;
            
            // 버튼 포커스 완전히 제거 (태블릿에서 활성화 상태 방지)
            e.target.blur();
            setTimeout(() => {
              e.target.blur();
              document.activeElement.blur();
            }, 0);
            
            const currentIndex = teenMovieIds.indexOf(parseInt(id));
            if (currentIndex < teenMovieIds.length - 1) {
              const nextId = teenMovieIds[currentIndex + 1];
              navigate(`/movie/${nextId}`);
            } else {
              const firstId = teenMovieIds[0];
              navigate(`/movie/${firstId}`);
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 0px',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: '"SUSE Mono", monospace',
            color: '#1d1d1f',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Detail;
