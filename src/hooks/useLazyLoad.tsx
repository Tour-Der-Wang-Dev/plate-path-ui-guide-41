
import { useRef, useEffect, useState } from 'react';

interface UseLazyLoadProps {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

/**
 * Hook for lazy loading elements when they enter the viewport
 */
export const useLazyLoad = ({
  threshold = 0.1,
  rootMargin = '200px 0px',
  enabled = true
}: UseLazyLoadProps = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, enabled]);

  return { ref, isVisible };
};

export default useLazyLoad;
