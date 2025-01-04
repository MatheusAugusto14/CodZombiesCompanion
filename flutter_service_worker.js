'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d94a4a11f15e35355a7bd92d1d68ff9f",
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
".git/index": "ed796fa5239c8b15337ed6fc9dde5f97",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e5e722bd95c96792b285852866ce0ac",
".git/logs/refs/heads/master": "7e5e722bd95c96792b285852866ce0ac",
".git/logs/refs/remotes/origin/HEAD": "974a9e4163228add88ba0673523b9320",
".git/logs/refs/remotes/origin/master": "269d7d16d1fc6820ada8e92a28d99314",
".git/objects/01/7784d5706f1928be0f2c312d5792e2f2472ebe": "54715ded66667a519100ebc2af361efc",
".git/objects/1c/f73373050f704f1ebaade1e6e1c597f49ddb5c": "9d8da716135d5bb0e1227050c9d992e4",
".git/objects/3d/6f7098b420e9c0a024fa4ebbe8333d0417a9ff": "7a95badb49914b654e8a1960881cb15e",
".git/objects/54/dced09de0a84935354afe4162ab4e045af236c": "53517cdceb0bf62bb9f2ba9b1eb539fe",
".git/objects/72/bdcbb5fdd8014d8f38307e9a722b695e35b008": "45774245e644038b081a106a2eefb522",
".git/objects/b4/15bdb54346405aad809e0c89884eb6667d03c2": "e82593a6ef225869eba40c382e7452b9",
".git/objects/c4/6ae1e0f573910761727542da776ac5a05d8286": "8764a243972fe67e45d2abb64eef4d7a",
".git/objects/cc/36dd2c4de6e04bc3ac02d64ce275931e19c8d7": "c629d342ea387033490dfc1323a0f6ed",
".git/objects/pack/pack-a5afc8a58b027b23ebc10366e71d3dbcdc168912.idx": "f26a27d59ed2899c9c2f8877a11a92f5",
".git/objects/pack/pack-a5afc8a58b027b23ebc10366e71d3dbcdc168912.pack": "f52fa2460f2d9c156137ad207605e6c7",
".git/objects/pack/pack-a5afc8a58b027b23ebc10366e71d3dbcdc168912.rev": "8c3752c509c297a608ecceb9c396e172",
".git/packed-refs": "b1c5767061c0c8422f6ad226e8f12d74",
".git/refs/heads/master": "e787d26044e04395fe868065df028c6a",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e787d26044e04395fe868065df028c6a",
"assets/AssetManifest.bin": "58edd20c751153238b6a6e56ffebaa7a",
"assets/AssetManifest.bin.json": "7ca7030f61c6a26f378fb83fb0dbfd8d",
"assets/AssetManifest.json": "33285a421be49ebfac6450e87c7fc232",
"assets/assets/augments/ammo_mods/brain_rot/br_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/brain_rot/br_explosive.webp": "1eedd80214be09d2f2e381e7a3c7ba0d",
"assets/assets/augments/ammo_mods/brain_rot/br_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/brain_rot/br_haste.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/brain_rot/br_logo.webp": "00c29070835ac84fd07905d729cad59f",
"assets/assets/augments/ammo_mods/brain_rot/br_pheromone.webp": "8423014b6e4d07da956b579dfdbb883d",
"assets/assets/augments/ammo_mods/brain_rot/br_plague.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_freezer_burn.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_frozen_stiff.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_ice_cloud.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_liquid_nitrogen.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_logo.webp": "c9b55dbbbe6fca151bad99076f11ab5e",
"assets/assets/augments/ammo_mods/dead_wire/dw_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/dead_wire/dw_chain_lightning.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/ammo_mods/dead_wire/dw_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/dead_wire/dw_haste.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/dead_wire/dw_high_voltage.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/ammo_mods/dead_wire/dw_lightning_strike.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/ammo_mods/dead_wire/dw_logo.webp": "ad5bfa88063025b82504e1c3779d9276",
"assets/assets/augments/ammo_mods/light_mend/lm_antibiotic.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/ammo_mods/light_mend/lm_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/light_mend/lm_dual_action.webp": "0a6775f2bcfaa0cef91055da3453d628",
"assets/assets/augments/ammo_mods/light_mend/lm_express_remedy.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/ammo_mods/light_mend/lm_extra_strength.webp": "c65f5c46057d554164c5034bf658150f",
"assets/assets/augments/ammo_mods/light_mend/lm_logo.webp": "75649a219b1bdc438ff308c78f9968e1",
"assets/assets/augments/ammo_mods/light_mend/lm_longer_life.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/napalm_burst/nb_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/napalm_burst/nb_contact_burn.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/ammo_mods/napalm_burst/nb_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/napalm_burst/nb_firebomb.webp": "a1db3d737488423b163e3f6b61fff579",
"assets/assets/augments/ammo_mods/napalm_burst/nb_incendiary.webp": "19938dcafb6cd2e7241286beb54c08f2",
"assets/assets/augments/ammo_mods/napalm_burst/nb_logo.webp": "4861556f512c99ada9d484f30a1647a6",
"assets/assets/augments/ammo_mods/napalm_burst/nb_thermite.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/ammo_mods/shadow_rift/sr_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/shadow_rift/sr_explosive_rain.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/ammo_mods/shadow_rift/sr_haste.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/shadow_rift/sr_logo.webp": "5c3e868fd6420bd98318025f96206e06",
"assets/assets/augments/ammo_mods/shadow_rift/sr_supermassive.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/ammo_mods/shadow_rift/sr_targeted.webp": "3bc393af6ccb79d082c3d4d719269539",
"assets/assets/augments/ammo_mods/shadow_rift/sr_topple_danger.webp": "588385ff9b3822d000d07b4c8d317e87",
"assets/assets/augments/field_upgrades/aether_shroud/as_burst_dash.webp": "824edba891bf7002d3968d88abf93e8c",
"assets/assets/augments/field_upgrades/aether_shroud/as_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/field_upgrades/aether_shroud/as_extra_charge.webp": "c59489a7e7c956a31b82c67f0f42fbd6",
"assets/assets/augments/field_upgrades/aether_shroud/as_group_shroud.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/field_upgrades/aether_shroud/as_instant_reload.webp": "674c48edfa0eb206bf80e8abef0aed31",
"assets/assets/augments/field_upgrades/aether_shroud/as_logo.webp": "af016f91ca42b79aa0c2be0e4c24a238",
"assets/assets/augments/field_upgrades/aether_shroud/as_void_sheath.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/field_upgrades/dark_flare/df_broad_beam.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/field_upgrades/dark_flare/df_dark_pact.webp": "0a6775f2bcfaa0cef91055da3453d628",
"assets/assets/augments/field_upgrades/dark_flare/df_extension.webp": "62c903dee29b5cb76b3e1b5293001636",
"assets/assets/augments/field_upgrades/dark_flare/df_extra_charge.webp": "c59489a7e7c956a31b82c67f0f42fbd6",
"assets/assets/augments/field_upgrades/dark_flare/df_heavy_shadow.webp": "23cde21c61035037df06a623d0a74913",
"assets/assets/augments/field_upgrades/dark_flare/df_logo.webp": "51bdb434754efdae51ffac39e0c44c2f",
"assets/assets/augments/field_upgrades/dark_flare/df_supernova.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/field_upgrades/energy_mine/em_carousel.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/field_upgrades/energy_mine/em_extra_charge.webp": "c59489a7e7c956a31b82c67f0f42fbd6",
"assets/assets/augments/field_upgrades/energy_mine/em_frequency_boost.webp": "28d7bddac1bcdd64fe8d63e0aeac7720",
"assets/assets/augments/field_upgrades/energy_mine/em_logo.webp": "5e5d9734c984ac858f839935df4d7829",
"assets/assets/augments/field_upgrades/energy_mine/em_scatter.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/field_upgrades/energy_mine/em_siren.webp": "6463936af63ae6c91a7fa6ca5b3bb767",
"assets/assets/augments/field_upgrades/energy_mine/em_turret.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_frenzy_fire.webp": "41e6f49bb238104964ca4fe78af77ed6",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_logo.webp": "1eae50bded18d8a0f0b09b46e0215480",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_phalanx.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_rally.webp": "1bd6c51dda71c795dca8162158a95f04",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_repair_boost.webp": "933a5cafa0c5c46a72d0107f8d7c1e8c",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_retribution.webp": "8521619a929df0eac97412802a200c7d",
"assets/assets/augments/field_upgrades/healing_aura/ha_enduring_radiance.webp": "62c903dee29b5cb76b3e1b5293001636",
"assets/assets/augments/field_upgrades/healing_aura/ha_inner_strength.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/field_upgrades/healing_aura/ha_logo.webp": "7f448abc06c973385c8ab9aa8927819c",
"assets/assets/augments/field_upgrades/healing_aura/ha_persistence.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/field_upgrades/healing_aura/ha_protection.webp": "c81664b7283aefef7a0a848ab3137be4",
"assets/assets/augments/field_upgrades/healing_aura/ha_resilience.webp": "0a6775f2bcfaa0cef91055da3453d628",
"assets/assets/augments/field_upgrades/healing_aura/ha_stoic_presence.webp": "81d8c209916f6b52b67d9a8f772fe572",
"assets/assets/augments/field_upgrades/tesla_storm/ts_lithium_charged.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/field_upgrades/tesla_storm/ts_logo.webp": "3304391bcafd6cc34c7c91e87d7de9f0",
"assets/assets/augments/field_upgrades/tesla_storm/ts_overclocked.webp": "89f78882a5480bd34ca83d207447d273",
"assets/assets/augments/field_upgrades/tesla_storm/ts_power_grid.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/field_upgrades/tesla_storm/ts_shockwave.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/field_upgrades/tesla_storm/ts_static_discharge.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/field_upgrades/tesla_storm/ts_transformer.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_again.webp": "1930f98f44d3e4acd503dc9244ae1bb0",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_break.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_draw.webp": "29c0caa604dbb80daea744df26a8d9cd",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_first.webp": "1930f98f44d3e4acd503dc9244ae1bb0",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_head.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_set.webp": "9d8db49380f4f5a4f839126dfcc1f6a6",
"assets/assets/augments/perks/deadshot_daiquiri/dd_logo.webp": "c4bb5ab347e199a00743d15d17a8a9af",
"assets/assets/augments/perks/deadshot_daiquiri/dd_square_logo.webp": "de9e6454cf94e50b128c3d2e701625be",
"assets/assets/augments/perks/elemental_pop/ep_chill_berry.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/perks/elemental_pop/ep_citrus_focus.webp": "e95a368253cd213cdcf47127b6cee061",
"assets/assets/augments/perks/elemental_pop/ep_electric_cherry.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/perks/elemental_pop/ep_imperil_peach.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/elemental_pop/ep_logo.webp": "e9ffd8a542f5124c319358049d679b61",
"assets/assets/augments/perks/elemental_pop/ep_pineapple_blast.webp": "39aa67f11392acbc5732635b93d90174",
"assets/assets/augments/perks/elemental_pop/ep_square_logo.webp": "89d75d72dcda90605be2c2c62efc1336",
"assets/assets/augments/perks/elemental_pop/ep_vulnera_bean.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/jugger-nog/jn_durable_plates.webp": "ccfe4a0249ab1b27b707c8cc29dd22df",
"assets/assets/augments/perks/jugger-nog/jn_hardened_plates.webp": "1fd5beeea17edd6c22fdd6fcbb8d926e",
"assets/assets/augments/perks/jugger-nog/jn_logo.webp": "34cdc077379a5391ab5570d485373585",
"assets/assets/augments/perks/jugger-nog/jn_probiotic.webp": "dffd634c37bdfe6c9e353e53a795cf19",
"assets/assets/augments/perks/jugger-nog/jn_reactive_armor.webp": "431641e06fe99979bca7c17aa46bb077",
"assets/assets/augments/perks/jugger-nog/jn_retaliation.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/jugger-nog/jn_square_logo.webp": "7277d54b9cdf01f91a277fbd16ae2fbf",
"assets/assets/augments/perks/jugger-nog/jn_turtle_shell.webp": "6f5a8d2114d33b64443a93b4753919d7",
"assets/assets/augments/perks/melee_macchiato/mm_expresso.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/perks/melee_macchiato/mm_hidden_impact.webp": "674c48edfa0eb206bf80e8abef0aed31",
"assets/assets/augments/perks/melee_macchiato/mm_logo.webp": "af3608779ae5ebafa61e63dc1b5138a1",
"assets/assets/augments/perks/melee_macchiato/mm_square_logo.webp": "61948b11e4374a83fcc2dda1f081a04e",
"assets/assets/augments/perks/melee_macchiato/mm_stick_n_move.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/melee_macchiato/mm_strength_training.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/melee_macchiato/mm_triple_shot.webp": "588385ff9b3822d000d07b4c8d317e87",
"assets/assets/augments/perks/melee_macchiato/mm_vampiric_extraction.webp": "41f915a2a048191f5d889675ff032344",
"assets/assets/augments/perks/phd_flopper/pf_dr_ram.webp": "8ac6aa1a3986941296a409266e1e7302",
"assets/assets/augments/perks/phd_flopper/pf_environmentalist.webp": "802b6bd4e567f4bf05f6975f10d960ed",
"assets/assets/augments/perks/phd_flopper/pf_eod_technician.webp": "0bf6daf698d2bd2c88a7035c7e9a658d",
"assets/assets/augments/perks/phd_flopper/pf_gravity_md.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/perks/phd_flopper/pf_logo.webp": "42fb170b2a4e262223c4fd50f1bc54b5",
"assets/assets/augments/perks/phd_flopper/pf_phd_slider.webp": "fa97d830ac772b7fa2637f8907e122f7",
"assets/assets/augments/perks/phd_flopper/pf_square_logo.webp": "24690ccf8f486dd0c90dee44b2def012",
"assets/assets/augments/perks/phd_flopper/pf_tribologist.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/quick_revive/qr_dying_wish.webp": "44e7f568db5d67d526cc89b5973d65e5",
"assets/assets/augments/perks/quick_revive/qr_emt.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/quick_revive/qr_equivalent_exchange.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/quick_revive/qr_karmic_return.webp": "8f5a336d56d45d2420fbaf7f67905ff1",
"assets/assets/augments/perks/quick_revive/qr_logo.webp": "a2011a357d5ebba3e837f99f01ed6f1e",
"assets/assets/augments/perks/quick_revive/qr_slow_death.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/perks/quick_revive/qr_square_logo.webp": "0da28064728de66b70aba744750eab58",
"assets/assets/augments/perks/quick_revive/qr_swift_recovery.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/speed_cola/sc_classic_formula.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/perks/speed_cola/sc_fast_pitcher.webp": "a0b5bd0568ee14e1bd9555146c0c4b35",
"assets/assets/augments/perks/speed_cola/sc_logo.webp": "08e1da8cadc0d7874c24a1371fa5a05b",
"assets/assets/augments/perks/speed_cola/sc_phantom_reload.webp": "7d2b623643364d139e7619c85c71e225",
"assets/assets/augments/perks/speed_cola/sc_quick_swap.webp": "22162ded7317d801b8f07cf25671a61d",
"assets/assets/augments/perks/speed_cola/sc_speedy_roulette.webp": "89f78882a5480bd34ca83d207447d273",
"assets/assets/augments/perks/speed_cola/sc_square_logo.webp": "c4ea8647562e9430cf4bb0a54c6d7d93",
"assets/assets/augments/perks/speed_cola/sc_supercharged.webp": "8bd9a7a376ae3999a611f901d239842a",
"assets/assets/augments/perks/stamin-up/su_dasher.webp": "084b3c609c6a64226dc02bf49b0e2530",
"assets/assets/augments/perks/stamin-up/su_free_faller.webp": "1d3aa4a42a6a1ae74acf661040ccfda7",
"assets/assets/augments/perks/stamin-up/su_hard_target.webp": "b011e3b02e83985085113daf342fbad7",
"assets/assets/augments/perks/stamin-up/su_hot_foot.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/stamin-up/su_logo.webp": "1dd79f236d12ce9b675e79090bda2ae7",
"assets/assets/augments/perks/stamin-up/su_quarterback.webp": "c0ee11706719e5c331889bf9f0837703",
"assets/assets/augments/perks/stamin-up/su_square_logo.webp": "96f3b0c69c416e3db1cb7e5018371a66",
"assets/assets/augments/perks/stamin-up/su_stalker.webp": "0e01950c18402909d4018b7454b1fbf9",
"assets/assets/augments/perks/vulture_aid/va_carrion_luggage.webp": "0bf6daf698d2bd2c88a7035c7e9a658d",
"assets/assets/augments/perks/vulture_aid/va_condors_reach.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/perks/vulture_aid/va_fetid_upgr-aid.webp": "41e6f49bb238104964ca4fe78af77ed6",
"assets/assets/augments/perks/vulture_aid/va_logo.webp": "6152e03bf59c1866849ab60284cfbcad",
"assets/assets/augments/perks/vulture_aid/va_parting_gift.webp": "8bd9a7a376ae3999a611f901d239842a",
"assets/assets/augments/perks/vulture_aid/va_picky_eater.webp": "209ec103e1344d4a190d27a59887eb75",
"assets/assets/augments/perks/vulture_aid/va_smell_of_death.webp": "e95a368253cd213cdcf47127b6cee061",
"assets/assets/augments/perks/vulture_aid/va_square_logo.webp": "13983b7fc97eb8b38f870dfa22eb2716",
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
"assets/assets/other/husky_rescue.png": "e541cca708ea39a070553c3f5845fd0d",
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
"assets/fonts/MaterialIcons-Regular.otf": "7a4a301395036079701dfc4007669940",
"assets/NOTICES": "233ecdcf8df96c4460745eec8ef5bdf1",
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
"flutter_bootstrap.js": "7ec4238686ed55fd5243dff7b6121608",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24724ce37771f194f77916326522062c",
"/": "24724ce37771f194f77916326522062c",
"main.dart.js": "4ab67236465845ff0218cf68ae98d47b",
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
