# Highlighteen

**High-rated Teen Movies at a Glance** - A curated collection of 42 iconic coming-of-age films with interactive card design.

## ✨ Features

- **Interactive Movie Cards**: Flip cards with memorable quotes on front, movie posters on back
- **Smart Filtering**: TMDB API integration with custom filtering to exclude irrelevant movies and ensure quality content
- **Responsive Design**: Seamless experience across desktop (hover) and mobile (touch) devices
- **Dynamic Theming**: Algorithmic color generation for unique card styling

## 🛠 Tech Stack

- **React** with Hooks (useState, useEffect, memo)
- **React Router** for navigation
- **TMDB API** for movie data
- **CSS3** animations and 3D transforms
- **Responsive** design with mobile-first approach

## 🎯 Key Implementation

### API Integration & Filtering
```javascript
// Curated list of 42 high-quality teen movies
const confirmedHighSchoolMovies = [
  'Mean Girls', 'To All the Boys I\'ve Loved Before', 
  'The Kissing Booth', 'High School Musical', ...
];

// Smart filtering to exclude irrelevant movies and ensure quality
const isRelevant = !animationKeywords.some(keyword => 
  titleAndOverview.includes(keyword)
) && (!movie.genre_ids || !movie.genre_ids.includes(16)) 
&& movie.vote_average >= 3.0 && !movie.title.includes('collection');
```

### Dynamic Card Styling
```javascript
// Complex hash algorithm for unique color distribution
const complexHash = (firstChar * 7) + (lastChar * 13) + 
                   (middleChar * 17) + (titleLength * 23) + (id * 31);
const colorIndex = Math.abs(complexHash) % pastelColors.length;
```

### Responsive Interaction
```javascript
// Desktop: hover to flip → click to navigate
// Mobile: touch to flip → tap back/button to navigate
const handleCardClick = (e) => {
  if (isMobile && !isFlipped) {
    setIsFlipped(true);
  }
};
```

## 🚀 Performance Features

- **React.memo** optimization for 42 movie cards
- **Lazy loading** for movie poster images
- **Smooth scrolling** navigation
- **Touch feedback** animations

## 📱 Mobile Optimizations

- Touch-based card flipping
- Responsive grid layout (4→3→2→1 columns)
- Mobile-specific detail buttons
- Optimized font sizing and spacing

## 🎨 Design Highlights

- **Design by**: [lody](https://www.linkedin.com/in/artistlody/)
- **Y2K Aesthetic** with pastel gradients
- **Typography**: Instrument Serif + SUSE Mono combination
- **3D Card Animations** with CSS transforms
- **Consistent Branding** across all components

---

Built with ❤️ for teen movie enthusiasts