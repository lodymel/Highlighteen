import React from 'react';
import './Background.css';

const Background = ({ 
  children, 
  showHearts = false, 
  colors = {
    c1: '#ff7ac3',  // 핑크
    c2: '#ffd166',  // 옐로우  
    c3: '#7bdff2'   // 틸
  },
  grainIntensity = 0.06,
  blurIntensity = 80
}) => {
  return (
    <div 
      className="yl-bg"
      style={{
        '--c1': colors.c1,
        '--c2': colors.c2,
        '--c3': colors.c3,
        '--grain': `rgba(0,0,0,${grainIntensity})`,
        '--blur': `${blurIntensity}px`
      }}
    >
      {/* 그레인 레이어 */}
      <div className="grain-layer"></div>
      
      {/* 하트 애니메이션 (옵션) */}
      {showHearts && <div className="hearts"></div>}
      
      {/* 컨텐츠 */}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Background;
