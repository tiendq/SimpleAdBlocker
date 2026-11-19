const tuoitre = 'tuoitre.vn';
const theguardian = 'theguardian.com';
const oxford = 'oxfordlearnersdictionaries.com';

const SITE_RULES = {
  [tuoitre]: [
    '#LeaderBoardTop', // home
    '#box-rate-parent-homepage',
    '#product-list-plugin',
    '[data-atc="atc-nonstar"]',
    '#boxHomeThamDo',
    '.mb-20',
    '.mb-16', // article
    '.detail__newslette'
  ],
  [theguardian]: [
    '.top-fronts-banner-ad-container', // home
    '[aria-label="newsletter promotion"]' // article
  ],
  [oxford]: [
    '#harzsgqwhvvy7y03s1tzs3',
    '#harzsgqwhvvy7y0qs73n73tzs3y0e',
    '#harzsgqwhvvy7y0m3jtzs3',
    '#ring-links-box'
  ]
};

const BLACKLIST = Object.keys(SITE_RULES);

const AD_SERVERS = [
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
  'adnxs.com',
  'google-analytics.com',
  'googletagmanager.com',
  'hotjar.com',
  'admicro.vn', // tuoitre
  'quangcao.tuoitre.vn',
  'amcdn.vn',
  'deqik.com',
  'mediacdn.vn',
  'js.aiservice.vn',
  'sohatv.vn',
];
