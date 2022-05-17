'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f361789a4babd2daa04eb492d859532b",
".git/config": "fee9721cd44a3480e86bd0eb0ee59f02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c42457cfe07e3e53fdd8a2c96271c9b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14dd8fb8967602c73f12cfca4a7278ce",
".git/logs/refs/heads/main": "269f62f01a8d1fd5c40b8dc014ac5f9b",
".git/logs/refs/remotes/origin/main": "ea646a7198821197f975db085992b93b",
".git/objects/04/9149cc6ab557f8db36a51d32538b15ddf5f5a4": "bb5ea4639e9597e4dc30e0fe729a025b",
".git/objects/0a/61e1a0cdc1814fa52b74527ac48997417a9672": "5f746eca3a1beb16cf0e89f297e4e82c",
".git/objects/0b/3466e9059bcc60acd1b0bb1b4d9c8126e241af": "4948cc967d1dcbe97a0afcad91b63d31",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/13/0cd82676596ac6ce3dbd14879cc426e63d1602": "bc4251a6562339e2d0939c1c01a50260",
".git/objects/21/13dc6dbd63d4ed6fb227fbfc76577accb3e707": "11786a6241f3420d6df021924460991c",
".git/objects/21/a6b41cd4cdae45b2c627333b71b90d5cc9be3b": "f83653bd51cd3a577cd53440008cffa5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/a4f6b7200b91185d7aef7d7723bf1a2a711dc7": "c9a1b1291a79a956c1b47f91d8f93239",
".git/objects/26/c7c86701affc656a686abc8152b7faaf7402da": "745b26d21dfb4c008d7b37e90c6b90db",
".git/objects/29/db409654ceadcfb4b43a61a718207c77cdd52f": "6c9023ed50c7c0736060daef39ae5bf9",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/13917010e89a3e968feedbfa615eb318af88ca": "30174130b26c9087c7f6a2f0b40ca493",
".git/objects/36/cacd5090eb272a4a42de2b79ff3280f1801cdf": "65fb5ff735afa030e56d67fb09ae5da3",
".git/objects/3b/4293b83e35e5be37c68601791bada583b9e953": "4361e41a9ce954e05102e0cc3f944c05",
".git/objects/3d/a4385e1110f514ae5633e31bc71bcb605df5e7": "097281f14632544a5523442803e639e9",
".git/objects/3e/d661a3929c981f37507a4b4e8878b74a739fdd": "cc348b074c2c194876b8f2cdf3a621da",
".git/objects/40/18fd075a5f28d91053e42f32df28f4f2da6cc1": "4db496332745f21c583bdb7b4d8a442b",
".git/objects/40/90fb004d73bb2328431483b916a82179a985c1": "6219a962a19b034e228b33bd38f66bbc",
".git/objects/42/562f7901c2e7325a4ca03115e4bdc86103f175": "35da0896b00d017c709389a6ef8164b0",
".git/objects/43/ab5d390568c0dd0adf97d1d0c543928db5e9ef": "5f58b600cd1ba150410d97f796c332ce",
".git/objects/44/3ff3edebe06555cda7d3c39402718a6845070b": "6e457adb41d8d731f3c53f837763be24",
".git/objects/44/4fcc3d5a4a91e20a2d2146bbbbb16e6bbfac7b": "79ab932c54b7f99608dc0e9ed622c399",
".git/objects/45/a8b6fd815cb8f52ff6e536252ab3be9924caa0": "4944831676c6dfdc6a380914ef5f0fe2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/58/3f764e7b7f1a750301d68965a18ef80a945324": "9fcbbe1ba27cbfcc171efbc50944be68",
".git/objects/59/30492082f96dc4a5254db210fb4ae13095d4a3": "71bde08b82203b2a77a00cd55f0f53ad",
".git/objects/5b/ae3402e0f039fcb1a2823f9628b574cee3445b": "a8cdcb9a4d4ef3c00ba00c4af6a2516a",
".git/objects/68/76477d19ddc10d13316d2873f870c52093450b": "f61c81c6f713b602b215571dc24c3ff8",
".git/objects/6c/b27dfd4029211dbd37408189f87e682f6f848b": "e3c9a458d624a92b2c9be55bdeac4e9f",
".git/objects/6f/0822966a331cb0f69e41ed0bb6de44de95b74a": "bd304d2715cff8d7cc40da4acdd4cb5b",
".git/objects/72/d611dc874bb16252ff03dbb7cc5da9a231483c": "0be1cafd15d1bb6cbb3398b059b4df8f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/0ff6a28496aaf5bcf09b0af7a88a431bbe1c41": "740e79d8b3c49248e37fed87e4ec612f",
".git/objects/7b/9986445776635b2831ce887da4ea03ef27bb1a": "4699413aafa67f771d2fbf7c7376132f",
".git/objects/7c/89a104f8025b09440328282d82742a909d122f": "a1e5fda62812464ecf5dbbe20e1a8542",
".git/objects/7f/34db58f548394912b63c1a8aeffdd686f363f9": "3d053c01974e23cc384aadceadd71abc",
".git/objects/80/3c710093c48b912980bf1d842c010ba36abc0f": "af4e4807048560ae023a21dcf688b3f6",
".git/objects/85/039e5af8f42fb3832d3e0b4469cf6066fcd2c4": "757409438c712528d04def194a8e9b50",
".git/objects/85/6e4cec86c0f18057c1e2daafa86f5c59974619": "6d73876887c1aa9891aa05bd8a70702b",
".git/objects/87/9ebf26f96bf6ff54ff54fe7abe1565c2a3c4d6": "cf299d70dfcbb5d13968ae1dd4e8a57f",
".git/objects/88/eed2e5baa736419a3f0a1c4279193069e330c1": "ca660b1075b56892a9ffddb04e175f51",
".git/objects/8a/7f7d767f7935156623d7868674af7458b48b46": "70981b969b20b7ed398924f20be8322e",
".git/objects/8a/dd42b287b15ab94d5d81442b6e98e68c7b7f21": "9ef42082b25919c249d2e394b11ad78a",
".git/objects/93/ee8b5701092e0f043861b8af6b8a1f4b6eb234": "86fc66eb5049a55876b88784ecc7118f",
".git/objects/9a/2dad0aa683a1f4fecca79c3be9ac28a92f796d": "a3c5b050a41484b14e7388346f74fe7a",
".git/objects/a0/c718315cacc60ecc13731526971f77d82e3891": "3ab37173d8db1e692fe47a2172f8f2ff",
".git/objects/bb/b5e3f9401867ee9ef16ee8c5e5bf98cf8f67cb": "8e85b2d6b15fcf2947099640d63652f6",
".git/objects/be/cc90794287099a32f1fe5f4fe80933fb2b7220": "fc875eaca2e1a44d3ca42b14496a49c1",
".git/objects/bf/d61bf836a3bc6c3be34f51b1d10c60b4711efa": "29424427ae459ca69f8c5311d70540a4",
".git/objects/c1/bc6463c13728b2e70f0869c9824411677f9557": "4d468f980598feee90bdadfac4f309bd",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/00f5799c940dfa2c1c83d3cd837288331b29b2": "ab669b3e7ae7a6c48cfbe3c1c7194485",
".git/objects/cd/e363236f0fb3d82c9524d67e5da01411a6768a": "5c7211c9e9e41bffc6a18d4385273a6e",
".git/objects/cf/6464b3de07edc73cecbead024e806fb2470b35": "4600ff9c08a183dbeecd7c1400bac8bd",
".git/objects/d0/d59c3ad8afda9e98f516ca2b7a09174da0e3a2": "49b5ab0d0c01edeedb400e99097105ae",
".git/objects/d4/a4fe5dd4aeebf0da2d176fba46a66c3ea08b02": "c1f31f3ed91cbe154353f2db42b243f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/b9f439075be16b5b814ef9597242de9265491c": "801e7a86665244bd0344876fdf26c580",
".git/objects/df/544f9bf7f7625cddb16fa515dd44523b43f5df": "19f6a01faeaa896c28d09522d1ad21f2",
".git/objects/e2/2f4429603a268b2eb8ca5ca5ea44cd1e3bc438": "8039db89f5467cebfa751394de4a6b35",
".git/objects/e4/d63c0e63218be67debce837d0f11017414b3ba": "8ccfbb828bc38ed7c4c38819bb98e68c",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/cd6ba4720e0646873bd2f4f783e220b89d6e00": "a60c0b6a2b35d9e50e33b14d25f691f9",
".git/objects/e7/2c453b9ccc2dc52cb3e348d7e9ec1b99c3be99": "994a1eac8ea2828660e425662783ee7b",
".git/objects/e7/9a4c1c36c227890bdfba2c42d8e1bd7ed7332c": "03d28a9cbd90515fe632654c8a08b54a",
".git/objects/e8/4ca7678753b98389a4f0e7ce4eb1201b0ab640": "b147a13fd82bd79bc87674bc846f7560",
".git/objects/e8/f8bc732f8e3beb9165d38eb82f77a1dc5c2706": "4f0889cc2545b45416d5703671e90c3e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/90796d92d12e63b4027fdfdcbcc4a9dc33ef07": "77d5a4d58d24489ab30a4a040550ac35",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/59c08b2c395a34fe58d342056da2440d3d0659": "de306da3d340a3a4d007c082d619aa91",
".git/objects/f1/764183f13d16e7ad2a1dae58b503c728484505": "0c6cbfc720022ff4da971b4bc26357cd",
".git/objects/f2/5d72829cc90fdd1e256f069c4fce4214c6e768": "ce37b531d7ec6df6d2fd1b0c3dc906a3",
".git/objects/f2/cce165562788288f7739ee22917fa18022c5b4": "0d024b5b2bc0d22fb161b8d2b9813151",
".git/objects/fb/df5a2e3a2a3faede070df812a21001bd1b1c32": "5888598d8bf537c466758d119b601a6a",
".git/objects/fd/f214df2a2e7da278418723f357515e45c9e87f": "052a5fd16f4fef0a541197158046a927",
".git/refs/heads/main": "d2f6884b7cb2f8a15fa3ace458f282cd",
".git/refs/remotes/origin/main": "d2f6884b7cb2f8a15fa3ace458f282cd",
"android-icon-144x144.png": "b0e6336ea2c9ab964f066a19c8298205",
"android-icon-192x192.png": "d41d8cd98f00b204e9800998ecf8427e",
"android-icon-36x36.png": "b6b2f71f4eacdf02190cb3233f9b49c1",
"android-icon-48x48.png": "9907452dd1a4cb23a63d63a54f1f4c23",
"android-icon-72x72.png": "632221751c5385fe44a12484a991c9da",
"android-icon-96x96.png": "1efd0af0a7844afd7dac1e0c7dbc6f14",
"apple-icon-114x114.png": "1d7dcb590cf9df917e64f04ea6bf6394",
"apple-icon-120x120.png": "695a2c142f5fff11960036d554ee00a8",
"apple-icon-144x144.png": "b0e6336ea2c9ab964f066a19c8298205",
"apple-icon-152x152.png": "6194da1403a8fd620efbce1bee35a610",
"apple-icon-180x180.png": "2cfb705ebf07147b7a4a4cdb9539cf5e",
"apple-icon-57x57.png": "e79fb0e11395c6d5e331fbd248ac6f36",
"apple-icon-60x60.png": "f40e7272f9f6e749462b4fa37ae8cc56",
"apple-icon-72x72.png": "632221751c5385fe44a12484a991c9da",
"apple-icon-76x76.png": "ced944e06b9f5deaaf8bbbf48a744019",
"apple-icon-precomposed.png": "1aba7d6d012ccfb570ef383a32a0f78a",
"apple-icon.png": "1aba7d6d012ccfb570ef383a32a0f78a",
"assets/AssetManifest.json": "2ee00634a0b2b3384cef797abd87e290",
"assets/assets/fonts/BebasNeue.ttf": "54413459a5adf3f82686db50595cba5a",
"assets/assets/images/add.png": "bd453c036d9819676d0e433e1b202743",
"assets/assets/images/avatar.png": "65ca7030c51e129a3567bd1b9a6b775e",
"assets/assets/images/bottle_outline_image.png": "a533075f785c730ff81e9e6978436700",
"assets/assets/images/camera_bg.png": "69bd693d6203440491c89f61eac319b4",
"assets/assets/images/categories_icon.png": "83b81d8915921fd7d55445122d3c74a4",
"assets/assets/images/cheers_outline_image.png": "1a6c3fa1d157409c4e43345251773675",
"assets/assets/images/credit-card.png": "197291500d8ce4bd932a03559b20fd06",
"assets/assets/images/dummy_image.png": "3422c63b142d42bd93d3e5b7e10caf36",
"assets/assets/images/empty_ing.png": "69257eb6a9c3c447e4251fc270c4e91e",
"assets/assets/images/empty_recipy_cal.png": "c54b04141d0c6fabe0006c0d459b4026",
"assets/assets/images/home.png": "2ed582f9aa068304d0bd98ca89f598aa",
"assets/assets/images/home_icon.png": "fb877d6f5847c8b3c0e5aa4bba9ab6ac",
"assets/assets/images/image.png": "4baee5f30d9d815a35d01bfb08efcd32",
"assets/assets/images/ingredients_icon.png": "f8e891f7bc58ce40f0e4fd083beb4048",
"assets/assets/images/logout.png": "02419bb395c3bf801efd141ade3274f9",
"assets/assets/images/menu_icon.png": "bd267c64217fd716c5bf31586ffe5efe",
"assets/assets/images/pf_main_logo.png": "3f8fea152da15187c226102c6abb84c4",
"assets/assets/images/photo_camera.png": "3e3c28e77288b7ba320accfba4c6aaa2",
"assets/assets/images/picasso.png": "ad686d702bdadfa07143b5f576045744",
"assets/assets/images/purple_fizz_logo.png": "769b4bd6474145496bc64335c4ed59c9",
"assets/assets/images/recipe_cal_icon.png": "5424a9f02385bed19fb799e1d16f9d8c",
"assets/assets/images/recipe_icon.png": "2c51b50acd4f5b46dd362fe148893585",
"assets/assets/images/shopping_icon.png": "0fb13ac9695ba59b164bf51c21d4cfbd",
"assets/assets/images/sort.png": "d3c20c93fa8651fd8a07ae7fbdd38e9e",
"assets/assets/images/toggle.png": "ed6ce00b48dbcca7927ee9ab65adacd9",
"assets/assets/images/user_icon.png": "4671f2d1c8d097033d043777460fa013",
"assets/assets/images/user_icon_filled.png": "087125a4ae76ea67e41cceff7f64dbf8",
"assets/assets/translations/en.json": "5031fed515e8cac3546f9874cd7f0f46",
"assets/FontManifest.json": "2925f17b036f844d8e42ff3efb302520",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "fe2acffd5be78f591677ea0b6f388ee7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon-16x16.png": "951e3b018efdabaa64481c294d6b1ad1",
"favicon-32x32.png": "e30a2d8be0930fa21f8ec8994d29b23e",
"favicon-96x96.png": "1efd0af0a7844afd7dac1e0c7dbc6f14",
"favicon.ico": "f450fbbd77e042dca31f6c45477509d5",
"icons/Icon-192.png": "2e30ba2f88603b8102582bd5545632be",
"icons/Icon-512.png": "8accb4bfad61d1af803786add0e59844",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b74a039eba2052a0cdf820ee2f10cc96",
"/": "b74a039eba2052a0cdf820ee2f10cc96",
"main.dart.js": "d3cd5530606021d7784bc5f030b2f7aa",
"manifest.json": "2af61e0ddca0709100f9d96649da5583",
"ms-icon-144x144.png": "b0e6336ea2c9ab964f066a19c8298205",
"ms-icon-150x150.png": "12ccebf1942e09c92cf074c266506932",
"ms-icon-310x310.png": "93c9cc45b0344776569d72e6ee8ad006",
"ms-icon-70x70.png": "74cbbab68de12755f75e59c929f9609d",
"version.json": "cc3dc05be9d4243cc14d7b6c7e034111"
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
