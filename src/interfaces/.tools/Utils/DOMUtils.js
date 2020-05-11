const addClass = (element, className) => {
  if (element) {
    if (element.classList) element.classList.add(className);
    else element.className += ' ' + className;
  }
};

const getBrowser = browser => {
  if (!browser) {
    let matched = resolveUserAgent();
    browser = {};

    if (matched.browser) {
      browser[matched.browser] = true;
      browser['version'] = matched.version;
    }

    if (browser['chrome']) browser['webkit'] = true;
    else if (browser['webkit']) browser['safari'] = true;
  }
  return browser;
};

const isVisible = element => element && element.offsetParent != null;

const removeClass = (element, className) => {
  if (element) {
    if (element.classList) element.classList.remove(className);
    else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

const resolveUserAgent = () => {
  let userAgent = navigator.userAgent.toLowerCase();
  let match =
    /(chrome)[ ]([\w.]+)/.exec(userAgent) ||
    /(webkit)[ ]([\w.]+)/.exec(userAgent) ||
    /(opera)(?:.*version|)[ ]([\w.]+)/.exec(userAgent) ||
    /(msie) ([\w.]+)/.exec(userAgent) ||
    (userAgent.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent)) ||
    [];

  return { browser: match[1] || '', version: match[2] || '0' };
};

export const DOMUtils = { addClass, getBrowser, isVisible, removeClass };
