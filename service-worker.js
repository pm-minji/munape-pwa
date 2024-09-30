const CACHE_NAME = 'munape-cache-v1';
const urlsToCache = [
  '/',
  'https://cdn.imweb.me/thumbnail/20240925/5a263f2432e43.png',
  'https://cdn.imweb.me/thumbnail/20240925/c9d565dcc5b31.png',
  'https://cdn.imweb.me/thumbnail/20240925/67872cc2d38ee.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
