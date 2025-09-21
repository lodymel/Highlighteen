import { useState, useEffect} from "react";
import Movie from "../components/Movie";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
import { API_CONFIG, IMAGE_SIZES } from "../config/api";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const { TMDB_API_KEY, TMDB_BASE_URL } = API_CONFIG;
      
      const confirmedHighSchoolMovies = [
        'Fear Street: Prom Queen',
        'Young Hearts',
        'To All the Boys: Always and Forever',
        'The Kissing Booth 2',
        'To All the Boys: P.S. I Still Love You',
        'Tall Girl',
        'To All the Boys I\'ve Loved Before',
        'The Kissing Booth',
        'Reality High',
        'Nerve',
        'The DUFF',
        'The Bling Ring',
        'The Perks of Being a Wallflower',
        'Monte Carlo',
        'Flipped',
        'Easy A',
        '17 Again',
        'Wild Child',
        'High School Musical 3',
        'Angus, Thongs and Perfect Snogging',
        'The House Bunny',
        'Superbad',
        'High School Musical 2',
        'Sydney White',
        'Step Up',
        'She\'s the Man',
        'High School Musical',
        'Aquamarine',
        'Accepted',
        'The Sisterhood of the Traveling Pants',
        'Ice Princess',
        'Mean Girls',
        'A Cinderella Story',
        'Raise Your Voice',
        'The Prince & Me',
        'Freaky Friday',
        'The Lizzie McGuire Movie',
        'What a Girl Wants',
        'The Princess Diaries',
        'Legally Blonde',
        'Bring It On',
        '10 Things I Hate About You'
      ];
      
      let confirmedMovies = [];
      
      for (const movieTitle of confirmedHighSchoolMovies) {
        try {
          const response = await fetch(
            `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}&include_adult=false`
          );
          const data = await response.json();
          
          if (data.results && data.results.length > 0) {
            const exactMatch = data.results.find(movie => {
              const titleMatch = movie.title.toLowerCase() === movieTitle.toLowerCase() ||
                               movie.title.toLowerCase().includes(movieTitle.toLowerCase().split(':')[0]);
              
              const animationKeywords = ['wallace', 'gromit', 'animated', 'animation', 'cartoon', 'clay'];
              const isAnimation = animationKeywords.some(keyword => 
                movie.title.toLowerCase().includes(keyword)
              ) || (movie.genre_ids && movie.genre_ids.includes(16));
              
              return titleMatch && !isAnimation;
            });
            
            if (exactMatch) {
              confirmedMovies.push(exactMatch);
            } else {
              const firstResult = data.results[0];
              if (firstResult) {
                const animationKeywords = ['wallace', 'gromit', 'animated', 'animation', 'cartoon', 'clay'];
                const isAnimation = animationKeywords.some(keyword => 
                  firstResult.title.toLowerCase().includes(keyword)
                ) || (firstResult.genre_ids && firstResult.genre_ids.includes(16));
                
                if (!isAnimation) {
                  confirmedMovies.push(firstResult);
                }
              }
            }
          }
        } catch (error) {
          console.log(`${movieTitle} search failed:`, error);
        }
      }
      
      const uniqueMovies = confirmedMovies.filter((movie, index, self) => {
        const isUnique = index === self.findIndex(m => m.id === movie.id);
        const hasValidDate = movie.release_date;
        const hasGoodRating = movie.vote_average >= 3.0;
        
        const animationKeywords = [
          'wallace', 'gromit', 'animated', 'cartoon', 'clay'
        ];
        const titleAndOverview = `${movie.title} ${movie.overview || ''}`.toLowerCase();
        const isNotAnimation = !animationKeywords.some(keyword => 
          titleAndOverview.includes(keyword)
        ) && (!movie.genre_ids || !movie.genre_ids.includes(16));
        
        const isNotCollection = !movie.title.toLowerCase().includes('collection') &&
                               !movie.title.toLowerCase().includes('series');
        
        return isUnique && hasValidDate && hasGoodRating && isNotAnimation && isNotCollection;
      });
      
      const sortedByYear = uniqueMovies
        .sort((a, b) => {
          const yearA = new Date(a.release_date).getFullYear();
          const yearB = new Date(b.release_date).getFullYear();
          if (yearA !== yearB) {
            return yearB - yearA;
          }
          return b.vote_average - a.vote_average;
        })
        .slice(0, 42);
      
      const formattedMovies = sortedByYear.map(movie => ({
        id: movie.id,
        title: movie.title,
        year: new Date(movie.release_date).getFullYear(),
        rating: movie.vote_average,
        summary: movie.overview,
        medium_cover_image: movie.poster_path ? 
          `${API_CONFIG.IMAGE_BASE_URL}/${IMAGE_SIZES.SMALL}${movie.poster_path}` : 
          'https://via.placeholder.com/300x450/ffb6c1/1d1d1f?text=No+Poster',
        large_cover_image: movie.poster_path ? 
          `${API_CONFIG.IMAGE_BASE_URL}/${IMAGE_SIZES.MEDIUM}${movie.poster_path}` : 
          'https://via.placeholder.com/500x750/ffb6c1/1d1d1f?text=No+Poster',
        genres: ['Romance', 'Comedy', 'Drama']
      }));
      
      
      setMovies(formattedMovies);
      
      const movieIds = formattedMovies.map(movie => movie.id);
      localStorage.setItem('teenMovieIds', JSON.stringify(movieIds));
      
      setLoading(false);
      
    } catch (error) {
      console.error('Movie data load failed:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="home-container" style={{ 
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '60px 40px 60px 40px'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '72px'
      }}>
        <div className="main-title-container" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '120px 0px 20px 0px',
          textAlign: 'center',
          marginBottom: '60px',
          position: 'relative'
        }}>
          <style>{`
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
            }
            @media (max-width: 480px) {
              .main-title {
                font-size: clamp(2rem, 6vw, 3rem) !important;
                padding: 10px 20px !important;
                margin-bottom: 15px !important;
              }
            }
            @media (max-width: 1400px) {
              .movie-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
              .main-title {
                font-size: clamp(2.8rem, 10vw, 6rem) !important;
              }
            }
            @media (min-width: 1081px) {
              .home-container {
                padding: 100px 40px 60px 40px !important;
              }
            }
            @media (max-width: 1080px) {
              .movie-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
              .main-title {
                font-size: clamp(2.5rem, 9vw, 5rem) !important;
                white-space: normal !important;
                overflow: visible !important;
                text-overflow: unset !important;
                line-height: 1.2 !important;
              }
              .main-title .title-float {
                display: inline-block !important;
                margin-bottom: 0.2em !important;
              }
              .home-container {
                padding: 160px 20px 60px 20px !important;
              }
            }
            @media (max-width: 768px) {
              .movie-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                padding: 0 0 !important;
              }
              .main-title-container {
                padding-top: 180px !important;
              }
              .home-container {
                padding: 60px 20px 60px 20px !important;
              }
            }
            @media (max-width: 1080px) and (min-width: 768px) {
              .main-title-container {
                padding-top: 60px !important;
                padding-bottom: 0 !important;
              }
              .main-title {
                font-size: clamp(3.5rem, 10vw, 5.5rem) !important;
                margin-bottom: -75px !important;
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
            @media (max-width: 600px) {
              .movie-grid {
                grid-template-columns: 1fr !important;
                gap: 32px !important;
                padding: 0 0px !important;
              }
              .main-title {
                font-size: clamp(5.6rem, 18vw, 8.4rem) !important;
                margin-bottom: -70px !important;
              }
              .main-title-container {
                padding-top: 100px !important;
              }
              .home-container {
                padding: 100px 20px 60px 20px !important;
              }
            }
            @media (max-width: 480px) {
              .home-container {
                padding: 60px 20px 60px 20px !important;
              }
              .main-title-container {
                margin-bottom: -35px !important;
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
            @keyframes underlineExpand {
              0% {
                width: 0%;
                left: 50%;
              }
              100% {
                width: 100%;
                left: 0%;
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
            .title-float:nth-child(3):hover::after {
              bottom: -4px;
            }
            .title-float:hover {
              transform: translateY(-2px);
            }
          `}</style>
          <h1 className="main-title" style={{
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            fontWeight: '300',
            fontFamily: '"Instrument Serif", serif',
            color: '#ffb6c1',
            letterSpacing: '-0.03em',
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
            }}>High-rated</span>
            <span className="title-float" style={{
              WebkitTextStroke: '1px #000000',
              textStroke: '1px #000000',
              marginLeft: '0.1em'
            }}> Teen Movies</span>
            <span className="title-float" style={{
              fontFamily: '"Alex Brush", cursive',
              fontSize: '0.8em',
              fontWeight: '400',
              position: 'relative',
              top: '-0.05em',
              marginLeft: '0.2em',
              WebkitTextStroke: '1px #000000',
              textStroke: '1px #000000'
            }}>at a Glance</span>
          </h1>
        </div>
      </div>
      
      <ScrollIndicator />
      
      {loading ? (
        <div style={{ 
          textAlign: 'center', 
          fontSize: '16px', 
          color: '#666',
          marginTop: '100px',
          fontWeight: '400'
        }}>
          Loading...
        </div>
      ) : (
        <div className="movie-grid" style={{ 
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0',
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)',
          rowGap: '32px',
          columnGap: '32px',
          justifyItems: 'center',
          alignItems: 'start'
        }}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                width: '100%',
                maxWidth: '340px'
              }}
            >
              <Movie
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
              />
            </div>
          ))}
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default Home;