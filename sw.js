// VERSION: 1
const pb_cache = "KRD_DIR"
const assets = [
    "./manifest.json",
    "./index.html",
    "./care.html",
    "./catering.html",
    "./computer-service.html",
    "./contact.html",
    "./covid-emergency.html",
    "./covid.html",
    "./dth-services.html",
    "./electrical-plumbing.html",
    "./gas.html",
    "./general-office.html",
    "./health.html",
    "./hospitals.html",
    "./menu.html",
    "./newspaper.html",
    "./office.html",
    "./schools.html",
    "./services.html",
    "./shopping.html",
    "./telephone.html",
    "./thankyou.html",
    "./travels.html",
    "./two-wheeler-mechanic.html",
    "./vadaka-store.html",
    "./fonts/OpenSans-Bold.ttf",
    "./fonts/OpenSans-Regular.ttf",
    "./fonts/OpenSans-SemiBold.ttf",
    "./fonts/Roboto-Medium.ttf",
    "./fonts/Roboto-Regular.ttf",
    "./fonts/Roboto-Bold.ttf",
    "./css/styles.css",
    "./images/ficons/css/fontawesome.min.css",
    "./images/ficons/css/solid.min.css",
    "./images/ficons/webfonts/fa-solid-900.eot",
    "./images/ficons/webfonts/fa-solid-900.svg",
    "./images/ficons/webfonts/fa-solid-900.ttf",
    "./images/ficons/webfonts/fa-solid-900.woff",
    "./images/ficons/webfonts/fa-solid-900.woff2",
    "./js/app.js",
    "./js/contact.js",
    "./js/validation.js",
    "./android-icon-144x144.png",
    "./android-icon-192x192.png",
    "./android-icon-36x36.png",
    "./android-icon-48x48.png",
    "./android-icon-72x72.png",
    "./android-icon-96x96.png",
    "./apple-icon-120x120.png",
    "./apple-icon-144x144.png",
    "./apple-icon-114x114.png",
    "./apple-icon-152x152.png",
    "./apple-icon-180x180.png",
    "./apple-icon-57x57.png",
    "./apple-icon-60x60.png",
    "./apple-icon-72x72.png",
    "./apple-icon-76x76.png",
    "./apple-icon-precomposed.png",
    "./apple-icon.png",
    "./favicon-16x16.png",
    "./favicon-32x32.png",
    "./favicon.ico",
    "./ms-icon-144x144.png",
    "./ms-icon-150x150.png",
    "./ms-icon-310x310.png",
    "./ms-icon-70x70.png",
    "./images/dashboard.jpg",
]

self.addEventListener("install", installEvent => {
  const cacheBypassRequests = assets.map(
    (url) => new Request(url, {cache: 'reload'}));

  installEvent.waitUntil(
    caches.open(pb_cache)
    .then((cache) => {
      return cache.addAll(cacheBypassRequests)
      .then(() => {
        return self.skipWaiting();
      })
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(response) {
        if (response.status === 404) {
          return caches.match('/offline.html');
        }
        return response
      });
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
    })
  );
});