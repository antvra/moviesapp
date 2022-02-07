import { useState, useEffect } from 'react';

export const ClientWidth = () => {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};
