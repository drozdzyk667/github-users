import React from 'react';
import {
  MID_SCREEN_WIDTH,
  MIN_SCREEN_WIDTH,
} from 'pages/githubViewer/GithubViewer.constants';

export const useWindowProperties = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const isScreenTablet = width < MID_SCREEN_WIDTH;
  const isScreenMobile = width < MIN_SCREEN_WIDTH;

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return { width, isScreenMobile, isScreenTablet };
};

export default useWindowProperties;
