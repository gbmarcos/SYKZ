'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "d986eedb79728bc7b3dfc5068fe49bc8",
"vercel.json": "d32327b548505f90564281b39bc97014",
"main.dart.js": "20ece2efe8c1c07514886010cf9c2dd6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "12d05db1c0b26d429b54e3f8c946a496",
"icons/Icon-512.png": "aabba36693aba0ec8d954adf297d3125",
"icons/favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"version.json": "584718c013ad33ad3f95c86ba8515e36",
"favicon.png": "7a26ea9d4e61122fc023b84e5acdb148",
"index.html": "76f8543021d9d118cd16f0a624dff6c1",
"/": "76f8543021d9d118cd16f0a624dff6c1",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7ff5151cee811f659f199877621ae05b",
"assets/FontManifest.json": "5e6352e891db62ab6e81fe73d72d9a57",
"assets/shaders/ink_sparkle.frag": "eb2660ca04810b457f20988d91d4caaf",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "5811e69d2c096d8ad480f5796e3344ea",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "5de9b5743038b63008bf9294cad5c0ba",
"assets/assets/fonts/montserrat/Montserrat-Italic.ttf": "8777b44e5f19cd64f83171126db732f0",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "a8de8ffe262db7e277deb8f1c439c518",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "abfff4a0713e68d64a737e744490b7ac",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.ttf": "179eed84529839d2edf706b20eedcf72",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "5f797490f806b3b229299f0a66de89c9",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "9e52b00d737492e337b2498406aef98f",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "bbf2ff5d3749f144925150eee4c35caa",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "d27df57dc92f77b422ff6f976973924b",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "054ffd1ba6a6c109b3ccee195074f928",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "5e81217f7e141ed72533cde11d1252fa",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "31e34a4dc526ffb104e2d988f6f52516",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "b415dcea9b371c36eaf4a23e4fa1f5dc",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "b74481b36cffbfa8ed83838da96e7ed1",
"assets/assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "81fbc50801009bb840b3c91a4d2ffb6b",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "ae2ace44e8b700f5b0cb25cbbc291d60",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "f7213526ec9296ff43426bfe3eae8926",
"assets/assets/icons/instagram_icon.svg": "23a3134e09fdc55dd080941344f28eab",
"assets/assets/icons/meta_icon.svg": "d306da0eeccf866c6cf69cc78ccebe79",
"assets/assets/icons/linked_in_icon.svg": "8b2410112efb90648cebb08310962db7",
"assets/assets/icons/sykz_icon_2.svg": "5ab1b664de50fffbf22d13d78912a131",
"assets/assets/icons/menu_button.svg": "a65227ef159969c87b715b0c746f3d70",
"assets/assets/icons/sykz_icon.svg": "ed3ac270f64279cb9eb7680c1621b60f",
"assets/assets/images/member_2.png": "37fdc540c791b65a595d17c0f983ea1e",
"assets/assets/images/mixed_collage_5.png": "44b4c35ac2fbea2ec6e2e562eea2a9ba",
"assets/assets/images/collage_3.png": "3f8be8c6a30411db8bbbdb7cb8bf403d",
"assets/assets/images/news_team_karriere_image_1.png": "88a0aced92abde60ad6c870547c5453a",
"assets/assets/images/rotated_image.svg": "4d7f6297cab5209811f1447a8cb85b76",
"assets/assets/images/collage_2.png": "f70ea2c7fea0647e0fd5bbfb03f3990c",
"assets/assets/images/member_3.png": "b3957ad75abaf2783fbfb34b68448023",
"assets/assets/images/mixed_collage_4.png": "e49500bf886dece45a26c76ecc35576d",
"assets/assets/images/unternehmensberatung_image_1.png": "389a0985491e29050f7ccc086d6de738",
"assets/assets/images/row_image_2.png": "fd1ca535c9d1eabebbb1129c2d50e42c",
"assets/assets/images/investment_image_1.png": "d86684d88d9b6685a99e8a76ccebd275",
"assets/assets/images/collage_4.png": "c160831d60df12d4ab4c2567b0a06f6e",
"assets/assets/images/staggered_row_image_2.png": "66cd66ac7799f62ef8548d7b1b2a4bc2",
"assets/assets/images/member_1.png": "393d6aec99592d82d8289547fc320575",
"assets/assets/images/row_image_3.png": "627c2ab548d3b1bed9059857877c5974",
"assets/assets/images/collage_5.png": "b050fd5ec941e8c28bcd8960ada0c6de",
"assets/assets/images/ruckabwicklung_image_1.png": "03d3933acc011ad80d7105bd9bc0509b",
"assets/assets/images/collage_1.png": "4660e410f7e5b577a9eaaf305d2db3b2",
"assets/assets/images/staggered_row_image_3.png": "f54099825ce35ed5c0f339ee07f0aa46",
"assets/assets/images/mixed_collage_1.png": "7b0242f2b996df1dd2095adfa550ed2e",
"assets/assets/images/row_image_1.png": "552446e5efa9b9de79e78fab5fa203c1",
"assets/assets/images/staggered_row_image_1.png": "553be394efd25570df35dbe659ca8f7d",
"assets/assets/images/mixed_collage_3.png": "0fcf912629739ec7165592fd85d84577",
"assets/assets/images/form_2_image.png": "0b06b243d370b6b65dcd56a90ba01e9b",
"assets/assets/images/home_image_2.png": "5adaf9df1dbfa04af0557218a9455dca",
"assets/assets/images/mixed_collage_2.png": "3cbf2b7e6a7777a1f838c7719ecbf1a0",
"assets/assets/images/home_image_1.png": "f3cdb841460fb26024b5efb093c74fe4",
"assets/AssetManifest.json": "d40355c12049606d3676da8d05b0fe2f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
