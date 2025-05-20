
/**
 * Utilities for resource hints to improve loading performance
 */

/**
 * Add preload resource hint
 */
export const preloadResource = (
  url: string, 
  as: 'image' | 'style' | 'script' | 'font' | 'fetch',
  options?: { crossOrigin?: 'anonymous' | 'use-credentials', type?: string }
): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  
  if (options?.crossOrigin) {
    link.crossOrigin = options.crossOrigin;
  }
  
  if (options?.type) {
    link.type = options.type;
  }
  
  document.head.appendChild(link);
};

/**
 * Add prefetch resource hint
 */
export const prefetchResource = (url: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = url;
  
  document.head.appendChild(link);
};

/**
 * Add preconnect resource hint
 */
export const preconnectTo = (url: string, crossOrigin = true): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  
  document.head.appendChild(link);
};

/**
 * Add DNS prefetch resource hint
 */
export const dnsPrefetch = (url: string): void => {
  if (typeof document === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = url;
  
  document.head.appendChild(link);
};
