const tuoitre = 'tuoitre.vn';
const theguardian = 'theguardian.com';

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
    '.stubborn-banner',
    '#sticky-promo',
    'div[data-testid="sponsored-card"]'
  ]
};

const BLACKLIST = Object.keys(SITE_RULES);

const AD_SERVERS = [
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
  'adnxs.com',
  'taboola.com',
  'outbrain.com',
  'admicro.vn',
  'quangcao.tuoitre.vn',
  'amcdn.vn',
  'googletagmanager.com',
  'deqik.com',
  'mediacdn.vn',
  'js.aiservice.vn',
  'sohatv.vn'
];
