const cache_name = "pwa-cache";
const cached_urls = ([
    '/',
    '/manifest-webmanifest.json',
    '/images/app/pwaMd.png',
    'images/app/pwaSm.png',
    '/javascripts/pwa.js',
    '/stylesheets/style.css'
]);

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cache_name)
        .then(function(cache){
            return cache.addAll(cached_urls);
        })
    )
})

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
})


self.addEventListener('message', function(e){
    console.log('er is geupdate')
    if(e.data.action === 'skipWaiting'){
        self.skipWaiting();
    }
})