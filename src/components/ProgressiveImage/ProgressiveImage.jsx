import { useEffect, useRef, useState } from 'react';

/**
 * Progressive loading image component
 * Preloads image when it's within 500px of viewport (before it's visible)
 * Shows image immediately once loaded - no layout shift
 */
export default function ProgressiveImage({
  src,
  alt,
  className,
  preloadDistance = 500,
  ...props
}) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: `${preloadDistance}px 0px`,
        threshold: 0
      }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, [preloadDistance]);

  return (
    <img
      ref={imgRef}
      src={shouldLoad ? src : undefined}
      data-src={src}
      alt={alt}
      className={className}
      onLoad={() => setIsLoaded(true)}
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      {...props}
    />
  );
}
