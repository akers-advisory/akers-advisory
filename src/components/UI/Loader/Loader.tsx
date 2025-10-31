'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../../public/lottie/AkersAdvisory.json';

const MIN_DURATION = 1500; // minimum animation time in ms

export const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false); // page/assets loaded
  const [shouldRender, setShouldRender] = useState(true); // controls when to remove from DOM

  useEffect(() => {
    const startTime = Date.now();
    const fontsPromise = document.fonts
      ? document.fonts.ready
      : Promise.resolve();
    const windowLoadPromise = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', () => resolve());
    });

    Promise.any([fontsPromise, windowLoadPromise]).then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => {
        setIsLoaded(true);
        // Remove from DOM after fade-out animation completes (1s)
        setTimeout(() => setShouldRender(false), 1000);
      }, remaining);
    });
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-primary loader-container ${
        isLoaded ? 'loader-fade-out' : 'loader-fade-in'
      }`}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};
