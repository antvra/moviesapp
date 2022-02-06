import { useState, useEffect } from 'react';

export function ClientWidth() {
  const [Width, setWidth] = useState(null);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return Width;
}
