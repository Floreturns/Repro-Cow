'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2a61c3c9f1504818a59febdffb6515e7",
"assets/AssetManifest.bin.json": "c38db06017bc987c0423de2f036da993",
"assets/AssetManifest.json": "da33c8428e69106cb3cbd4efac3cb60c",
"assets/assets/images/locow.png": "459f748546e7896ef285bd03c5fcdd96",
"assets/assets/schemas/Schema_030.png": "6671547a2e1245961527b57ee7715804",
"assets/assets/schemas/Schema_070.jpg": "7545d263cda7da186dd29fce49ecf4b2",
"assets/assets/schemas/Schema_080.png": "48f0ffd2f0ef4a7a32d5a22327e2042d",
"assets/assets/schemas/Schema_090.png": "92d7510f12612c36893335b50de744e7",
"assets/assets/schemas/Schema_100.png": "48356345b56b3f32d087c4fdae26b0d1",
"assets/assets/schemas/Schema_102.jpg": "ee84be2d8927ae026a11e40e5ecb7e77",
"assets/assets/schemas/Schema_140.png": "ca7078e153c6bd6745037d09a2dfb2bb",
"assets/assets/schemas/Schema_142.png": "9ba3efb69372aa8954524b56edece7af",
"assets/assets/schemas/Schema_150.png": "d70abe6d49b1fd760a254d7a02c8dfaa",
"assets/assets/schemas/Schema_152.png": "3e365895db8530668f926de1a16f4f6a",
"assets/assets/schemas/Schema_160.png": "02e267646ffa6a25d0e978695e01f6ed",
"assets/assets/schemas/Schema_162.png": "6f76c6bae7df086188654e59cbd6349c",
"assets/assets/schemas/Schema_170.png": "7c8563c2613cf14195923da9cb7a1845",
"assets/assets/schemas/Schema_Protocoles_GPG_5dCoSynch.png": "7dfa18ee53e1556e97e97d1c3620dc7f",
"assets/assets/schemas/Schema_Protocoles_GPG_CoSynch.png": "29b972d4e304dd22ef654f13baa8d5bd",
"assets/assets/schemas/Schema_Protocoles_GPG_g6g.png": "f3be133c327a0f8113357783a21cc7f6",
"assets/assets/schemas/Schema_Protocoles_GPG_gpg&progesterone.png": "fa794c10470425d40fd9f49d09528672",
"assets/assets/schemas/Schema_Protocoles_GPG_OvSynch.png": "4ed2c4d15e1b3f785aa3edeaa2014d6c",
"assets/assets/schemas/Schema_Protocoles_progesterone01.png": "3042f3dcb55b52848107227911e858ba",
"assets/assets/schemas/Schema_Protocoles_prostaglandines01.png": "b88cdec2b4def5f82bafabd454b4be2f",
"assets/assets/schemas/Schema_Protocoles_prostaglandines02.png": "e2fd495fa12943c948cf0dd8d5a5ccd0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "47f6c5a2d53a9c8873cf7e52ed6f36b7",
"assets/NOTICES": "c6f82a1dd60cf5e3a691f0c59e9df792",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6f6b07b8c1309a5549b5d72133bd2546",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02564166ee8f7a4eceb1306c56bd4d0c",
"/": "02564166ee8f7a4eceb1306c56bd4d0c",
"main.dart.js": "2004caa50bbcc3a817f15de194bf41e3",
"manifest.json": "230d5c79c0c23d9ec16ef75cd23c035a",
"version.json": "d82e16f680938485dcccec9f14084798"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
