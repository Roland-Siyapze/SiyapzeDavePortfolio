import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices and WebGL support
 * @returns {Object} Object containing isMobile boolean and hasWebGL boolean
 */
export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check for WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
      } catch (e) {
        return false;
      }
    };

    // Check if device is low-end (insufficient memory, limited GPU)
    const checkLowEndDevice = () => {
      const deviceMemory = navigator.deviceMemory;
      const cores = navigator.hardwareConcurrency;
      
      // Consider device as low-end if it has 4GB or less memory and 4 or fewer cores
      if (deviceMemory && cores) {
        return deviceMemory <= 4 && cores <= 4;
      }
      
      // Fallback for browsers that don't support these APIs
      return false;
    };

    setHasWebGL(checkWebGL());
    setIsLowEndDevice(checkLowEndDevice());

    // Mobile detection using multiple methods for better accuracy
    const detectMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      return isMobileDevice || isSmallScreen;
    };

    setIsMobile(detectMobile());

    // Media query listener for responsive changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return { isMobile, hasWebGL, isLowEndDevice };
};

export default useMobileDetection;
