'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d568597701469d56e8d82a513f1cf25d",
"index.html": "80c1143577a6fd76001631dab268e21b",
"/": "80c1143577a6fd76001631dab268e21b",
"main.dart.js": "61f89da8d1594f76e3273f7e59a94f98",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4cafa6309a40df778aeafa0a3090dcf5",
".git/config": "c0b8329fe766ad224247efdab8fdab48",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/5d18586d74cbf73917697ed0054a5048d3db29": "b1b6dc89ebe90df2b557f21f05197be1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/5f/c741d46ab384b235c2a36d13fc55cd37b72cdb": "41b06d7933749062d170b7fcd1564427",
".git/objects/a4/d495602e8ea91441f7829a27219669aac0a152": "c52bb81a6236602705d6bbdf02289fa8",
".git/objects/d9/a9fa9178e7c700acd3b48836d2edb4847857e6": "47d847e6e261f273b035d3b8c10fc4ee",
".git/objects/da/1cd13693e7a8749b868f6b39e43191ff939ec6": "2f6153ff51f668072283744ffdc4ac07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/031f2b77f3635e0ce8f05bcb1d7958c09452ba": "ca1bc65e72ee1d032979042398fe5854",
".git/objects/f4/a15bb513898ad21ea8f5ba055b248745f32186": "bfec59197b8f2f7bae656da9923a8913",
".git/objects/c0/709fcf0ad6f7221841a06b8d340c7b79b800fd": "e8fd679dce68574b80bd154e724ec03d",
".git/objects/f2/2f006ab3aa5e371bc6f7614832e9280728fc3b": "78126122cbd5c5a35c0ec708a78413b7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/092f4a4759e3844c1eb74f524692296dae86e0": "8f4b8156720635de270a805436346df7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/846dbbd9378227788ace85efc95d8a697d71d5": "a326a7e61cefdc1f6622c110f014be76",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6e/494aa0aff817096a751a0779cbc73c517325f6": "25b8972e82943eb04e2ef53296b7528f",
".git/objects/36/44d2efa559a6ed1c3c6b82b249f2ebbd2b4095": "36f0bab1208178d20dc3f1db5f1c39ac",
".git/objects/5d/d4918eecf74fcb5b7200341cbf4f075c345276": "b57e2fca36807227990af705ef67d9da",
".git/objects/96/c5c7e7851335207bd51b9327eb372e87a873c5": "a8fd954039eaa41ed7f3c554a89b4349",
".git/objects/98/3821fc6afe2063455e4c82b074c8c736ab3064": "e1dba7c567d295ea6f45648fe595ae60",
".git/objects/39/facefa0b91886d03fa76325cd4455bf7bbfe0d": "69efbc1524bc387bbbcafb58610da0da",
".git/objects/39/4db1d0c875eea5a6db68ad73f9ddd10bf95569": "994d62311413a580eac7db70d757ab93",
".git/objects/99/c9114063b16f05016a7af27ed96361a3325a1c": "0aeff82dbb9ff10ba5e14066c3588a1d",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/e510dccb721adb93d2ded3104d88fdb15c93d1": "dc9bc51600d7e1aeeafa3eba0cf8ad8c",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/b6/a33b0ff5a949e80862f43eda5e70a154389d4a": "c5a577efe567a001105adef3bd688129",
".git/objects/d5/5000a5947c4fb528be3bb25d303cce16b901b8": "048a075ee4dfbe690bd31157e03b4338",
".git/objects/aa/ffc8df2976321987cd3e970add00b02e58cbb8": "5ac0a570f646dc97a0046d76462843e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e76709c17bdbead51d41b9a405b298153715dc": "b0cee5a8bec4d66e1522fe60db895eca",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/507420842d4b82efe347eee43bd658c24da84d": "1fa5b702cb9040f7870aecbb4ab87276",
".git/objects/de/c3d01ba97a66f057fde1ae15eb6c52b8d67c69": "ef1568d8e6efcd13674730ef867138b9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/2499c677b158c88f17096a6865391dfafc2ad0": "f44395d8192a6aab2562862f70abf9fe",
".git/objects/c4/f15165875f480b63c95b74a7b2736388b1f934": "f68a219dcd17d8e17d1c1a1331632245",
".git/objects/f0/5c3af5c9c76e3add76541c08faa60ba978545a": "fcd7b62abdf102420ac5f1fb2c40f1c9",
".git/objects/c5/639c2862d524fa1cdbd4edc767542b23b5993d": "21846492f7da9b916d10cf481c5ebb3e",
".git/objects/f6/c5d083f45f1aad3365f0fb02115c2f6b464598": "34664e5c8a4efe3c1a50ad430264b137",
".git/objects/f1/9b1d0f8c3cefcf578eea5a4419dec61ae61a73": "44b25e229464e6c91bb7f800cb044b5b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/1d87fe73cac8bcaa16e699a6b04abd5265344c": "cc6d31e50ca2bde838b4a4c8029fe204",
".git/objects/41/48ab34c3b8927e1622bf60c293c7099a86eb0d": "1f9b272e8a6adec085c17d56f96c6487",
".git/objects/84/79dd68d70060e4780b79c3e381e7811736aa53": "0297e449c09e06a0b18f79043f78982b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e7db4858eadb696d195ffe8ac35aa056",
".git/logs/refs/heads/master": "e7db4858eadb696d195ffe8ac35aa056",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "faac5e4688133e07ce5501d1ddaf94cb",
".git/index": "61f636ce4e862552f3c406602598aee1",
".git/COMMIT_EDITMSG": "c9965d63465c25393233d56eae12d4b4",
"assets/AssetManifest.json": "9f798bc13a8dda4f47197af4dec056f6",
"assets/NOTICES": "1ded4d3d7c98246c6ffaae61475840e5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/hold-iphone-pdn3x6thucl06okndvcoq9vb2ljq89sy3t1hse0ku4.png": "237dbf80ff2905d3c3b26f417dca8e41",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/67021-love-animation-with-particle.json": "3e8d350d294619cfb5ea1ddbb24ab1c5",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
