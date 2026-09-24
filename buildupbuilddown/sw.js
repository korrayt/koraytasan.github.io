/**
 * BUILD UP BUILD DOWN - High-Performance PWA Service Worker
 * Cache-First for 3D Models, Textures, and Asset Chunks
 * Network-First for Document Shell with Offline Fallback
 */

const CACHE_NAME = 'buildupbuilddown-v1';

// Static asset shell to pre-cache immediately
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching non-fatal warning:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignore non-GET and cross-origin analytics/external requests
  if (req.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // 1. 3D Models, Textures, JS/CSS Bundles: Cache-First strategy
  const isModelOrAsset =
    url.pathname.includes('/models/') ||
    url.pathname.includes('/textures/') ||
    url.pathname.includes('/assets/') ||
    url.pathname.endsWith('.glb') ||
    url.pathname.endsWith('.gltf') ||
    url.pathname.endsWith('.obj') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css');

  if (isModelOrAsset) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const resClone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, resClone);
            });
          }
          return networkRes;
        });
      })
    );
    return;
  }

  // 2. Navigation / HTML: Network-First with Offline Fallback
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then((networkRes) => {
        const resClone = networkRes.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, resClone);
        });
        return networkRes;
      }).catch(() => {
        return caches.match('./index.html') || caches.match('./');
      })
    );
    return;
  }

  // Default: Network with cache fallback
  event.respondWith(
    fetch(req).catch(() => caches.match(req))
  );
});
