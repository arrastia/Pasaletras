export const classListAdd = (element, classString) => {
  if (typeof classString !== 'string' || !element) {
    return;
  }
  classString.split(' ').forEach(className => {
    element.classList.add(className);
  });
};

export const classListRemove = (element, classString) => {
  if (typeof classString !== 'string' || !element) {
    return;
  }
  classString.split(' ').forEach(className => {
    element.classList.remove(className);
  });
};

export const getAnyClassName = className => {
  if (typeof className === 'string') {
    const cls = className.split(' ');
    return cls[0] || '';
  }
  return '';
};

export const mergeStyles = styles => {
  const local = !Array.isArray(styles) ? [styles] : styles;
  if (local.length === 1) {
    return local[0];
  }
  const main = { ...local[0] };
  for (let i = 1; i < local.length; i += 1) {
    for (const item in main) {
      if (local[i][item]) {
        main[item] = [main[item], local[i][item]].join(' ');
      }
    }
    for (const item in local[i]) {
      if (!main[item]) {
        main[item] = local[i][item];
      }
    }
  }
  return main;
};

export function getRootClassName({
  rootElement,
  cssModule,
  disabled,
  organicArrows,
  className,
  total,
  current,
  infinite,
  animation,
  fillParent
}) {
  let classNames = [rootElement];
  if (animation) {
    classNames.push(`${rootElement}--${animation}`);
  }
  if (organicArrows === true) {
    classNames.push(`${rootElement}--organic-arrows`);
  }
  if (disabled === true) {
    classNames.push(`${rootElement}--disabled`);
  }
  if (fillParent) {
    classNames.push(`${rootElement}--fill-parent`);
  }
  if (infinite === false) {
    if (current === 0) {
      classNames.push(`${rootElement}--first`);
    }
    if (current === total - 1) {
      classNames.push(`${rootElement}--last`);
    }
  }

  if (cssModule && cssModule[rootElement]) {
    classNames = classToModules(classNames, cssModule);
  }

  if (className) {
    classNames.push(...className.split(' '));
  }
  return classNames.join(' ').trim().replace(/[\s]+/gi, ' ');
}

export function transformChildren(children) {
  const media = [];
  const items = children.constructor === Array ? children : [children];

  items.forEach(child => {
    const item = {
      ...child.props
    };
    if (child.props['data-src']) {
      item.source = child.props['data-src'];
    }
    if (child.props['data-slug']) {
      item.slug = child.props['data-slug'];
    }
    media.push(item);
  });
  return media;
}

export function setupClassNames(rootElement, cssModule) {
  return {
    boxA: getClassName(`${rootElement}__boxA`, cssModule),
    boxB: getClassName(`${rootElement}__boxB`, cssModule),
    box: getClassName(`${rootElement}__box`, cssModule),
    container: getClassName(`${rootElement}__container`, cssModule),
    wrapper: getClassName(`${rootElement}__wrapper`, cssModule),
    bar: getClassName(`${rootElement}__bar`, cssModule),
    barActive: getClassName(`${rootElement}__bar--active`, cssModule),
    barEnd: getClassName(`${rootElement}__bar--end`, cssModule),
    content: getClassName(`${rootElement}__content`, cssModule),
    contentStatic: getClassName(`${rootElement}__content--static`, cssModule),
    contentMoveLeft: getClassName(`${rootElement}__content--moveLeft`, cssModule),
    contentMoveRight: getClassName(`${rootElement}__content--moveRight`, cssModule),
    controlsHidden: getClassName(`${rootElement}__controls--hidden`, cssModule),
    controlsActive: getClassName(`${rootElement}__controls--active`, cssModule),
    animated: getClassName(`${rootElement}--animated`, cssModule),
    animatedMobile: getClassName(`${rootElement}--animated-mobile`, cssModule),
    contentExit: getClassName(`${rootElement}__content--exit`, cssModule),
    exit: getClassName(`${rootElement}--exit`, cssModule),
    active: getClassName(`${rootElement}--active`, cssModule),
    moveLeft: getClassName(`${rootElement}--moveLeft`, cssModule),
    moveRight: getClassName(`${rootElement}--moveRight`, cssModule),
    startUp: getClassName(`${rootElement}__startUp`, cssModule),
    bulletsLoading: getClassName(`${rootElement}__bullets--loading`, cssModule)
  };
}

export class MediaLoader {
  constructor() {
    if (typeof window !== 'undefined') {
      this.image = new Image();
      this.resolve = null;
      this.video = document.createElement('video');
      this.events();
    }
  }
  events() {
    this.video.addEventListener('loadeddata', () => this.resolve && this.resolve(true));
    this.video.addEventListener('loadeddata', () => this.resolve && this.resolve(false));
    this.image.onload = () => this.resolve && this.resolve(true);
    this.image.onerror = () => this.resolve && this.resolve(false);
  }
  load(url) {
    return new Promise(resolve => {
      if (!url) {
        resolve(true);
      }
      this.resolve = resolve;
      this.loading = true;
      this.ended = false;
      if (url.match(/\.(mp4|webm)/i)) {
        this.video.setAttribute('src', url);
      }
      if (url.match(/\.(png|jp(e)?g|gif|webp)/i)) {
        this.image.src = url;
        if (this.image.width > 0 || this.image.height > 0) {
          resolve(true);
        }
      }
    });
  }
  loadImage(url) {
    const image = new Image();
    let loaded = false;
    image.onload = () => {
      if (!loaded) this.pumpLoaded();
    };
    image.onerror = () => {
      if (!loaded) this.pumpLoaded();
    };
    image.src = url;
    if (loaded === false && (image.width > 0 || image.height > 0)) {
      loaded = true;
      this.pumpLoaded();
    }
  }
  loadVideo(url) {
    const video = document.createElement('video');
    video.addEventListener('loadeddata', () => {
      this.pumpLoaded();
    });
    video.addEventListener('error', () => {
      this.pumpLoaded();
    });
    video.setAttribute('src', url);
  }
  pumpLoaded() {
    this.loaded += 1;
    if (this.loaded === this.toLoad) {
      this.resolver(true);
    }
  }
  startLoad(url) {
    if (url.match(/\.(mp4|webm)/i)) {
      this.loadVideo(url);
    }
    if (url.match(/\.(png|jp(e)?g|gif|webp)/i)) {
      this.loadImage(url);
    }
  }
  loadMultiple(urls) {
    this.loaded = 0;
    this.toLoad = urls.length;
    return new Promise(resolve => {
      this.resolver = resolve;
      urls.forEach(url => {
        this.startLoad(url);
      });
    });
  }
}

export function serialize(obj, separator = '&') {
  return Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join(separator);
}

export function classToModules(classNames = [], cssModule) {
  if (!cssModule) {
    return classNames.join(' ').trim();
  }
  const result = [];
  let i = classNames.length;
  // eslint-disable-next-line
  while (i--) {
    if (cssModule[classNames[i]]) {
      result.push(cssModule[classNames[i]]);
    }
  }
  return result;
}

export function getClassName(className = '', cssModule) {
  if (cssModule) {
    return cssModule[className] || className;
  }
  return className;
}

export const SliderUtils = {};
