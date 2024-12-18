'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "79abb11a4b6ff2edfa4d9675d3a421ea",
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
".git/index": "e4f72849172aceb7db6112637fffb97a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5760da1282f51dd98221382fbedd356",
".git/logs/refs/heads/master": "b5760da1282f51dd98221382fbedd356",
".git/logs/refs/remotes/origin/HEAD": "437a620434bfb2133eb45d1f07faf6b5",
".git/logs/refs/remotes/origin/master": "66d2dec5bda128847936068995c2571d",
".git/objects/01/b9c5fd5dc1cd67cdc817ab995ebc8486ebc8ed": "32b9a7d22a224c5235ea73428940eb1d",
".git/objects/01/ef39ce46c566b3a8f6b6d3edaf6a6b3d912f58": "6e96f8160bdd11c946dc76606e59e66c",
".git/objects/03/a00b519590452d29641d4fdf54660e32523972": "409bca524f38f29f88dbd9da6231732e",
".git/objects/0c/939e6ce88040301bc6a424370fbd7e1d1da2a3": "1672b73a85bcbdee7693eca6ae54e57f",
".git/objects/0f/e381c70f10e3ef078285a501777b46a0333e0f": "d1697cb0db29157533f1c0653eeee29f",
".git/objects/10/31e325dc54f0a8952926d4478a0bdfebbe6519": "95d9e395ce93742551c9d14fda85be45",
".git/objects/10/ba1eaf0a4e01f6bd803518d11e32c13abebf75": "297636c5bf5f4b4f6fc242e8b27e76d5",
".git/objects/11/32ff9b653e7cdcafb1a0782efc2bc494e92b91": "89932ad5271a3e90888854eac508e24b",
".git/objects/13/03e135b9df338cc002452de5fed01c7bbb55aa": "082737edbdce32de378283de9842cd4c",
".git/objects/13/58c674567b031982e1e931289cbb2f6070c3e6": "fd6c5d3b9d9f31d680afead2ed4634c9",
".git/objects/13/e377255bbb0eaf9e30b7be833da0790d08d22c": "f9dc24d6ccd3045dfcf2b71a445afd2e",
".git/objects/14/60332888000517612d8da425bbd410c4df8c00": "7bb38cfd7bacb66c9b37e85fbfaed044",
".git/objects/14/9a8a54ca1a788ce178842d5988906bee8ca3f0": "3212a33fd77179cabd0b65f1c8047a19",
".git/objects/15/1b12d82a364b79d60ddf0d6caa934697a2624e": "c0ce401f26b7ea18d4a92c629d346317",
".git/objects/16/9a09b962bef7a54343b711077a4c5aee261b31": "bf857bbe5009e47f822563a8b0426cfd",
".git/objects/18/126f93578957d5da864b649e035feaa7278154": "b6cee19cdd95f814921f34b22da257b5",
".git/objects/1c/dd92d7f696c541184fb54a522a0b7a7617cc2a": "d36c0a43d49ee90bd82e83f75e57ced9",
".git/objects/1c/eab3630d13da79ba46d1dc05dca14f3b2d02cc": "83b17de7bb44e8833d44b60c796122d2",
".git/objects/1f/3484042f3615f275a64ff55252d07f909f23c6": "2291e8f4571d3286104958b66d453e0d",
".git/objects/1f/50637d4b86392746ee1e4075deaee41711039a": "dc2daaa45c13d20a8f77e4b3138a3bf3",
".git/objects/1f/cd5c7dab4c9e9da7470e45d998281976e4f0e9": "103e268271a1aeb6abdfb02ffd6c5bef",
".git/objects/21/238cd6b6e3bc962d0effcac6de574b1bf00191": "79730c04fadd9391d268755fcf2023e1",
".git/objects/21/246d89cf1498fb5c0b6d7ca5b6c11235744543": "3a392c750eccfbc2ac6621e4372ca1c4",
".git/objects/21/29ecdaff8238d8f8c51f4448b1cda90f5e90e6": "fe8d22652e85e69ae1db2f3785858c5f",
".git/objects/21/a604166181e3d32af42dd2f5892e93b2264955": "0e9895945724455cf90642b9414dbb4a",
".git/objects/25/c3a9fc31c9a463b2e8b6c5a096f610c45bcce1": "2034d2027d890c987ef42a96af9a7e08",
".git/objects/26/6dac760f7e2b839c28256e6dfcaa06ec4a5ecc": "3cad11b5a9185eb250d3405fca19ff65",
".git/objects/26/9d3342ee65ea81e22afc7443a365575438a218": "61a5f87f35fff6a5cc586b16b42acce7",
".git/objects/28/0c7730b7a77ee9e5c9e94193551ff26b1b64a1": "c2784f53e39c40259b7d4de97e866be6",
".git/objects/28/127b32fd513360d49f95ffda9508060c2a80a6": "ef8c74a473f3f3333c304f204cc874d2",
".git/objects/2a/1f3d61bc78c4f24f26d849571a51db17ac3c46": "b2d2e37f5abf973789a956e4de9d30d3",
".git/objects/2b/93cfa8ab6068758a46b5b1581af4cf73ed051b": "ecebdefe7a4d40cc7829821e1af48e07",
".git/objects/2c/db0965a73258b460c0799a08fc963e7f52b494": "21ff6e7d6ee72ea141d5c24373a50a89",
".git/objects/30/b05aa6f1398364712812ec1b87baa0dca21925": "fc1cce0b21df0098f06e07c3e131ef42",
".git/objects/31/1456262fca5b8e6c17b64db75206974e8efa2d": "e38c8027b28d4374d0b3dc5c0a56d411",
".git/objects/31/abb6b8da3056d799263739c288009d45295571": "70e06a78cd5a900959858c0af07b45d2",
".git/objects/32/b06a499f07d3d48e3cf8753aafc55263816ee0": "b9a69521384b005b6a55377b234640b4",
".git/objects/33/0e0817c77cee1458ee3192cbda723d9c1e1125": "26e1d0f7d5d87b080b78c7d73f8a2c5e",
".git/objects/33/e16906f57d05ad1fa365171a7521b58207ced9": "46d8e7560c806af301b86778867409a3",
".git/objects/35/1fff8ca38ba46bebda40e1ddf78c3fd6e07cc9": "464fd9a1b2e9e56e853c56f856451e0a",
".git/objects/37/51b12d3aa1b331b6b12031d7dfa0a538d66acb": "a1e86a3381389cf70f278cc1125b6860",
".git/objects/37/60581bdfaf1110260ffd2f6aaf026a0d47b346": "a562aedfec01f4596d15832fa6484eff",
".git/objects/37/b49a5fd0d454df6f2d6b7a790db5f3e58bb216": "a7c2a088b9f0ec72065216611bb3d3f8",
".git/objects/37/e82a150f04528f3da73778e50c4ee753eb7ac0": "98656968aa2cb0f724cb2e54e16dd2fc",
".git/objects/38/2e61c26945bc09b8036eb1679136ce62ba9bfd": "9be6d73e7726b01b33bbe72b3e587528",
".git/objects/39/bc7a3c16c788517e546b9385f1c889dbdb361d": "21e03220fc1841d48428ac81a01965df",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/6715e4a7ebfe8b5972e1dad477a4010bfd96de": "748cd5ea34759b30f6974dfcbd0369d0",
".git/objects/42/9ff3d451322441a9af9a655230f44d254eba97": "0607f84aecb84a6298e8a94a41ea95ff",
".git/objects/44/664cae1353afde775f4b9dbd526fa9adddad07": "1b35198693eae68100e03de50fb0e3e8",
".git/objects/44/b5143b08579a506852817538327daa8c173ec7": "2afc201090ae7a2f06c2f73911d62661",
".git/objects/44/eb6665d6dd8c64ae0e57d0720c8e733e9e362d": "900ddbbc94a93d7d8f2ab026958e84ea",
".git/objects/44/ebaa9e9e984bbe93b6ff5c69f3c47b18910b5a": "b19748ce25052d3ef435ef817e345c1a",
".git/objects/46/d9886ef67f00ae884fb8f31d1189f70eede1df": "aeb38b21c0e01710fefb932f1c629b29",
".git/objects/49/77319ebbe6f48552adadd06e11c67c09687c4c": "7220b2fd77039c27ebbf5f76c4e7c02d",
".git/objects/4c/1664968ed7b14862b8c5dc94ea6173d0a3632b": "3a210b2b55cc901f0e6426b8ad70e47d",
".git/objects/4c/3810199d62754a353b972d02dc804aa226ca5f": "7154d0bec8f5005b573ff945f4b20fc0",
".git/objects/4c/842f7d2b306e5db3bc013ca3f126ff57effbda": "a2db552b2b744ed6649aef2571aee944",
".git/objects/4d/e48ee3c1cfd14d73ea841661ceaf34a28698d7": "51b7f4a370a8b3be0c6e0c99d95695d9",
".git/objects/4f/9c3752e13f7176560457aa0a810176bb7bab54": "5f596146a0adaada10e3f26d1446e3cb",
".git/objects/52/7f116344b1366bb6d6c8164b41d0f33b66f84d": "0aa4958390998ed0a5a9444207e051d4",
".git/objects/53/e9c758bb25a065694925f5e81a1aed14661d39": "906c5cc758b4e93d8e5a092f37b1cee0",
".git/objects/54/c429715caf504d2a3e390b84ead988ccd06066": "6c5ce9845b0b6a94079cbc69fd0e38f1",
".git/objects/56/64160c3e72f70f38fade3073a273203b46dfbc": "ca72f19b2b2d02a066e04262fc541d93",
".git/objects/56/c45f12e44c22eee674ee33585d8858ee6d928d": "926eb95f1057fbd5498ed0f8e60a6d08",
".git/objects/59/8d17ad274a26dc5d7d131ec58a91066d0acc4c": "0dcf1262363ad1d03cfb51732112a7e1",
".git/objects/5d/273a7130bf86b3f57baae6d1a6ed8695f0485e": "cf70a3e4fd86364f17bb85bc844f8e3a",
".git/objects/5d/73dcc65c044e64f34631d0f34449592db68ed2": "2d15e28c8e6e007847df5f3ebf421bd0",
".git/objects/5d/a47555c6db5d2ed6ddb59496af5db308976413": "57d2641345d3858b9dd1119cfdd04496",
".git/objects/61/9c9a68adb1d2a3e8ee519d09fe818ab2e04820": "e4936a22c0ec0d5c8cc338ebb7b82bc8",
".git/objects/62/3ad29191295affde2ede5a4ac6801b56d25134": "5551e7f2fb147819a643f3d77b8227c3",
".git/objects/62/fb432f1cb2ab6940d5d11c4b3a5c6a881890e3": "ced62cdd27a31ac1f09b11f7cff9dee4",
".git/objects/66/3f47f3cbb8f7e8b2d91b4255f4c56a246bbe11": "ebb192abcaa6f5d023262825cbcce81f",
".git/objects/66/6e5c92b73ae4142ac82e0730ca387eeee464fc": "169beeb2e8972b1780e8c8826a768ce8",
".git/objects/66/cede2727d039481dc44bb8162443a66f9851fe": "1ac45968009a7c26b1a0dce3820f26f9",
".git/objects/68/2268a245e999b1de695c45fcfe1cf23985c8e1": "8cc1b2a7ec3d5de5c70cd176f882205f",
".git/objects/6a/181defd840a1483696d7eb6e0c3da685510785": "3106b530733f5fda45d3d8c0578a6aaa",
".git/objects/6c/704580c1368551b326de8a9b7cc094cd8913bf": "06ad1b09d2affb85c7500f51c9b0cf25",
".git/objects/6c/a5453a13b80efdab7db7775dd900b092e6ac08": "fb75cd4feee05881fd4cf6f9b6276bc1",
".git/objects/6d/3ab72e90c09a20021ad5df90a6acf247e461ff": "9a9f9f26552fbb8e30fe5fc54eb0237e",
".git/objects/6d/91406174626c9949736b915542ee61973652f2": "505fd2c5104d6c2f07ce321a6708d005",
".git/objects/71/16025cde892f42169c7ba512a3edcbad01b983": "955993bdeb0ba20805c0bf350c0e4cc0",
".git/objects/71/9ccc3fc3d05842353a59b8f10a7c6d9af476c8": "f609e3b4fb2b832a53a0aa4512b4c664",
".git/objects/74/996be4ec387fd5b27daf83340197bc3d24c65b": "4e63e970ed53405c2fc919a6ff0e7727",
".git/objects/78/ee08f54f578101c5d6c3377d61c7d78fa33a6c": "d05b4f5c1f43ad8aabc0b544acf613a5",
".git/objects/7a/d7bdcb066d13febc77db740c3a9dc8fff4f747": "da4da8a5ac8c5b8524684f57ee103090",
".git/objects/7d/4b4bdb29024bff5a4509ca43dbc87a5fd247f0": "a65bdcc704c084bde07e9e69c9d2f64b",
".git/objects/80/37d1da9a8c9927fe35c557efc517acee960513": "adfe40dfd79a0312d266ebb0a0ba819d",
".git/objects/84/175cdcd8a078fed961c40cd03d4d5ad83ed40f": "8972ad894babf9a4a21f8b41665b2d6c",
".git/objects/84/377b15dea8145d8e3240e35afbfae9857b5df7": "3ff153e93c06678f0b9e1ace8772037a",
".git/objects/84/5a6edd04f5bc5513831d00c8c47ec8766e6a99": "c62d852a7416ca537b976869098bd106",
".git/objects/86/3ac181fce084b2eed109182266f8f98b6ed275": "99db12a7c99342d5693e5f8ea9e4e1a2",
".git/objects/88/d56687c53067f599a7e1e316684dec3536acef": "5bf4d4c2fd953874011111b347b93198",
".git/objects/89/026990a12b845e36bc02e3c4fff67a21923b64": "f4a460b4261a0f6ff6ee7e1efdf37fc8",
".git/objects/8f/8d19e9ca70ada73befb401f1b6c21351c6995a": "e60ede4dc206ce3fe52cce8d642b2c9b",
".git/objects/90/f260e86985e974116dc9b1457bb621ad3a7d13": "2a372e4fb1bac45099cca366fecee1e9",
".git/objects/91/ea9586fcefc90c05e2ffa4d106ce9b77d1646e": "d7446ef4731a8f6fe6519f9bb9f4a363",
".git/objects/92/e8310ae15532b32eae90f256ea64f05c2b9a81": "236750b732ef81fa435a185dc5f1fed7",
".git/objects/93/e82a6abccd736bb6f4f928b89b53bea701bca0": "7b84ca16231da2c1072e7f1f4695cf77",
".git/objects/94/360745b1f9f0f6839119a3e9d3cfbefde85c32": "578a259c109dc5251a4e1d6433932893",
".git/objects/96/b6c6ac4438db61a696752995f5164b47d19cd2": "d6017127e13159dc4e9edd3b4126c6e8",
".git/objects/97/9e4a798594af3efe03f941780f3e09cca4c9b9": "6f7859bcf2533f91b16534593be95a3d",
".git/objects/9a/dfc284141f59cb180eab7d239018975b0f2dee": "6bf050c751ec7317bbd5f6b10d3c27b7",
".git/objects/9d/02e169da2b02e7da132fd769181e987213f8fc": "dc7fbb4da079b00243fb9041c357d7b5",
".git/objects/9e/63609a0aa4764561e6082a049072360b73e8cf": "f2b9101377f514f86762ff2317860842",
".git/objects/a0/c0844fe34561ba1da798163d0f2ea207a6c05d": "658b39bbd50b5042846093fb901fd81f",
".git/objects/a2/fdaf2ffddd48765ba1662beff1d8158b13c279": "6872b7edbb31843fce90d4ba8442df81",
".git/objects/a3/860898a94aa1d471253a2c456dd806df4a6de7": "c00941d41a16ee31b5b37e521a81a018",
".git/objects/a4/8983ccdd1b75799b4969bb494c56c933c6fd8e": "18c632af11a0c8e454e017a22cb9b884",
".git/objects/a9/a519fa81767513fef68b99dcc7c8959383e543": "e9034989e432ba2f76b6a19ca5c045b2",
".git/objects/aa/46020234f608fc800bd8bf747db2699515a36e": "924085e0d1b3c4a855ad63f091debc45",
".git/objects/ab/bbc4d5c23fd23e27756bf9ae9f59e27a2c3b6d": "ec4245c71d4367a919bd96e7a513377b",
".git/objects/ab/d986cf08ac98aa6e31c159977c7cead0d89b7b": "8253e4aecd8d54f8f1431fcd1ab34212",
".git/objects/ad/c359c0d72c11e587cdbde1e15d21df995271ae": "07f522f58bb064ef8ae2153caed76649",
".git/objects/ae/0b4fc58851e47aa580ab596b8f31212c542e35": "eb73a5d78185c5984f07f9f83de0d5b0",
".git/objects/ae/df66d6f54e2298e5f4f1c3cf486132c13d11fc": "8bff66ba11381744fdc56ce94108a5ac",
".git/objects/af/485b3cd40eb041a667d7578bcb04e16e1603d3": "f540fb3e4921ab8a6e5a9f7070ecff3c",
".git/objects/b3/6c7962d6a8bb90d69ff5d150408323771c7383": "bda01596f24e309a8d7618669ae0f2ce",
".git/objects/b4/405ed3eb8c02a7c3de2ef9273701eecbbe42f2": "689a8f55e51a46e6802712d94d04d133",
".git/objects/b4/9ac28cb1bf4bf19d0a9fafb833faed0640033b": "01bae1b6a85880804e86f5264603be07",
".git/objects/b7/d0552739511ac00f308c3c95de0ae3f8896f8f": "a67e613ed04717a829ce8d91792a8d3e",
".git/objects/b8/081fde7c9ab4b6b268522f21fa4318d387de20": "dc39b7863eb3e93c3945829accc5c6d0",
".git/objects/b8/13a87ab5eb1acbbe1b2457ea4c227d7dc8779f": "11e58e19ff1799fdf1d58e9fdbf2dab6",
".git/objects/b8/b51434a8053bb36c72914eeeee64e9f3ad69ac": "556c5e5a7cddc301f024cfc8ffac4bbd",
".git/objects/b9/82c457046f4363d7eb0c0e5b6aaf5192080258": "015f69ab09dfc942f4fd2b630a0bce5a",
".git/objects/b9/a0f701ecd38458d2cebfc8f92042fd87240e4a": "0cff158a0392ddeda0dbee57c8ef48f5",
".git/objects/bc/652c497fef61336e3b6d8a76dfcf6b5414f9b4": "f7db20459d1a04c0abbdd76d157badda",
".git/objects/bc/87078088faa3dc16ca033bede90897902eb5ce": "6916137b599364a240f9c23c13dc36bd",
".git/objects/bd/a370aff8afe200f2f9a30a943ad1ecd8f67d2e": "717499b279fe32f3cd9d071698484244",
".git/objects/bd/ba8a1de66fe8b6ab4cde81bbe17d1c07574c83": "668c70c35e3cb3db987a8d923c9ec94f",
".git/objects/c0/55da795a7663cda784740d19864bf2a2811e31": "f0c9d93c2f014d558c4fbcf4f8ec8efc",
".git/objects/c1/628cbe77cb0403eab8cf8978ab0bda976116fa": "830ce0556cf4abbc02711e73f72280bd",
".git/objects/c2/2ae5b38d233da632d8b96158f7b5814ac2920a": "c92428384f66568313334d1ce485edec",
".git/objects/c5/58ec382077fe1231642cf066df659e274c0bb6": "94f1c437b5aa453d38ad6a83cae2a80e",
".git/objects/c8/bbf0e4d127f749dadcb6dce75bf72d0205feea": "b0eeabe740df33cc287f2e10d4a2437b",
".git/objects/cb/ec8732d782d61a5cb5fed79371a95892367fcd": "8a869623050f89fbb9d687ee8f05131f",
".git/objects/ce/4937217b1a8c8ad4ea0eec9fba752c39be51d7": "69006e37f818af923aac59cbf9e7e563",
".git/objects/d2/9499928b6396e8154eeaab9cf527c641ddc412": "a873e3644c81bc7f9f520da9064fd102",
".git/objects/d3/16c69bcf1028d2f16a567ca23edc4cea33f988": "af7fd33ac39c37c7de95d9434f8b96f3",
".git/objects/d3/261d1d9f2fcd150c7972ba913160bff3e27f91": "c4de6fb3c83a23c851dcc625b7d893bc",
".git/objects/d3/43ef414148f52daa7b645db17b6c2e0d114182": "f611b9dbca3de3b75bc4139caad7b090",
".git/objects/d5/39c138223000d52738e9b645c17ef7fb305607": "a801dd385438e1fc6d8c2d9b70c74fb6",
".git/objects/d6/85f3223d00278ced28b99aef7ec5ab0b6a04d2": "bba7377a7066d5a6e50b8f7b3d0b1906",
".git/objects/d8/62f555f43a51de6c7540cbe84b0dc462ff65f1": "006b182ad2b43ee18244b2839e82fa75",
".git/objects/da/478599d0397db4441222620ccf8d362b6263cf": "fb1f099483fc14638038c8c7b882fbf0",
".git/objects/dd/940571e004f544899603e5d0cd195a22fe6543": "4a513c2f11794765898b50f44c9c73fe",
".git/objects/df/7db62063bae4b543ac5b190fdbea76447a49d8": "685c2e91486812b5098a42fcbdc66c0b",
".git/objects/e2/9dabf8f6bdccbb21d440b9c130e87d0fed8759": "3e61305f7147f44c4b7e7233ed8f39f2",
".git/objects/e3/0d90d81b3227df3df3d9fde1ab7608ae9415d6": "c7d39283eb20f1c6010dbe7ace50a11b",
".git/objects/e3/2f0d63d5c02723cd36140e8bacf60a3750b497": "f25722839e45abfdb84860dd68dc0019",
".git/objects/e3/7906d527a26c7e369e061872cd494e322820cf": "515c75a6327d9353c8cd112bfc201a09",
".git/objects/e6/b5a72147c834cf08478e0d5db461a0ef669af8": "b072be0e2c1976f1d915f2ad6d41f883",
".git/objects/e8/135234973e512d2a4157efe54044826d210464": "c71e2ceda8724ae8031b97bab574a994",
".git/objects/e8/1ee18ea106110494e60dec198f34bb8d8a42e6": "bc4743c92a2b73f305e91f66b545b005",
".git/objects/ea/8f1f48a08323f870a91fe9fce4b447db62f8a0": "c9688b982fa84d977ee1d0aee5bed395",
".git/objects/ea/a7af9f167579e6ee90ab59e69b28b4e673abc8": "701af562599bae93eb7398683d3c9a3b",
".git/objects/ea/f9f5f20f09d46da8c1222e2e55d28dbef8c0ef": "99a666601053e6483cdccdb639a12a8e",
".git/objects/ed/178b302f61290fbe6d0298b96d49412f5f1007": "74416f05f390af912c91b08fb0975e30",
".git/objects/f2/886ff07b38ff9fd7f14a157a36ee4622161007": "17723e33d04c7410aba6cd927d822c69",
".git/objects/f3/62e411d5de11a74c35e668967602a109b6fb27": "a0a47ced115c7e09ad3cf7e25ac70d31",
".git/objects/f3/aab92b07b9d1f0741401e77dfd13fdff64f37d": "99d912c8f57d2df1e4f4b496ef1f0015",
".git/objects/f3/eaa65c04a8893ac173208298e5c87b6f2b7b1f": "f58f9feaeaa38c69bea8af7230f7a5bd",
".git/objects/f6/0196e2b4cb87e49614ef0db9bef44ad37f5724": "49ccefb649463046d804adf240a50d9f",
".git/objects/f7/73143748cd50aaea0611f34ca62e0671f866ec": "2e67928982d42cbbe5b77ee72250e617",
".git/objects/f8/13d0e28f8b41d8ba7e83233806707b444be6e8": "c8908ad5d1d6c8ecc7fb448f9c8f6b69",
".git/objects/f8/308c4906abfb8e7385459a25ab8d78ae902d27": "0874dd9dc3db30ac1cc3c60d0bd420cc",
".git/objects/f8/4530083485cbe786ae073b5266d9a3eb64b4d6": "0f97539d3ef96d94242909e39dcbeec2",
".git/objects/fa/6206fbddaac05194d9fec7ab804d0f4638cda3": "928be703085c25d8e980aea4005e6f6d",
".git/objects/fa/952776838cd9006748eeab761933c5d821a885": "f38a6312a7e169651acbb6618a0e0d25",
".git/objects/fa/9d9d3068780d32024b2a272cfabac9ba1f69b1": "c95ea3dfe7fe3f4856146f5b12f7960f",
".git/objects/fd/810497675003ca9a501cccf901df358e755b87": "ffca060750f1d36aa97b2539d0423116",
".git/objects/pack/pack-0dad526e84a471165ae1b2c0d00177428394ad4d.idx": "4751a4390bc36af49cf74a08eac725cf",
".git/objects/pack/pack-0dad526e84a471165ae1b2c0d00177428394ad4d.pack": "15e8775aa7b70541c699704a6b2d2337",
".git/objects/pack/pack-0dad526e84a471165ae1b2c0d00177428394ad4d.rev": "0a088f09f4d9da1487e4b0574562063b",
".git/packed-refs": "f699992127b45f6ef6e519240fe39a7b",
".git/refs/heads/master": "8a14b5d6a5d64977c0e5938bfe11e78f",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8a14b5d6a5d64977c0e5938bfe11e78f",
"assets/AssetManifest.bin": "103a4a6cbc3b42ce70c6fe0686b44ad2",
"assets/AssetManifest.bin.json": "4a0cb39940a12116b4de1b99e498dde6",
"assets/AssetManifest.json": "f08c908ff89437e139508a2355dc841c",
"assets/assets/citadelle/book_symbols/cardinal_eye.webp": "19b390d07a9289fefdfd38d237cc3ab6",
"assets/assets/citadelle/book_symbols/cardinal_eye_trap.webp": "e1624e5a96c9ecbe0468f35d8d93a69b",
"assets/assets/citadelle/book_symbols/circle_eye.webp": "05a2b76f670368d6bf3c96bc2cea3edf",
"assets/assets/citadelle/book_symbols/circle_eye_trap.webp": "32701017ddfc8ad82bd5002782b53acd",
"assets/assets/citadelle/book_symbols/only_eye.webp": "33238b1958c0414beaedfbc51ee7b4ea",
"assets/assets/citadelle/book_symbols/only_eye_trap.webp": "921e678669ec44a15b12c3954d4093c7",
"assets/assets/citadelle/book_symbols/star_eye.webp": "66d8724d0eee3bbf315d766feeba5c69",
"assets/assets/citadelle/book_symbols/star_eye_trap.webp": "7ebd1fd74ca3f36376474e7cd30650c6",
"assets/assets/citadelle/book_symbols/trap_skip.png": "f5c130ac7ac9bb04c7c59bd1475259b1",
"assets/assets/citadelle/raven_sword/air.webp": "2afd0eec0453379c56d16ddca1386d86",
"assets/assets/citadelle/raven_sword/aquarius.webp": "1787b1ef41348332ec02c9bcfb7145d6",
"assets/assets/citadelle/raven_sword/aries.webp": "84ec7b3177582095356112026e88fb66",
"assets/assets/citadelle/raven_sword/bird1.webp": "291f1adca0f693813856e4b8edfbb82d",
"assets/assets/citadelle/raven_sword/cancer.webp": "56ead5c516134adde939a4ecca3c173a",
"assets/assets/citadelle/raven_sword/capricorn.webp": "86c3003b9563da63b866124750cfbe64",
"assets/assets/citadelle/raven_sword/earth.webp": "028d76a49fa56164be7ff2009cacb1f8",
"assets/assets/citadelle/raven_sword/fire.webp": "c461b7ae39201ae7a4908fe966fc33be",
"assets/assets/citadelle/raven_sword/fish1.webp": "0e62313530e476d593bc36e930002d9d",
"assets/assets/citadelle/raven_sword/gemini.webp": "d7990d1e8646f9596ce976be0bc1b581",
"assets/assets/citadelle/raven_sword/horn1.webp": "24ef8192c1cf77d322825241d8423dea",
"assets/assets/citadelle/raven_sword/jaw1.webp": "8185561db3d9243294bbbc05b0325694",
"assets/assets/citadelle/raven_sword/leo.webp": "9332f21fe7f97cadf23295937ed7b164",
"assets/assets/citadelle/raven_sword/libra.webp": "1aa61b7ad8b8c647041e463fea0c1460",
"assets/assets/citadelle/raven_sword/pisces.webp": "79ffe71663ca99f3996b4b8825e1da17",
"assets/assets/citadelle/raven_sword/sagittarius.webp": "545ad1e985a518b1b1c402b70b85d897",
"assets/assets/citadelle/raven_sword/scorpio.webp": "7c15a3e0e868182997ebcb9d69d8d542",
"assets/assets/citadelle/raven_sword/scorpion1.webp": "1550055e681fa33a4e2e783c18285dd2",
"assets/assets/citadelle/raven_sword/taurus.webp": "9066723d98ebb894fe4dca6720f91b82",
"assets/assets/citadelle/raven_sword/virgo.webp": "f397636ce0be5a2589ccdd38c4080433",
"assets/assets/citadelle/raven_sword/water.webp": "ef550b816c2b4b7b7b87822f926c4c5d",
"assets/assets/citadelle/wall_symbols/aries.webp": "934f4942ef8bcedb4fc151472d45b01e",
"assets/assets/citadelle/wall_symbols/circle.webp": "6b5bff66e6b88b4509f06a41cd080985",
"assets/assets/citadelle/wall_symbols/circle_halved.webp": "92415e4ab6d7be44d9363ebf67a88ceb",
"assets/assets/citadelle/wall_symbols/circle_in_circle.webp": "21b4eed2796a9685cc48512dee069687",
"assets/assets/citadelle/wall_symbols/circle_lasso.webp": "4f4a170c282b4c967fef5ffc77379d32",
"assets/assets/citadelle/wall_symbols/circle_pronged.webp": "d18e1bde46da5fd674fff219ec056e2a",
"assets/assets/citadelle/wall_symbols/circle_quarters.webp": "e22113d7ffe9d863100d00ccfe4b426b",
"assets/assets/citadelle/wall_symbols/circle_three.webp": "6a213146627b021552fd71941208b5f8",
"assets/assets/citadelle/wall_symbols/circle_trio.webp": "35319a5dc7984e91ac8b0e63205c4733",
"assets/assets/citadelle/wall_symbols/female.webp": "488f8d1934993098b5e2ea8f0e0a05c4",
"assets/assets/citadelle/wall_symbols/fourteen.webp": "e72088314e211fafcffd62875d1a9604",
"assets/assets/citadelle/wall_symbols/goalposts.webp": "61b1786a4a5a329b612b8f6e7b02b8e6",
"assets/assets/citadelle/wall_symbols/helmet.webp": "105bc47a6a1baaba0bd758b94c2fa8c5",
"assets/assets/citadelle/wall_symbols/key.webp": "11b332ed853009400c9dcc693ee32078",
"assets/assets/citadelle/wall_symbols/lectern.webp": "7319c70d9b8bd27a5464746b47946c0f",
"assets/assets/citadelle/wall_symbols/male.webp": "5d68c76046bd2867ea827fcab007f7ff",
"assets/assets/citadelle/wall_symbols/powerline.webp": "2cceb296ded12e4e8a8797dfb98a13aa",
"assets/assets/citadelle/wall_symbols/triangle.webp": "220764de24521d7b37a13141733ac332",
"assets/assets/citadelle/wall_symbols/triangle_kite.webp": "5762cc970290b7ca87117b7ff9873cdb",
"assets/assets/citadelle/wall_symbols/trident.webp": "d401222629d0b7ff1752f5d41e04773f",
"assets/assets/terminus/algebra/0.webp": "fffbdc1f400ed66b490147373ea5cf26",
"assets/assets/terminus/algebra/10.webp": "0ba22723eacedca249130cba04aef4ee",
"assets/assets/terminus/algebra/11.webp": "0f64f7bbed64b97837e1557df747c929",
"assets/assets/terminus/algebra/20.webp": "817273a7835255cc3399f8985cdd9954",
"assets/assets/terminus/algebra/21.webp": "81d9272c8471afbb91d60caacd05a296",
"assets/assets/terminus/algebra/22.webp": "a91961690d806a45fc9aac48ddf3589b",
"assets/assets/terminus/algebra/equations.jpeg": "d919d3bed0a4574c13e19f18f10477b4",
"assets/assets/terminus/algebra/terminus_algebra_0.png": "9af762d973c726958f5a7a081c8613e8",
"assets/assets/terminus/algebra/terminus_algebra_10.png": "f8da4a0769dcdc22b762a6044681446f",
"assets/assets/terminus/algebra/terminus_algebra_11.png": "b41b79dc92bc3f8b6a58f223ab4f0004",
"assets/assets/terminus/algebra/terminus_algebra_20.png": "92a28adffeeb82c604b80e2f8091c8ce",
"assets/assets/terminus/algebra/terminus_algebra_21.png": "abe6b89905144f7d221ba9ed154a8b09",
"assets/assets/terminus/algebra/terminus_algebra_22.png": "214074ce7e4db0e9afeffade92b4bfbd",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "251b5ac22ef95e0a78caace5a56b4715",
"assets/NOTICES": "9318047be4088be15bd7f157e606fb6a",
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
"flutter_bootstrap.js": "1510ff532ac1119a32b80869a56c8401",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24724ce37771f194f77916326522062c",
"/": "24724ce37771f194f77916326522062c",
"main.dart.js": "fc1c4f643852809041be7ec3b6dad30c",
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
