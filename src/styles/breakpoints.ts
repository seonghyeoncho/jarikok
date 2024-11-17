const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px'
} as const;

// 미디어 쿼리 헬퍼
export const media = {
  mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
  laptop: `@media screen and (min-width: ${breakpoints.laptop})`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop})`
} as const;

export default breakpoints; 