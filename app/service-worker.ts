/// <reference lib="webworker" />

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = "springboard-cache-v1"
const OFFLINE_URL = "/offline"

// Add all the assets you want to cache here
const ASSETS_TO_CACHE = [
  "/",
  "/ideas",
  "/resources",
  "/hackathons",
  "/offline",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
]

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE)
    }),
  )

  // Force the waiting service worker to become the active service worker
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return cacheName !== CACHE_NAME
          })
          .map((cacheName) => {
            return caches.delete(cacheName)
          }),
      )
    }),
  )

  // Tell the active service worker to take control of the page immediately
  self.clients.claim()
})

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL)
      }),
    )
    return
  }

  // For other requests, try the network first, falling back to cache if offline
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            // Don't cache API responses or other dynamic content
            if (
              !fetchResponse ||
              fetchResponse.status !== 200 ||
              fetchResponse.type !== "basic" ||
              event.request.url.includes("/api/")
            ) {
              return fetchResponse
            }

            // Clone the response since we're going to use it twice
            const responseToCache = fetchResponse.clone()

            // Add the response to the cache
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })

            return fetchResponse
          })
        )
      })
      .catch(() => {
        // If both the network and cache fail, show offline page for navigation requests
        if (event.request.mode === "navigate") {
          return caches.match(OFFLINE_URL)
        }

        // For image requests, return a placeholder
        if (event.request.destination === "image") {
          return new Response(
            '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#eee"/><text x="200" y="150" font-family="Arial" font-size="20" text-anchor="middle" fill="#999">Image Offline</text></svg>',
            {
              headers: {
                "Content-Type": "image/svg+xml",
              },
            },
          )
        }

        // For other requests, return a simple offline message
        return new Response("Offline content not available")
      }),
  )
})
