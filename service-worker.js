self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(app-saudacao-cache).then(cache => {
         return cache.addAll([
            "index.html",
            "manifest.json",
            "diaENoitep.png",
            "dia-e-noite.png",
            "boaNoiteFundo.jpg",
            "boaTardeFundo.jpg",
            "bomDiaFundo.jpg",
            "noite.png",
            "por-do-sol.png",
            "sol.png"


         ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
