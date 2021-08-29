self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/PWA-test00/',
      '/PWA-test00/index.html',
      '/PWA-test00/index.js',
      '/PWA-test00/style.css',
      '/PWA-test00/images/cat1.jpg',
      '/PWA-test00/images/cat2.jpg',
      '/PWA-test00/images/cat3.jpg',
      '/PWA-test00/images/cat4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
