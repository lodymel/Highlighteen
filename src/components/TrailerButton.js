import React from 'react';
import PropTypes from 'prop-types';

const TrailerButton = ({ trailerKey, movieTitle }) => {
  const handleTrailerClick = () => {
    if (trailerKey) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
      window.open(youtubeUrl, '_blank');
    } else {
      const searchQuery = encodeURIComponent(`${movieTitle} official trailer`);
      const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
      window.open(youtubeUrl, '_blank');
    }
  };

  return (
    <button
      className="trailer-button"
      onClick={handleTrailerClick}
      style={{
        padding: '12px 24px',
        backgroundColor: '#ffb6c1',
        color: '#000000',
        border: '1px solid #000000',
        borderRadius: '8px',
        fontSize: '14px',
        fontFamily: '"SUSE Mono", monospace',
        fontWeight: '400',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.2s ease',
        letterSpacing: '0.5px'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#ff9aab';
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
  );
};

TrailerButton.propTypes = {
  trailerKey: PropTypes.string,
  movieTitle: PropTypes.string.isRequired
};

export default TrailerButton;
