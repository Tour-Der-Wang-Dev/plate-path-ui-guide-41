
import React, { useState } from 'react';
import useLazyLoad from '@/hooks/useLazyLoad';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholderSrc?: string;
  className?: string;
  loadingClassName?: string;
}

/**
 * LazyImage component that loads images when they enter the viewport
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  placeholderSrc = '/placeholder.svg',
  className = '',
  loadingClassName = 'opacity-40',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { ref, isVisible } = useLazyLoad();

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    console.error(`Error loading image: ${src}`);
  };

  // Generate srcset for responsive images if width is provided
  const generateSrcSet = () => {
    if (!src || !width) return undefined;
    
    // Create a responsive srcset
    const widths = [width / 2, width, width * 1.5, width * 2];
    
    return widths
      .map(w => {
        // If using an image service that supports dynamic resizing
        if (src.includes('unsplash.com')) {
          return `${src}&w=${Math.round(w)} ${Math.round(w)}w`;
        }
        return undefined;
      })
      .filter(Boolean)
      .join(', ');
  };

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className="relative overflow-hidden"
      style={{ width, height }}
    >
      <img
        src={error ? placeholderSrc : isVisible ? src : placeholderSrc}
        srcSet={!error && isVisible ? generateSrcSet() : undefined}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        className={`${className} ${!isLoaded && isVisible ? loadingClassName : ''}`}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
