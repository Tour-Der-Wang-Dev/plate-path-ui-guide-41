
import { getCLS, getFID, getLCP, getTTFB, getFCP, Metric } from 'web-vitals';

type AnalyticsCallback = (metric: Metric) => void;

/**
 * Track Core Web Vitals metrics
 */
export const trackWebVitals = (analyticsCallback?: AnalyticsCallback): void => {
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
};

/**
 * Send metrics to analytics service
 */
export const sendToAnalytics = (metric: Metric): void => {
  // In a production environment, you would send this to your analytics service
  // Example: Google Analytics, Amplitude, Mixpanel, etc.
  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType
  });

  // For now, we'll just log it to the console
  console.log('Analytics metric:', body);

  // Sample implementation for sending to analytics endpoint
  /*
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body);
  } else {
    fetch('/api/analytics', {
      body,
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  */
};
