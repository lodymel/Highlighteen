import React from 'react';
import PropTypes from 'prop-types';

const MovieInfo = ({ movie, financialData }) => {
  const formatCurrency = (amount, movieTitle, type) => {
    if (!amount || amount <= 0) return 'N/A';
    
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(0)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <span style={{
          fontSize: '14px',
          fontFamily: '"SUSE Mono", monospace',
          color: 'rgba(29, 29, 31, 0.7)',
          fontWeight: '500'
        }}>
          ⏱️ {formatRuntime(movie.runtime)}
        </span>
        
        <span style={{
          fontSize: '14px',
          fontFamily: '"SUSE Mono", monospace',
          color: 'rgba(29, 29, 31, 0.7)',
          fontWeight: '500'
        }}>
          ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
        </span>
        
        <span style={{
          fontSize: '14px',
          fontFamily: '"SUSE Mono", monospace',
          color: 'rgba(29, 29, 31, 0.7)',
          fontWeight: '500'
        }}>
          📅 {movie.release_date?.split('-')[0] || 'N/A'}
        </span>
      </div>

      {financialData && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '24px'
        }}>
          <div style={{
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 182, 193, 0.3)',
            borderRadius: '8px'
          }}>
            <h4 style={{
              fontSize: '12px',
              fontFamily: '"SUSE Mono", monospace',
              color: 'rgba(29, 29, 31, 0.6)',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Budget
            </h4>
            <p style={{
              fontSize: '18px',
              fontFamily: '"Instrument Serif", serif',
              fontWeight: '600',
              color: '#1d1d1f',
              margin: 0
            }}>
              {formatCurrency(financialData.budget, movie.title, financialData.type)}
            </p>
          </div>

          <div style={{
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 182, 193, 0.3)',
            borderRadius: '8px'
          }}>
            <h4 style={{
              fontSize: '12px',
              fontFamily: '"SUSE Mono", monospace',
              color: 'rgba(29, 29, 31, 0.6)',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Revenue
            </h4>
            <p style={{
              fontSize: '18px',
              fontFamily: '"Instrument Serif", serif',
              fontWeight: '600',
              color: '#1d1d1f',
              margin: 0
            }}>
              {formatCurrency(financialData.revenue, movie.title, financialData.type)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  financialData: PropTypes.object
};

export default MovieInfo;
