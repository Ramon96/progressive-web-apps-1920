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


// self.addEventListener('fetch', function(e){
//     e.respondWith(
//         caches.open(cache_name)
//             .then(function(cache){
//                 return cache.match(e.request)
//                         .then(function(response){
//                             const fetchPromise = fetch(e.request).then(function(networkResponse){
//                                 cache.put(e.request, networkResponse.clone());
//                                 return networkResponse;
//                             })
//                             return response || fetchPromise;
//                         })
//             })
//     )
// })

self.addEventListener('fetch', function(e){
    console.log(e.request.url);

    e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
})