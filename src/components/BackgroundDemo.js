import React, { useState } from 'react';
import Background from './Background';

const BackgroundDemo = () => {
  const [showHearts, setShowHearts] = useState(true);
  const [blurIntensity, setBlurIntensity] = useState(80);
  const [grainIntensity, setGrainIntensity] = useState(0.06);
  
  const [colors, setColors] = useState({
    c1: '#ff7ac3',  // 핑크
    c2: '#ffd166',  // 옐로우  
    c3: '#7bdff2'   // 틸
  });

  const presetColors = [
    { name: '기본 (핑크/옐로우/틸)', colors: { c1: '#ff7ac3', c2: '#ffd166', c3: '#7bdff2' } },
    { name: '따뜻한 톤', colors: { c1: '#ff9a9e', c2: '#fecfef', c3: '#fecfef' } },
    { name: '시원한 톤', colors: { c1: '#a8edea', c2: '#fed6e3', c3: '#d299c2' } },
    { name: '보라/핑크', colors: { c1: '#667eea', c2: '#764ba2', c3: '#f093fb' } },
    { name: '오렌지/핑크', colors: { c1: '#fa709a', c2: '#fee140', c3: '#ff9a9e' } }
  ];

  return (
    <Background 
      showHearts={showHearts}
      colors={colors}
      grainIntensity={grainIntensity}
      blurIntensity={blurIntensity}
    >
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          color: '#333', 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>
          🌈 Background 컴포넌트 데모
        </h1>
        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.9)', 
          padding: '30px', 
          borderRadius: '20px',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>🎨 색상 프리셋</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            {presetColors.map((preset, index) => (
              <button
                key={index}
                onClick={() => setColors(preset.colors)}
                style={{
                  padding: '10px 15px',
                  border: 'none',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, ' + preset.colors.c1 + ', ' + preset.colors.c2 + ', ' + preset.colors.c3 + ')',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                {preset.name}
              </button>
            ))}
          </div>

          <h2 style={{ color: '#333', marginBottom: '20px' }}>⚙️ 설정</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>
              <input
                type="checkbox"
                checked={showHearts}
                onChange={(e) => setShowHearts(e.target.checked)}
                style={{ marginRight: '10px' }}
              />
              💕 하트 애니메이션 표시
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>
              블러 강도: {blurIntensity}px
            </label>
            <input
              type="range"
              min="20"
              max="120"
              value={blurIntensity}
              onChange={(e) => setBlurIntensity(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px', color: '#555' }}>
              그레인 강도: {(grainIntensity * 100).toFixed(1)}%
            </label>
            <input
              type="range"
              min="0"
              max="0.2"
              step="0.01"
              value={grainIntensity}
              onChange={(e) => setGrainIntensity(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <div style={{ 
          background: 'rgba(255, 255, 255, 0.8)', 
          padding: '20px', 
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>💡 사용법</h3>
          <pre style={{ 
            background: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '10px', 
            overflow: 'auto',
            fontSize: '14px',
            color: '#333'
          }}>
{`<Background 
  showHearts={true}
  colors={{
    c1: '#ff7ac3',  // 첫 번째 색상
    c2: '#ffd166',  // 두 번째 색상  
    c3: '#7bdff2'   // 세 번째 색상
  }}
  grainIntensity={0.06}
  blurIntensity={80}
>
  {/* 여기에 컨텐츠 */}
</Background>`}
          </pre>
        </div>
      </div>
    </Background>
  );
};

export default BackgroundDemo;
