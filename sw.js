importScripts('/multimer/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/multimer/_nuxt/0c34b7fe081e84418905.js",
    "revision": "abcf1224dd4ece0e4fbab9406a0aaa4f"
  },
  {
    "url": "/multimer/_nuxt/1ea1a930f197d84b3a91.js",
    "revision": "267452a10c39e83778665e03f64f6e3e"
  },
  {
    "url": "/multimer/_nuxt/230a9e3aeee8fc3bab0f.js",
    "revision": "4f8857137d8991e80c1ef13036ea9f6c"
  },
  {
    "url": "/multimer/_nuxt/2c9332902fdd1b54a178.worker.js",
    "revision": "412503defa0bf2a150707e72b6295263"
  },
  {
    "url": "/multimer/_nuxt/6236b653a5ec275f8785.js",
    "revision": "7aadd0a2fa1c6dbfd8baade28aaeba6d"
  },
  {
    "url": "/multimer/_nuxt/8b009d7f3a0f247d8e0f.js",
    "revision": "a8de62485b97459f96a8628762425923"
  },
  {
    "url": "/multimer/_nuxt/c127b8e34758395a9a58.js",
    "revision": "590b18ded6acb71e00521607de4a5ad4"
  }
], {
  "cacheId": "multimer",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

self.addEventListener('notificationclick', function (event) {
  event.notification.close()

  event.waitUntil(
    clients.openWindow('https://mauriciohernancabrera.github.io/multimer')
  )
})

workbox.googleAnalytics.initialize()

workbox.routing.registerRoute(new RegExp('/^https://fonts.(?:googleapis|gstatic).com/(.*)/'), workbox.strategies.cacheFirst({ "cacheName": "google-font-multimer", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 31536000 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/multimer/_nuxt/.*'), workbox.strategies.cacheFirst({ "cacheName": "multimer-nuxt", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 604800 } }), 'GET')
workbox.routing.registerRoute(new RegExp('/multimer/.*'), workbox.strategies.networkFirst({ "cacheName": "multimer-all", "cacheExpiration": { "maxEntries": 10000, "maxAgeSeconds": 604800 } }), 'GET')

