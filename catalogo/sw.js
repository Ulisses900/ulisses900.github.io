// sw.js - Somax (mínimo, compatível com PWA Builder / TWA)
const CACHE = "somax-catalogo-v1";
const CORE = [
  "/catalogo/",
  "/catalogo/index.html",
  "/catalogo/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // cache-first simples
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});