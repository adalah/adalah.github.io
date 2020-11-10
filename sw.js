/*self.addEventListener("install", (event) => {
    console.log('berhasil', event);
});*/

//let ver = 1;
//komen 2
/*self.addEventListener("install", (event) => {
    console.log('berhasil', event);
    //caching
    event.waitUntil(
        caches.open('aplikasiku' + ver).then((cache) => {
            console.log('mulai caching');
            return cache.addAll([
                './swlab.html',
                './sw.js'
            ]);
        }).then(() => {
            self.skipWaiting();
        }));
});*/
//let ver = 1;
//let cacheName = "aplikasiku" + ver
//listen fetch
//self.addEventListener("fetch", (event) => {
    //console.log('fetching', event);
//    if (event.request.url.endsWith(".png") ||
//        event.request.url.endsWith(".css") ||
 //       event.request.url.endsWith(".js") ||
 //       event.request.url.endsWith(".html")) {
 //           caches.open(cacheName).then((chace) => {
 //               chace.add(event.request)
 //           })
 //       }
 //   event.respondWith(
 //       caches.match(event.request)
//        .then((resp) => { //pencocokan dengan cache
//           return resp || fetch(event.request);
 //       
//})
//    )
//});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// This will trigger the importScripts() for workbox.strategies and its dependencies:
const {strategies} = workbox;

self.addEventListener('fetch', (event) => {
    // Using the previously-initialized strategies will work as expected.
    const cacheFirst = new strategies.CacheFirst();
    event.respondWith(cacheFirst.handle({request: event.request}));
});