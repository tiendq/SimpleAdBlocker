const tuoitre = 'tuoitre.vn';
const theguardian = 'theguardian.com';
const oxford = 'oxfordlearnersdictionaries.com';
const shopee = 'shopee.vn';
const reddit = 'reddit.com';
const facebook = 'facebook.com';

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
  ],
  [shopee]: [
    '#HomePageCarouselBannerSection',
    '#HomePageSquareBannerSection',
    '#HomePageFloatingBannerSection'
    // 'footer' // Issue: remove it (with huge garbage at the end of page) results in a blank page, requires a refresh all pages
  ],
  [reddit]: [
    'shreddit-ad-post' // .promotedlink
  ],
  [facebook]: [
    '#right_rail_container' // right ads sidebar
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
  'sohatv.vn'
];

/*
function testfb() {
  const feedContainer = Array.from(document.querySelectorAll('h3')).find(element => element.textContent.toLowerCase().includes('feed posts'));
  const emptyDiv = feedContainer.nextElementSibling;
  const postsContainer = emptyDiv.nextElementSibling;
  const posts = Array.from(postsContainer.children);

  const ads = posts.filter(element => {
    const adsLinks = element.querySelectorAll('a[href^="/ads/about"]');
    return adsLinks.length > 0; // only found ad if node has been expanded manually, dynamic content
  });

  return ads;
}
*/
