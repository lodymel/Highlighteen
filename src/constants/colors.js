export const PASTEL_COLORS = [
  { 
    bg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 182, 193, 0.6) 100%)', 
    border: 'rgba(255, 182, 193, 0.5)', 
    accent: 'rgba(255, 182, 193, 0.8)' 
  },
  { 
    bg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 182, 0.6) 100%)', 
    border: 'rgba(255, 215, 0, 0.5)', 
    accent: 'rgba(255, 215, 0, 0.7)' 
  },
  { 
    bg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 182, 182, 0.6) 100%)', 
    border: 'rgba(255, 182, 182, 0.5)', 
    accent: 'rgba(255, 182, 182, 0.8)' 
  },
  { 
    bg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(182, 220, 255, 0.6) 100%)', 
    border: 'rgba(182, 220, 255, 0.5)', 
    accent: 'rgba(182, 220, 255, 0.8)' 
  },
  { 
    bg: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(220, 182, 255, 0.6) 100%)', 
    border: 'rgba(220, 182, 255, 0.5)', 
    accent: 'rgba(220, 182, 255, 0.8)' 
  }
];

export const generateCardColor = (title, id) => {
  const titleLength = title.length;
  const firstChar = title.charCodeAt(0) || 0;
  const lastChar = title.charCodeAt(title.length - 1) || 0;
  const middleChar = title.charCodeAt(Math.floor(title.length / 2)) || 0;
  
  const complexHash = (firstChar * 7) + (lastChar * 13) + (middleChar * 17) + (titleLength * 23) + (id * 31);
  const colorIndex = Math.abs(complexHash) % PASTEL_COLORS.length;
  
  return PASTEL_COLORS[colorIndex];
};
