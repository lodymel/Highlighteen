export const getPublicImageUrl = (imageName) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  return `${baseUrl}/${imageName}`;
};

export const getImageWithFallback = (primarySrc, fallbackSrc = null) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(primarySrc);
    img.onerror = () => {
      if (fallbackSrc) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => resolve(fallbackSrc);
        fallbackImg.onerror = () => resolve('/api/placeholder/300/450');
        fallbackImg.src = fallbackSrc;
      } else {
        resolve('/api/placeholder/300/450');
      }
    };
    img.src = primarySrc;
  });
};

export const PLACEHOLDER_IMAGES = {
  poster: 'https://via.placeholder.com/300x450/ffb6c1/1d1d1f?text=No+Poster',
  symbol: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZiNmMxIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMWQxZDFmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IPC90ZXh0Pgo8L3N2Zz4K',
  arrow: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCA0MFY4ME02MCA4MEw0MCA2ME02MCA4MEw4MCA2MCIgc3Ryb2tlPSIjZmZiNmMxIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'
};
