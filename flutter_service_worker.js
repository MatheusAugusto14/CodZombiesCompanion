'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
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
".git/index": "2e52770eb724e4e2bf877c2ba010d2ad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1305da822b93b906c8d61e198ebac69d",
".git/logs/refs/heads/master": "1305da822b93b906c8d61e198ebac69d",
".git/logs/refs/remotes/origin/master": "b418fe43fca135325e75e97170f3f4e0",
".git/objects/04/387c9031ea7dfdfb3c4cd23dc74ae786b530fa": "13cd4cd3d269d6b72ce183facc699283",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/539ec047cd9f733d1bd3d7af6e230a6b0e0f70": "48af503e7b793eec821b775c0d295647",
".git/objects/14/b7f723b5ecef585910ff0da2db98dd50ea4371": "fdf00b27574c717ea21a0649af866d53",
".git/objects/1a/528f9ba5f50a3f8e068e2014cef7aec326b0d5": "b80c853227ab17a201c87179b81e2a99",
".git/objects/1c/feb9f01fef23a3845b39d3be00f75bf8c8cd65": "868c2c1c66f3a63644ec2c27495ff2d7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/e12c314635a429a6bed20f62c9287f9daa854f": "bcd6c3916108a497789923c93a848268",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/a49892dbb5b6df7ffc38bfe19eb68681e97944": "0e55173a08cc783f56fc28acd3122953",
".git/objects/29/e1b0b59c4ebff3134a0acd174cad6081cb48db": "2c88171aa5399e6e3ffab327123aeb3c",
".git/objects/2e/95efbd82fc7c310e038bcc00203992e816d785": "f1210d36038e75c2c784cbee13fc9f46",
".git/objects/2f/6e30ae199390201ba3701c650a4e2fabacf892": "3902a67bfd4d7bcf47ae297e5b7e4132",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/69473dd2918468f379324789c02a1fabdb745e": "592ee77a2126293e661a28b18af66bc8",
".git/objects/3e/2448248e2201e1dcca8c5e0294fd06d540373e": "6d4a15043b60f419e3fd5a88157bead0",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/a20712c05d022bc1f991186d6f9d65d626533a": "b21427272fbcefe0389b8a75bac6e30a",
".git/objects/50/b8dda0a75de1f12d9450d6d0a33d5ee2ba1f80": "e05b90fdb481a82399b80d65aa9aae5f",
".git/objects/55/c124b5ffd2254302ca170f7a3a1d7610e9d1ff": "c0c1f315dec894100a532cd85dc6bf3f",
".git/objects/57/e69931fe217b280568440e01700b7c287bc2ee": "de13f6a1c7915ec918ece95de57d5a7b",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/61/30d34ce4332a8ba85fc719febf49061b8f3e3f": "d46801c711e25538b4458360fcdabdab",
".git/objects/63/8dd89fbe61f732f431b31115526594c495de1e": "b437c83f0742f45303de16d8855cecf1",
".git/objects/64/8e64c5b9e9d25b3acdd51a904a85eb53800afa": "24ac5aa64d256150b1e16d27d191b20a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/0d0b7de26a21a2529fae15981fc31f31f16780": "2fea9d50b92ced7623866030afa78c75",
".git/objects/71/9372774995c971c8eebcf3a2f375b5f770552a": "2cc7253313e6de1e09d544c7223107eb",
".git/objects/7f/54965fa7850c997f5ae480561b7abed8992c6d": "2ad277668873e05225a89003217aef49",
".git/objects/82/1b6bff059e09ee2c4d6dce5b70005051be8807": "05537daae4459bf0d42acaf1ad44fcf3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/c1a92391fee4fb245031522ca701d99d936c73": "c1815b5dd27a0890ef0b2137fb897b8e",
".git/objects/9c/e23fa518ebda96de43c48085b2fe6dcd0f073d": "77145f26ea03344296f674d43e240acc",
".git/objects/9d/62f0a2a8ecf2fa2584789ec42007d6e35c4437": "c75182abc7f8731604ea25b3c9ec0c3f",
".git/objects/a0/5d330ceecbd7fe8694d86a865753bade9d5755": "03a9e0c0abba14d3b9592d80e1937baf",
".git/objects/a6/9015ba0b52d8451017e78465c19a8ca6d56cd4": "75ec909190d87029306bcb96e5a40e1d",
".git/objects/ae/0d733b8ed5a778da6fcf64121d342cefae4995": "1a14bbe6934d1920ccba92f5171f0459",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1c26dd7239133025451c09973372c2c55b108c": "d101dbd4e389fe15b08ea4b5319476c6",
".git/objects/b8/b9c11ab869b86d62f759e4cabffbf6d4cd5f56": "a27628f6910656ab22f0d3f9b6848d06",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/fbf7beb6bbbac6f612e34ae8abe0060a752c98": "832d39125efc3ceece759b92fe0b4abb",
".git/objects/bc/1567067e61ba5e7369a301d4afdc40e65e62e5": "59f8ec0e25e041ed72ebc6980a4ec2d2",
".git/objects/c1/faefa7897eea84b9b3320e73a5a22f27f662f9": "7b57d29858a87642dd29dd82c051a0ee",
".git/objects/c2/77a930bb65eeb52348d09101b7dec5352308ca": "31e627b5cc44f390cc9c60365d8e52b0",
".git/objects/c2/dd3740a0059d68a0d4d290a00128e8fea585e5": "05d3adcdda5e7f2cb353bc428acdfbe2",
".git/objects/c2/f8bf088179f0c3f22f40a04ea624fac88a0960": "cec64c5401bb5c2db339678d6de5e629",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/6cbcc5464d5d9a8f9d69a6cea232934706b655": "78f042fa46d74150ab41dd1a340774da",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f000f890dfc9f9c662b764d9b0cd5807aad997": "4660e0077f184af547ec971be7a44240",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/2ffa1f4f2bada52bc95ab0a4f755461466a0ec": "c20f954b9276383a0738209ca96c803b",
".git/objects/df/99a00d7b69dc86b7ce270929c6bacda553cc24": "3b07048b971deac6c03f5c925ddfd1fc",
".git/objects/e6/321e3844b10a26efde4b125d20d17d5f84cb41": "2c627969afe426fb14e04e5836617316",
".git/objects/e7/7258b6fac805ed404191ab3c400b3516b7c939": "0071f25b5a0774a3778ce007db76451c",
".git/objects/ea/d84171c255a6afb5e0b8115fdac359409163b1": "7db4c1fc757de0e02d1a6cf4c1f64c71",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/ff63d868a570647bc5b5570ad475f67d13b9d3": "7285ea37172ca2f355f75062473bc6dc",
".git/objects/fc/e43f24e233a7aa02ae52c249f18e7e2f5364e5": "c48e14c2bf36a121dd7cfe9f472c2c0d",
".git/refs/heads/master": "b0054b8967beaecc00ab534f987787f1",
".git/refs/remotes/origin/master": "b0054b8967beaecc00ab534f987787f1",
"assets/AssetManifest.bin": "50b5086026a4685f45bbac871b1b1035",
"assets/AssetManifest.bin.json": "f6f77e9d2c0283b4a88436377c59fdc5",
"assets/AssetManifest.json": "552e9d417fb35c53d4a3e65cf54dea2d",
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
"assets/assets/terminus/algebra/terminus_algebra_0.png": "9af762d973c726958f5a7a081c8613e8",
"assets/assets/terminus/algebra/terminus_algebra_10.png": "f8da4a0769dcdc22b762a6044681446f",
"assets/assets/terminus/algebra/terminus_algebra_11.png": "b41b79dc92bc3f8b6a58f223ab4f0004",
"assets/assets/terminus/algebra/terminus_algebra_20.png": "92a28adffeeb82c604b80e2f8091c8ce",
"assets/assets/terminus/algebra/terminus_algebra_21.png": "abe6b89905144f7d221ba9ed154a8b09",
"assets/assets/terminus/algebra/terminus_algebra_22.png": "214074ce7e4db0e9afeffade92b4bfbd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3d6b3b59695ee6a2573b12b491b1d503",
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
"flutter_bootstrap.js": "91e7409f5ad6a7b2376529941f54f726",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24724ce37771f194f77916326522062c",
"/": "24724ce37771f194f77916326522062c",
"main.dart.js": "f2b97e52ab518f793010b8c7a2bffdfc",
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
