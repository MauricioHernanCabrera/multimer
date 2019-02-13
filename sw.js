importScripts('/multimer/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/multimer/_nuxt/07bf6f4898e8048665ab.js",
    "revision": "403d98fa51c389cd92d391ba57951186"
  },
  {
    "url": "/multimer/_nuxt/1ea1a930f197d84b3a91.js",
    "revision": "267452a10c39e83778665e03f64f6e3e"
  },
  {
    "url": "/multimer/_nuxt/6236b653a5ec275f8785.js",
    "revision": "7aadd0a2fa1c6dbfd8baade28aaeba6d"
  },
  {
    "url": "/multimer/_nuxt/68f891ecdb0fc7a65bd8.worker.js",
    "revision": "412503defa0bf2a150707e72b6295263"
  },
  {
    "url": "/multimer/_nuxt/77c4458854e5ed63dacb.js",
    "revision": "04ef7d6e313005cce9ebd3beddf9ea1e"
  },
  {
    "url": "/multimer/_nuxt/c127b8e34758395a9a58.js",
    "revision": "590b18ded6acb71e00521607de4a5ad4"
  },
  {
    "url": "/multimer/_nuxt/cbfb69c150f9c9002a3c.js",
    "revision": "c8e68320b42be1c47c2fe51f0d7be40c"
  }
], {
  "cacheId": "multimer",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()
// This is manually copied into the sw.js file

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

