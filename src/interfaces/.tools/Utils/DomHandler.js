export default class DomHandler {
  static addClass(element, className) {
    if (element) {
      if (element.classList) element.classList.add(className);
      else element.className += ' ' + className;
    }
  }

  static removeClass(element, className) {
    if (element) {
      if (element.classList) element.classList.remove(className);
      else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};

      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser['version'] = matched.version;
      }

      if (this.browser['chrome']) {
        this.browser['webkit'] = true;
      } else if (this.browser['webkit']) {
        this.browser['safari'] = true;
      }
    }

    return this.browser;
  }

  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match =
      /(chrome)[ ]([\w.]+)/.exec(ua) ||
      /(webkit)[ ]([\w.]+)/.exec(ua) ||
      /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) ||
      /(msie) ([\w.]+)/.exec(ua) ||
      (ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
      [];

    return {
      browser: match[1] || '',
      version: match[2] || '0'
    };
  }
}
