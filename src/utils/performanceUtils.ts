
/**
 * Delay loading of non-critical resources
 */
export const deferLoadingOf = (src: string, type: 'script' | 'style' = 'script'): void => {
  if (typeof window === 'undefined') return;
  
  const createDeferredElement = () => {
    if (type === 'script') {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    } else if (type === 'style') {
      const link = document.createElement('link');
      link.href = src;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  };

  // Use requestIdleCallback or setTimeout as a fallback
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(createDeferredElement);
  } else {
    setTimeout(createDeferredElement, 1000);
  }
};

/**
 * Detect when an element enters the viewport
 */
export const onElementVisible = (
  element: HTMLElement, 
  callback: () => void
): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback for browsers that don't support IntersectionObserver
    callback();
    return;
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(element);
};

/**
 * Preload critical resources
 */
export const preloadResource = (src: string, as: 'image' | 'style' | 'script' | 'font'): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = src;
  link.as = as;
  
  if (as === 'font') {
    link.setAttribute('crossorigin', 'anonymous');
  }
  
  document.head.appendChild(link);
};

/**
 * Measure component render time
 */
export const measureRenderTime = (componentName: string): () => void => {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    console.log(`[Performance] ${componentName} rendered in ${endTime - startTime}ms`);
  };
};

/**
 * Track Core Web Vitals using web-vitals library
 * Note: This requires the web-vitals package to be installed
 */
export const trackWebVitals = (analyticsCallback?: (metric: any) => void): void => {
  // This is a placeholder - in a real implementation, you would import web-vitals
  // Example usage:
  // import {getCLS, getFID, getLCP, getTTFB, getFCP} from 'web-vitals';
  console.log('Web Vitals tracking initialized');
  
  /*
  // With web-vitals installed, you would use this code:
  getCLS(metric => {
    console.log('CLS:', metric.value);
    analyticsCallback?.(metric);
  });
  
  getFID(metric => {
    console.log('FID:', metric.value);
    analyticsCallback?.(metric);
  });
  
  getLCP(metric => {
    console.log('LCP:', metric.value);
    analyticsCallback?.(metric);
  });
  
  getTTFB(metric => {
    console.log('TTFB:', metric.value);
    analyticsCallback?.(metric);
  });
  
  getFCP(metric => {
    console.log('FCP:', metric.value);
    analyticsCallback?.(metric);
  });
  */
};

/**
 * Create image URL with responsive parameters
 */
export const responsiveImageUrl = (
  url: string,
  width: number,
  quality: number = 80
): string => {
  if (!url) return '';
  
  // If the URL is from an image CDN or service that supports parameters
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=${quality}&auto=format`;
  }
  
  return url;
};
