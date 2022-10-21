'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "41da0bc92f4b03828b943c4af61ad5fd",
"vercel.json": "d32327b548505f90564281b39bc97014",
"main.dart.js": "cc813aa81b659f231c85d6c3a7848d7e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/apple-icon.png": "33f9949b5636c525cfcc0a2439576985",
"icons/apple-icon-114x114.png": "db1ebfa1ab873c38914bad666eb0da48",
"icons/apple-icon-60x60.png": "9d55c45499b553c907bb197c2eb33c05",
"icons/favicon-16x16.png": "2c4058c929dc291b8216131dd1d7ba45",
"icons/ms-icon-70x70.png": "9c6fd74df782a4c80a0ca7e5d75dc663",
"icons/apple-icon-76x76.png": "dc4200d311e336906743fd94363edeb6",
"icons/android-icon-72x72.png": "c0a8a65128fb200f4e58b36c472180be",
"icons/apple-icon-72x72.png": "c0a8a65128fb200f4e58b36c472180be",
"icons/favicon-32x32.png": "832e5d6e5829befec6609c37b7a81c83",
"icons/android-icon-96x96.png": "e5fc2876cac15b8539fc56bde3cdf043",
"icons/ms-icon-310x310.png": "90334e09c4789f9c888df714691555d8",
"icons/favicon-96x96.png": "e5fc2876cac15b8539fc56bde3cdf043",
"icons/apple-icon-120x120.png": "aecf4930adecbd8d3a5d8d3ca80f9da0",
"icons/android-icon-36x36.png": "713317e93fd0d18e0dc531b9b1e99671",
"icons/ms-icon-144x144.png": "3244098b26d28977b02d078c779a5968",
"icons/apple-icon-precomposed.png": "33f9949b5636c525cfcc0a2439576985",
"icons/ms-icon-150x150.png": "1a931bf45e3aaf782da1761f61aab98e",
"icons/apple-icon-152x152.png": "62310bfb7790fda84ed0f93528c13580",
"icons/apple-icon-57x57.png": "e4fea5236f146896b5247148599edaf2",
"icons/android-icon-48x48.png": "53ca1f027960e9bac039c036bb4a7db6",
"icons/android-icon-192x192.png": "74879317c3b9a394ac2b68f7b64c6011",
"icons/android-icon-144x144.png": "3244098b26d28977b02d078c779a5968",
"icons/apple-icon-180x180.png": "08981d6c20a2b6047397b0f1f8399d5e",
"icons/apple-icon-144x144.png": "3244098b26d28977b02d078c779a5968",
"version.json": "584718c013ad33ad3f95c86ba8515e36",
"favicon.ico": "ad81d9d24ba507c2d0fb90a13c8a8fba",
"index.html": "b0ca3ead16f48369d5f0ce9f5e5d74f5",
"/": "b0ca3ead16f48369d5f0ce9f5e5d74f5",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "84ac1729e6d2dd3c3e300bd7e8ea3c6f",
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
"assets/assets/icons/jc_logo.svg": "d8f79d6883cad9117b63673cc768e84d",
"assets/assets/icons/instagram_icon.svg": "23a3134e09fdc55dd080941344f28eab",
"assets/assets/icons/meta_icon.svg": "d306da0eeccf866c6cf69cc78ccebe79",
"assets/assets/icons/liqida%25201.png": "fe2acc8d26a7567946718316ec96006b",
"assets/assets/icons/linked_in_icon.svg": "8b2410112efb90648cebb08310962db7",
"assets/assets/icons/future_promition.svg": "6389b256b74687bc241f901b4bce2de9",
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
"assets/assets/images/member_1.png": "486e06a91923cf91e2b9508f3baacedc",
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
"assets/AssetManifest.json": "d380eefadc7fc475ba02e3b02017192d"
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
