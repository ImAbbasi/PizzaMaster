const CACHE_NAME = 'pizza-master-v2'; // Changed to v2
const ASSETS = [
  '/PizzaMaster/',
  '/PizzaMaster/index.html',
  'https://raw.githubusercontent.com/ImAbbasi/my-assets/main/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// NETWORK-FIRST LOGIC (Better for live apps)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});