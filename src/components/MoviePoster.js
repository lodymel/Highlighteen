import React from 'react';
import PropTypes from 'prop-types';
import { generateCardColor } from '../constants/colors';

const MoviePoster = ({ movie }) => {
  const cardColor = generateCardColor(movie.title, movie.id);

  return (
    <div style={{
      width: '100%',
      height: '600px',
      position: 'relative',
      overflow: 'hidden',
      border: '1.5px solid black',
      borderRadius: '12px',
      boxSizing: 'border-box'
    }}>
      <img 
        src={movie.large_cover_image} 
        alt={`${movie.title} poster`}
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
    </div>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoviePoster;
