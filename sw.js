const CACHE_NAME = "wesam-store-static-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./assets/css/styles.css",
  "./assets/js/firebase.js",
  "./assets/js/ui.js",
  "./assets/js/admin.js",
  "./assets/js/service_requests.js",
  "./assets/js/app.js",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (
    url.hostname.includes("googleapis.com") ||
    url.hostname.includes("gstatic.com") ||
    url.hostname.includes("firebase") ||
    url.hostname.includes("firestore")
  ) {
    return;
  }

  if (req.method === "GET") {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        });
      })
    );
  }
});
