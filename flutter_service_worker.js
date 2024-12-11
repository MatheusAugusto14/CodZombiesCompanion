'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e96da91aa1c6f3668d83f4fd3306a03b",
".git/config": "66aca733c8bc32a020f781be0fb38ca9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ccfa53e6540f37c9ff0837c549182982",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75c22279d9bd3921ea7600ec54134d0f",
".git/logs/refs/heads/master": "75c22279d9bd3921ea7600ec54134d0f",
".git/logs/refs/remotes/origin/HEAD": "437a620434bfb2133eb45d1f07faf6b5",
".git/logs/refs/remotes/origin/master": "e8c58b2ea4cc5dfbebde8575f1e0cb73",
".git/objects/18/126f93578957d5da864b649e035feaa7278154": "b6cee19cdd95f814921f34b22da257b5",
".git/objects/1f/cd5c7dab4c9e9da7470e45d998281976e4f0e9": "103e268271a1aeb6abdfb02ffd6c5bef",
".git/objects/32/b06a499f07d3d48e3cf8753aafc55263816ee0": "b9a69521384b005b6a55377b234640b4",
".git/objects/33/0e0817c77cee1458ee3192cbda723d9c1e1125": "26e1d0f7d5d87b080b78c7d73f8a2c5e",
".git/objects/37/60581bdfaf1110260ffd2f6aaf026a0d47b346": "a562aedfec01f4596d15832fa6484eff",
".git/objects/38/2e61c26945bc09b8036eb1679136ce62ba9bfd": "9be6d73e7726b01b33bbe72b3e587528",
".git/objects/4d/e48ee3c1cfd14d73ea841661ceaf34a28698d7": "51b7f4a370a8b3be0c6e0c99d95695d9",
".git/objects/4f/9c3752e13f7176560457aa0a810176bb7bab54": "5f596146a0adaada10e3f26d1446e3cb",
".git/objects/53/e9c758bb25a065694925f5e81a1aed14661d39": "906c5cc758b4e93d8e5a092f37b1cee0",
".git/objects/66/cede2727d039481dc44bb8162443a66f9851fe": "1ac45968009a7c26b1a0dce3820f26f9",
".git/objects/90/f260e86985e974116dc9b1457bb621ad3a7d13": "2a372e4fb1bac45099cca366fecee1e9",
".git/objects/96/b6c6ac4438db61a696752995f5164b47d19cd2": "d6017127e13159dc4e9edd3b4126c6e8",
".git/objects/b4/9ac28cb1bf4bf19d0a9fafb833faed0640033b": "01bae1b6a85880804e86f5264603be07",
".git/objects/bc/87078088faa3dc16ca033bede90897902eb5ce": "6916137b599364a240f9c23c13dc36bd",
".git/objects/c2/2ae5b38d233da632d8b96158f7b5814ac2920a": "c92428384f66568313334d1ce485edec",
".git/objects/d3/16c69bcf1028d2f16a567ca23edc4cea33f988": "af7fd33ac39c37c7de95d9434f8b96f3",
".git/objects/d5/39c138223000d52738e9b645c17ef7fb305607": "a801dd385438e1fc6d8c2d9b70c74fb6",
".git/objects/df/7db62063bae4b543ac5b190fdbea76447a49d8": "685c2e91486812b5098a42fcbdc66c0b",
".git/objects/f3/aab92b07b9d1f0741401e77dfd13fdff64f37d": "99d912c8f57d2df1e4f4b496ef1f0015",
".git/objects/pack/pack-0dad526e84a471165ae1b2c0d00177428394ad4d.idx": "4751a4390bc36af49cf74a08eac725cf",
".git/objects/pack/pack-0dad526e84a471165ae1b2c0d00177428394ad4d.pack": "15e8775aa7b70541c699704a6b2d2337",
".git/objects/pack/pack-0dad526e84a471165ae1b2c0d00177428394ad4d.rev": "0a088f09f4d9da1487e4b0574562063b",
".git/packed-refs": "f699992127b45f6ef6e519240fe39a7b",
".git/refs/heads/master": "9645c966029c1e95758fa26b24f6ab41",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "9645c966029c1e95758fa26b24f6ab41",
"assets/AssetManifest.bin": "0668473e28f60001f7d8431926f2431d",
"assets/AssetManifest.bin.json": "eef71ebe29f8b276608b0c5a40d42d50",
"assets/AssetManifest.json": "e7790e56a4c148ef0a32c23eb9bec74b",
"assets/assets/citadelle/book_symbols/cardinal_eye.webp": "19b390d07a9289fefdfd38d237cc3ab6",
"assets/assets/citadelle/book_symbols/cardinal_eye_trap.webp": "b2abf6637c2b7e07b6c8e803fd625940",
"assets/assets/citadelle/book_symbols/circle_eye.webp": "05a2b76f670368d6bf3c96bc2cea3edf",
"assets/assets/citadelle/book_symbols/circle_eye_trap.webp": "54265677507e6b59e40ec0fe4e5f5a76",
"assets/assets/citadelle/book_symbols/only_eye.webp": "33238b1958c0414beaedfbc51ee7b4ea",
"assets/assets/citadelle/book_symbols/only_eye_trap.webp": "2f5dca9b90f1e38adc2bd711e946eff9",
"assets/assets/citadelle/book_symbols/star_eye.webp": "66d8724d0eee3bbf315d766feeba5c69",
"assets/assets/citadelle/book_symbols/star_eye_trap.webp": "7aa37ada52536a42a5a9bbe5719984ef",
"assets/assets/citadelle/wall_symbols/wall_symbol_aries.png": "41b1a163c479b01a73811d265883b5f2",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_halved.png": "6fa616645f8bd01b3ae9cffe08647bfc",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_in_circle.png": "385738b7c96cb71d967aca591fe0b4cd",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_lasso.png": "743d475553aa0c19b36e65b20180c626",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_plain.png": "5881677b3e38f411df6f20b45fe7343a",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_pronged.png": "f7a0cf2516d315ed952e39a5c0f7430e",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_quarters.png": "c5ad0885797e1f20737e084d3e298389",
"assets/assets/citadelle/wall_symbols/wall_symbol_circle_three.png": "a7ea449e22ba6ae40f18bf0bf0cfd636",
"assets/assets/citadelle/wall_symbols/wall_symbol_female.png": "e92e2244498d8d06e0612fe3a87b6f17",
"assets/assets/citadelle/wall_symbols/wall_symbol_fourteen.png": "eed19c3608e920aca2678965fd96ea85",
"assets/assets/citadelle/wall_symbols/wall_symbol_goalposts.png": "80d2d872480c8df611735ab2e81940c3",
"assets/assets/citadelle/wall_symbols/wall_symbol_helmet.png": "f06ddb58e94639ffb621e92437215ae3",
"assets/assets/citadelle/wall_symbols/wall_symbol_key.png": "8ff1ca7ddd0840de8c0bfd6e1eefaa47",
"assets/assets/citadelle/wall_symbols/wall_symbol_lectern.png": "4fad1db0fb3143419a3531a6fb2c0641",
"assets/assets/citadelle/wall_symbols/wall_symbol_male.png": "ac46c423ed1a0cde48a3196e08ed7985",
"assets/assets/citadelle/wall_symbols/wall_symbol_powerline.png": "fd18a210cf81106781e11874c9c7c947",
"assets/assets/citadelle/wall_symbols/wall_symbol_triangle.png": "b178f07ca94214f2e6047763ea6d5ce1",
"assets/assets/citadelle/wall_symbols/wall_symbol_triangle_kite.png": "27ef94175ba2d1351429725fcfeafff9",
"assets/assets/citadelle/wall_symbols/wall_symbol_trident.png": "226d934cab094e426b65ef0380810249",
"assets/assets/citadelle/wall_symbols/wall_symbol_triple_circle.png": "30f0ffd1475bc51f4720c025a4628cd4",
"assets/assets/terminus/algebra/0.webp": "fffbdc1f400ed66b490147373ea5cf26",
"assets/assets/terminus/algebra/10.webp": "0ba22723eacedca249130cba04aef4ee",
"assets/assets/terminus/algebra/11.webp": "0f64f7bbed64b97837e1557df747c929",
"assets/assets/terminus/algebra/20.webp": "817273a7835255cc3399f8985cdd9954",
"assets/assets/terminus/algebra/21.webp": "81d9272c8471afbb91d60caacd05a296",
"assets/assets/terminus/algebra/22.webp": "a91961690d806a45fc9aac48ddf3589b",
"assets/assets/terminus/algebra/terminus_algebra_0.png": "9af762d973c726958f5a7a081c8613e8",
"assets/assets/terminus/algebra/terminus_algebra_10.png": "f8da4a0769dcdc22b762a6044681446f",
"assets/assets/terminus/algebra/terminus_algebra_11.png": "b41b79dc92bc3f8b6a58f223ab4f0004",
"assets/assets/terminus/algebra/terminus_algebra_20.png": "92a28adffeeb82c604b80e2f8091c8ce",
"assets/assets/terminus/algebra/terminus_algebra_21.png": "abe6b89905144f7d221ba9ed154a8b09",
"assets/assets/terminus/algebra/terminus_algebra_22.png": "214074ce7e4db0e9afeffade92b4bfbd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c5f4ea02e0029015e0eb7843b9388723",
"assets/NOTICES": "4937f0934217e47a271e7208842b8e9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4bea656da799778a27d94de3e375ee2b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24724ce37771f194f77916326522062c",
"/": "24724ce37771f194f77916326522062c",
"main.dart.js": "6ac2295f402835d3d3c5b37fb3bf8625",
"manifest.json": "ae0789498e713657cdaaa9cfa0500c1f",
"version.json": "867f2efe52491afc06ba7b3b91cbc24f"};
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
