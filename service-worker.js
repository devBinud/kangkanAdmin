self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('kangkan-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          'assets/images/icon-192x192.png',
          'assets/images/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });