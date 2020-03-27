const cache_name = "pwa-cache25";
const cached_urls = ([
    '/offline'
]).concat(serviceWorkerOption.assets);

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cache_name)
        .then(function (cache) {
            return cache.addAll(cached_urls);
        })
    )
})



// I made use of the functions Declan wrote: fetch and cache, is htmlgetrequest and iscoregetrequest
// https://github.com/decrek/progressive-web-apps-1920/blob/master/examples/movies-example/src/service-worker.js
 

self.addEventListener('fetch', e =>{
    if(isCoreGetRequest(e.request)){
        e.respondWith(
            caches.open(cache_name)
                .then(cache => cache.match(e.request.url))
        )
    } else if(isHtmlGetRequest(e.request)){
        e.respondWith(
            caches.open(cache_name)
                .then(cache => cache.match(e.request.url))
                .then(response => response ? response : fetchAndCache(e.request, cache_name))
                .catch(e => { 
                    return caches.open(cache_name)
                    .then(cache => {
                        return cache.match('/offline')

                    }) 
                })
        )
    }

})


// self.addEventListener('fetch', function(e){
//     e.respondWith(
//         fetch(e.request)
//             .then((res)=>{
//                 return caches.open(cache_name)
//                     .then(cache =>{
//                         cache.put(e.request.url, res.clone());
//                         return res
//                     })
//             }).catch(err => {
//                 return caches.match(e.request);
//             })
//     )
// }).catch()

// self.addEventListener('fetch', function (e) {
//     e.respondWith(
//         caches.open(cache_name)
//         .then(function (cache) {
//             return cache.match(e.request)
//                 .then(function (response) {
//                     const fetchPromise = fetch(e.request).then(function (networkResponse) {
//                         cache.put(e.request, networkResponse.clone());
//                         return networkResponse;
//                     })
//                     return response || fetchPromise;
//                 })
//         })
//     )
// })

// self.addEventListener('fetch', function(e){
//     e.respondWith(
//         caches.match(e.request).then(function(response) {
//           return response || fetch(e.request);
//         })
//       );
// })


self.addEventListener('message', function (e) {
    console.log('er is geupdate')
    if (e.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
})

function fetchAndCache(request, cacheName) {
    return fetch(request)
      .then(response => {
        if (!response.ok) {
          throw new TypeError('Bad response status');
        }
  
        const clone = response.clone()
        caches.open(cacheName).then((cache) => cache.put(request, clone))
        return response
      })
  }

function isHtmlGetRequest(request) {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
}


function isCoreGetRequest(request) {
    return request.method === 'GET' && cached_urls.includes(getPathName(request.url));
}

function getPathName(requestUrl) {
    const url = new URL(requestUrl);
    return url.pathname;
}