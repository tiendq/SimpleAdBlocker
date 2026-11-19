const host = window.location.hostname.toLowerCase();
const matchedDomain = BLACKLIST.find(domain => host === domain || host.endsWith(`.${domain}`));

if (matchedDomain) {
  const DEFAULT_SELECTORS = [
    'ins.adsbygoogle',
    '.adsbygoogle',
    '[id^="google_ads_iframe"]',
    '[id^="div-gpt-ad"]',
    'iframe[src*="doubleclick.net"]',
    'iframe[src*="googlesyndication.com"]',
    '[data-ad-slot]',
    '[data-ad-client]',
    '[aria-label="Advertisement"]',
    '.ad-banner',
    '.ad-container',
    '.ad-wrapper',
    '.sponsored-content'
  ];

  const customSelectors = SITE_RULES[matchedDomain] || [];
  const combinedSelector = [...DEFAULT_SELECTORS, ...customSelectors].join(', ');

  const style = document.createElement('style');

  style.textContent = `${combinedSelector} { display: none !important; }`;
  (document.head || document.documentElement).appendChild(style);

  const removeAds = (root = document) => {
    console.info('Simple Ad Blocker working')
    root.querySelectorAll(combinedSelector).forEach((el) => el.remove());
  };

  removeAds();

  new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches?.(combinedSelector)) node.remove();
          else removeAds(node);
        }
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
}
