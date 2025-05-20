
// Service Worker for FoodDash App
const CACHE_NAME = 'fooddash-cache-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/icon-192x192.png',
  '/icon-512x512.png'
];
const DYNAMIC_CACHE = 'fooddash-dynamic-v1';
const IMMUTABLE_CACHE = 'fooddash-immutable-v1';
const API_CACHE = 'fooddash-api-v1';

// Cache time limits
const STATIC_MAX_AGE = 30 * 24 * 60 * 60; // 30 days
const API_MAX_AGE = 60 * 60; // 1 hour

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Service Worker & Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName.startsWith('fooddash-') && 
                     ![CACHE_NAME, DYNAMIC_CACHE, IMMUTABLE_CACHE, API_CACHE].includes(cacheName);
            })
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => {
        console.log('Service Worker: Caches cleaned up');
        return self.clients.claim();
      })
  );
});

// Helper function to determine cache strategy based on request
const getCacheStrategy = (request) => {
  const url = new URL(request.url);
  
  // Static assets - Cache First strategy
  if (STATIC_ASSETS.includes(url.pathname)) {
    return 'cache-first';
  }
  
  // API requests - Network First strategy with cache fallback
  if (url.pathname.includes('/api/')) {
    return 'network-first';
  }
  
  // Image files - Stale While Revalidate strategy
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
    return 'stale-while-revalidate';
  }
  
  // JS and CSS files - Cache First with network fallback
  if (url.pathname.match(/\.(js|css)$/)) {
    return 'cache-first';
  }
  
  // Default strategy - Network First
  return 'network-first';
};

// Fetch event handler with different strategies
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  const strategy = getCacheStrategy(event.request);
  
  switch (strategy) {
    case 'cache-first':
      event.respondWith(
        caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return fetch(event.request)
              .then((response) => {
                if (!response || response.status !== 200) return response;
                
                const responseToCache = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(event.request, responseToCache));
                
                return response;
              })
              .catch(() => {
                // Return fallback page if offline
                if (event.request.headers.get('accept').includes('text/html')) {
                  return caches.match('/');
                }
              });
          })
      );
      break;
      
    case 'network-first':
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200) return response;
            
            const responseToCache = response.clone();
            caches.open(API_CACHE)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            return caches.match(event.request);
          })
      );
      break;
      
    case 'stale-while-revalidate':
      event.respondWith(
        caches.match(event.request)
          .then((cachedResponse) => {
            const fetchPromise = fetch(event.request)
              .then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                  const responseToCache = networkResponse.clone();
                  caches.open(DYNAMIC_CACHE)
                    .then((cache) => {
                      cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
              })
              .catch(() => null);
            
            return cachedResponse || fetchPromise;
          })
      );
      break;
      
    default:
      // Default to network with cache fallback
      event.respondWith(
        fetch(event.request)
          .catch(() => {
            return caches.match(event.request);
          })
      );
  }
});

// Handle push notifications
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/icon-192x192.png',
    badge: '/badge-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Periodic cache cleanup
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              return caches.open(cacheName)
                .then((cache) => {
                  return cache.keys()
                    .then((requests) => {
                      return Promise.all(
                        requests.map((request) => {
                          // Check timestamp and evict if too old
                          return cache.delete(request);
                        })
                      );
                    });
                });
            })
          );
        })
    );
  }
});
