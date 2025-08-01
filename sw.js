const VERSION = "v0.4.4";
const CACHE_NAME = `budget-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/budgetTracker.json",
  "/icons/circle.svg",
  "/utilities/index.js",
  "/utilities/storage.js",
  "/utilities/checkSumInvalid.js",
  "/utilities/checkDateInvalid.js",
  "/utilities/renderPastRecords.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
          return Promise.resolve();
        })
      );
      await clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/"));
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        console.log("error");
        return cachedResponse;
      }
      return new Response(null, { status: 404 });
    })()
  );
});
