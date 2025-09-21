export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  TABLET_LARGE: 1024,
  DESKTOP: 1400
};

export const MEDIA_QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.MOBILE}px)`,
  tablet: `@media (max-width: ${BREAKPOINTS.TABLET}px)`,
  tabletLarge: `@media (max-width: ${BREAKPOINTS.TABLET_LARGE}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.DESKTOP}px)`
};
