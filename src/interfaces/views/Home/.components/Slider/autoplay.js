!(function webpackUniversalModuleDefinition(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('prop-types'), require('react')))
    : 'function' == typeof define && define.amd
    ? define(['prop-types', 'react'], t)
    : 'object' == typeof exports
    ? (exports['react-awesome-slider'] = t(require('prop-types'), require('react')))
    : (e['react-awesome-slider'] = t(e.PropTypes, e.React));
})(this, function (e, t) {
  return (function (e) {
    var t = {};
    function __webpack_require__(n) {
      if (t[n]) return t[n].exports;
      var r = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(r.exports, r, r.exports, __webpack_require__), (r.l = !0), r.exports;
    }
    return (
      (__webpack_require__.m = e),
      (__webpack_require__.c = t),
      (__webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (__webpack_require__.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (__webpack_require__.t = function (e, t) {
        if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if ((__webpack_require__.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var r in e)
            __webpack_require__.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (__webpack_require__.n = function (e) {
        var t =
          e && e.__esModule
            ? function getDefault() {
                return e.default;
              }
            : function getModuleExports() {
                return e;
              };
        return __webpack_require__.d(t, 'a', t), t;
      }),
      (__webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (__webpack_require__.p = ''),
      __webpack_require__((__webpack_require__.s = 6))
    );
  })([
    function (e, t, n) {
      'use strict';
      function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      n.d(t, 'a', function () {
        return r;
      }),
        n.d(t, 'b', function () {
          return classToModules;
        }),
        n.d(t, 'c', function () {
          return getClassName;
        });
      var r = (function () {
        function MediaLoader() {
          !(function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, MediaLoader),
            'undefined' != typeof window &&
              ((this.image = new Image()), (this.resolve = null), (this.video = document.createElement('video')), this.events());
        }
        return (
          (function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
          })(MediaLoader, [
            {
              key: 'events',
              value: function events() {
                var e = this;
                this.video.addEventListener('loadeddata', function () {
                  return e.resolve && e.resolve(!0);
                }),
                  this.video.addEventListener('loadeddata', function () {
                    return e.resolve && e.resolve(!1);
                  }),
                  (this.image.onload = function () {
                    return e.resolve && e.resolve(!0);
                  }),
                  (this.image.onerror = function () {
                    return e.resolve && e.resolve(!1);
                  });
              }
            },
            {
              key: 'load',
              value: function load(e) {
                var t = this;
                return new Promise(function (n) {
                  e || n(!0),
                    (t.resolve = n),
                    (t.loading = !0),
                    (t.ended = !1),
                    e.match(/\.(mp4|webm)/i) && t.video.setAttribute('src', e),
                    e.match(/\.(png|jp(e)?g|gif|webp)/i) && ((t.image.src = e), (t.image.width > 0 || t.image.height > 0) && n(!0));
                });
              }
            },
            {
              key: 'loadImage',
              value: function loadImage(e) {
                var t = this,
                  n = new Image(),
                  r = !1;
                (n.onload = function () {
                  r || t.pumpLoaded();
                }),
                  (n.onerror = function () {
                    r || t.pumpLoaded();
                  }),
                  (n.src = e),
                  !1 === r && (n.width > 0 || n.height > 0) && ((r = !0), this.pumpLoaded());
              }
            },
            {
              key: 'loadVideo',
              value: function loadVideo(e) {
                var t = this,
                  n = document.createElement('video');
                n.addEventListener('loadeddata', function () {
                  t.pumpLoaded();
                }),
                  n.addEventListener('error', function () {
                    t.pumpLoaded();
                  }),
                  n.setAttribute('src', e);
              }
            },
            {
              key: 'pumpLoaded',
              value: function pumpLoaded() {
                (this.loaded += 1), this.loaded === this.toLoad && this.resolver(!0);
              }
            },
            {
              key: 'startLoad',
              value: function startLoad(e) {
                e.match(/\.(mp4|webm)/i) && this.loadVideo(e), e.match(/\.(png|jp(e)?g|gif|webp)/i) && this.loadImage(e);
              }
            },
            {
              key: 'loadMultiple',
              value: function loadMultiple(e) {
                var t = this;
                return (
                  (this.loaded = 0),
                  (this.toLoad = e.length),
                  new Promise(function (n) {
                    (t.resolver = n),
                      e.forEach(function (e) {
                        t.startLoad(e);
                      });
                  })
                );
              }
            }
          ]),
          MediaLoader
        );
      })();
      function classToModules() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (!t) return e.join(' ').trim();
        for (var n = [], r = e.length; r--; ) t[e[r]] && n.push(t[e[r]]);
        return n;
      }
      function getClassName() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          t = arguments.length > 1 ? arguments[1] : void 0;
        return (t && t[e]) || e;
      }
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      }),
        n.d(t, 'b', function () {
          return i;
        }),
        n.d(t, 'c', function () {
          return c;
        }),
        n.d(t, 'e', function () {
          return a;
        }),
        n.d(t, 'd', function () {
          return getRootClassName;
        }),
        n.d(t, 'g', function () {
          return transformChildren;
        }),
        n.d(t, 'f', function () {
          return setupClassNames;
        });
      var r = n(0);
      function _toConsumableArray(e) {
        return (
          (function _arrayWithoutHoles(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function _iterableToArray(e) {
            if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e);
          })(e) ||
          (function _nonIterableSpread() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      function ownKeys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(n), !0).forEach(function (t) {
                _defineProperty(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ownKeys(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var o = function classListAdd(e, t) {
          'string' == typeof t &&
            e &&
            t.split(' ').forEach(function (t) {
              e.classList.add(t);
            });
        },
        i = function classListRemove(e, t) {
          'string' == typeof t &&
            e &&
            t.split(' ').forEach(function (t) {
              e.classList.remove(t);
            });
        },
        c = function getAnyClassName(e) {
          return ('string' == typeof e && e.split(' ')[0]) || '';
        },
        a = function mergeStyles(e) {
          var t = Array.isArray(e) ? e : [e];
          if (1 === t.length) return t[0];
          for (var n = _objectSpread({}, t[0]), r = 1; r < t.length; r += 1) {
            for (var o in n) t[r][o] && (n[o] = [n[o], t[r][o]].join(' '));
            for (var i in t[r]) n[i] || (n[i] = t[r][i]);
          }
          return n;
        };
      function getRootClassName(e) {
        var t,
          n = e.rootElement,
          o = e.cssModule,
          i = e.disabled,
          c = e.organicArrows,
          a = e.className,
          s = e.total,
          u = e.current,
          l = e.infinite,
          f = e.animation,
          d = e.fillParent,
          p = [n];
        (f && p.push(''.concat(n, '--').concat(f)),
        !0 === c && p.push(''.concat(n, '--organic-arrows')),
        !0 === i && p.push(''.concat(n, '--disabled')),
        d && p.push(''.concat(n, '--fill-parent')),
        !1 === l && (0 === u && p.push(''.concat(n, '--first')), u === s - 1 && p.push(''.concat(n, '--last'))),
        o && o[n] && (p = Object(r.b)(p, o)),
        a) && (t = p).push.apply(t, _toConsumableArray(a.split(' ')));
        return p.join(' ').trim().replace(/[\s]+/gi, ' ');
      }
      function transformChildren(e) {
        var t = [];
        return (
          (e.constructor === Array ? e : [e]).forEach(function (e) {
            var n = _objectSpread({}, e.props);
            e.props['data-src'] && (n.source = e.props['data-src']), e.props['data-slug'] && (n.slug = e.props['data-slug']), t.push(n);
          }),
          t
        );
      }
      function setupClassNames(e, t) {
        return {
          boxA: Object(r.c)(''.concat(e, '__boxA'), t),
          boxB: Object(r.c)(''.concat(e, '__boxB'), t),
          box: Object(r.c)(''.concat(e, '__box'), t),
          container: Object(r.c)(''.concat(e, '__container'), t),
          wrapper: Object(r.c)(''.concat(e, '__wrapper'), t),
          bar: Object(r.c)(''.concat(e, '__bar'), t),
          barActive: Object(r.c)(''.concat(e, '__bar--active'), t),
          barEnd: Object(r.c)(''.concat(e, '__bar--end'), t),
          content: Object(r.c)(''.concat(e, '__content'), t),
          contentStatic: Object(r.c)(''.concat(e, '__content--static'), t),
          contentMoveLeft: Object(r.c)(''.concat(e, '__content--moveLeft'), t),
          contentMoveRight: Object(r.c)(''.concat(e, '__content--moveRight'), t),
          controlsHidden: Object(r.c)(''.concat(e, '__controls--hidden'), t),
          controlsActive: Object(r.c)(''.concat(e, '__controls--active'), t),
          animated: Object(r.c)(''.concat(e, '--animated'), t),
          animatedMobile: Object(r.c)(''.concat(e, '--animated-mobile'), t),
          contentExit: Object(r.c)(''.concat(e, '__content--exit'), t),
          exit: Object(r.c)(''.concat(e, '--exit'), t),
          active: Object(r.c)(''.concat(e, '--active'), t),
          moveLeft: Object(r.c)(''.concat(e, '--moveLeft'), t),
          moveRight: Object(r.c)(''.concat(e, '--moveRight'), t),
          startUp: Object(r.c)(''.concat(e, '__startUp'), t),
          bulletsLoading: Object(r.c)(''.concat(e, '__bullets--loading'), t)
        };
      }
    },
    function (t, n) {
      t.exports = e;
    },
    function (e, n) {
      e.exports = t;
    },
    function (e, t, n) {
      e.exports = (function (e) {
        var n = {};
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        return (
          (t.m = e),
          (t.c = n),
          (t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
          }),
          (t.r = function (e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          }),
          (t.t = function (e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((t.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & n && 'string' != typeof e))
              for (var o in e)
                t.d(
                  r,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return r;
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, 'a', n), n;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = ''),
          t((t.s = 0))
        );
      })([
        function (e, t, n) {
          'use strict';
          function o(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = n.tolerance,
              o = void 0 === r ? 0 : r,
              i = n.propertyName;
            return new Promise(function (n) {
              if (e) {
                var r = null,
                  a = t.charAt(0).toUpperCase() + t.slice(1),
                  s = 0;
                void 0 !== e.style['Webkit' + a] && (r = 'webkit' + a + 'End'),
                  void 0 !== e.style.OTransition && (r = 'o' + t + 'End'),
                  void 0 !== e.style[t] && (r = t + 'end'),
                  e.clearCssEndEvent && e.clearCssEndEvent(),
                  (e.clearCssEndEvent = function () {
                    e.removeEventListener(r, c);
                  }),
                  e.addEventListener(r, c);
              } else n(!1);
              function c(t) {
                if ((t.srcElement || t.target) === e) {
                  if (s >= o) {
                    if (i && i !== t.propertyName) return;
                    e.removeEventListener(r, c), n(t);
                  }
                  s += 1;
                }
              }
            });
          }
          function r(e) {
            window &&
              window.requestAnimationFrame(function () {
                window.requestAnimationFrame(e);
              });
          }
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.setCssEndEvent = o),
            (t.beforeCssLayout = function (e) {
              window && window.requestAnimationFrame(e);
            }),
            (t.beforeNextCssLayout = r),
            (t.beforeFutureCssLayout = function (e, t) {
              !(function e(t, n) {
                window && t && Number.isInteger(t) && t > 0
                  ? window.requestAnimationFrame(function () {
                      e(t - 1, n);
                    })
                  : n();
              })(e + 1, t);
            }),
            (t.onceNextCssLayout = function () {
              return new Promise(function (e) {
                r(e);
              });
            }),
            (t.onceTransitionEnd = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return new Promise(function (n) {
                o(e, 'transition', t).then(n);
              });
            }),
            (t.onceAnimationEnd = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return new Promise(function (n) {
                o(e, 'animation', t).then(n);
              });
            });
        }
      ]);
    },
    ,
    function (e, t, n) {
      e.exports = n(7);
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return AutoplayHoc;
        });
      var r = n(3),
        o = n.n(r),
        i = n(4),
        c = n(2),
        a = n.n(c),
        s = n(0),
        u = n(1);
      function _typeof(e) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(e) {
                return typeof e;
              }
            : function _typeof(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function _objectWithoutPropertiesLoose(e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function _possibleConstructorReturn(e, t) {
        return !t || ('object' !== _typeof(t) && 'function' != typeof t)
          ? (function _assertThisInitialized(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
      }
      var l = 'awssld';
      function AutoplayHoc(e) {
        var t, n;
        return (
          (n = t = (function (t) {
            function _class(e) {
              var t;
              return (
                (function _classCallCheck(e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, _class),
                ((t = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, e))).forceStop = !1),
                (t.rootElement = e.rootElement || l),
                (t.mergedStyles = Object(u.e)(e.cssModule)),
                (t.state = { selected: 0 }),
                t
              );
            }
            return (
              (function _inherits(e, t) {
                if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
                  t && _setPrototypeOf(e, t);
              })(_class, t),
              (function _createClass(e, t, n) {
                return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
              })(_class, [
                {
                  key: 'componentWillReceiveProps',
                  value: function componentWillReceiveProps(e) {
                    (this.mergedStyles = Object(u.e)(e.cssModule)), this.checkStartStatus(e);
                  }
                },
                {
                  key: 'setInfo',
                  value: function setInfo(e) {
                    (this.currentInfo = e), e.currentIndex !== this.state.selected && this.setState({ selected: e.currentIndex });
                  }
                },
                {
                  key: 'setTimer',
                  value: function setTimer(e) {
                    var t = this;
                    if (!0 !== this.forceStop) {
                      var n = e.querySelector(
                          '.'.concat(Object(u.c)(Object(s.c)(''.concat(this.rootElement, '__timer'), this.mergedStyles)))
                        ),
                        r = e.querySelector('div');
                      r &&
                        (n || ((n = this.createBarElement()), r.appendChild(n)),
                        n.classList.remove(Object(s.c)(''.concat(this.rootElement, '__timer--animated'), this.mergedStyles)),
                        Object(i.onceNextCssLayout)().then(function () {
                          n.classList.remove(Object(s.c)(''.concat(t.rootElement, '__timer--run'), t.mergedStyles)),
                            n.classList.remove(Object(s.c)(''.concat(t.rootElement, '__timer--fast'), t.mergedStyles)),
                            Object(i.onceNextCssLayout)().then(function () {
                              n.classList.add(Object(s.c)(''.concat(t.rootElement, '__timer--animated'), t.mergedStyles)),
                                Object(i.onceNextCssLayout)().then(function () {
                                  n.classList.add(Object(s.c)(''.concat(t.rootElement, '__timer--run'), t.mergedStyles)),
                                    Object(i.onceTransitionEnd)(n).then(function () {
                                      t.clearBarAnimation(n), !0 !== t.forceStop && !1 !== t.props.play && t.goTonext();
                                    });
                                });
                            });
                        }));
                    }
                  }
                },
                {
                  key: 'getBarFromSlide',
                  value: function getBarFromSlide(e) {
                    return (
                      e.querySelector('.'.concat(Object(u.c)(Object(s.c)(''.concat(this.rootElement, '__timer'), this.mergedStyles)))) ||
                      null
                    );
                  }
                },
                {
                  key: 'checkStartStatus',
                  value: function checkStartStatus(e) {
                    this.currentInfo &&
                      this.props.play !== e.play &&
                      (!0 === e.play && this.currentInfo && this.setTimer(this.currentInfo.currentSlide),
                      !1 === e.play && this.forceClearBar(this.currentInfo));
                  }
                },
                {
                  key: 'createBarElement',
                  value: function createBarElement() {
                    var e = document.createElement('div');
                    return (
                      e.classList.add(Object(s.c)(''.concat(this.rootElement, '__timer'), this.mergedStyles)),
                      e.style.setProperty('--timer-delay', ''.concat(this.props.interval, 'ms')),
                      e.style.setProperty('--timer-height', this.props.timerHeight),
                      e.style.setProperty('--timer-background-color', this.props.timerBackgroundColor),
                      e
                    );
                  }
                },
                {
                  key: 'clearBar',
                  value: function clearBar(e) {
                    var t = this,
                      n = this.getBarFromSlide(e.currentSlide);
                    n &&
                      (n.clearCssEndEvent && n.clearCssEndEvent(),
                      n.classList.add(Object(s.c)(''.concat(this.rootElement, '__timer--fast'), this.mergedStyles)),
                      Object(i.onceTransitionEnd)(n).then(function () {
                        t.clearBarAnimation(n);
                      }));
                  }
                },
                {
                  key: 'clearBarAnimation',
                  value: function clearBarAnimation(e) {
                    e.classList.remove(Object(s.c)(''.concat(this.rootElement, '__timer--animated'), this.mergedStyles));
                  }
                },
                {
                  key: 'restartBarAnimation',
                  value: function restartBarAnimation(e) {
                    e.classList.remove(Object(s.c)(''.concat(this.rootElement, '__timer--run'), this.mergedStyles)),
                      e.classList.remove(Object(s.c)(''.concat(this.rootElement, '__timer--fast'), this.mergedStyles));
                  }
                },
                {
                  key: 'forceClearBar',
                  value: function forceClearBar(e) {
                    var t = this.getBarFromSlide(e.currentSlide);
                    this.restartBarAnimation(t);
                  }
                },
                {
                  key: 'goTonext',
                  value: function goTonext() {
                    var e = this.currentInfo,
                      t = e.currentIndex + 1,
                      n = t > e.slides - 1 ? 0 : t;
                    n !== this.state.selected ? this.setState({ selected: n }) : this.forceClearBar(this.currentInfo);
                  }
                },
                {
                  key: 'render',
                  value: function render() {
                    var t = this,
                      n = this.props,
                      r = (n.inverval, n.play),
                      i = n.cancelOnInteraction,
                      c = (n.showTimer, n.onTransitionStart),
                      a = n.onTransitionEnd,
                      s = n.onFirstMount,
                      u = n.onTransitionRequest,
                      l = _objectWithoutProperties(n, [
                        'inverval',
                        'play',
                        'cancelOnInteraction',
                        'showTimer',
                        'onTransitionStart',
                        'onTransitionEnd',
                        'onFirstMount',
                        'onTransitionRequest'
                      ]);
                    return o.a.createElement(
                      e,
                      _extends({}, l, {
                        selected: this.state.selected,
                        onFirstMount: function onFirstMount(e) {
                          s && s(e), l.startupScreen || (t.setInfo(e), !0 === r && t.setTimer(e.currentSlide));
                        },
                        onTransitionStart: function onTransitionStart(e) {
                          var n = t.getBarFromSlide(e.nextSlide);
                          n && t.restartBarAnimation(n), c && c(e);
                        },
                        onTransitionRequest: function onTransitionRequest(e) {
                          t.clearBar(e), (t.currentInfo = e), !0 === i && (t.forceStop = !0), u && u(e);
                        },
                        onTransitionEnd: function onTransitionEnd(e) {
                          t.setInfo(e), !0 === r && t.setTimer(e.currentSlide), a && a(e);
                        }
                      })
                    );
                  }
                }
              ]),
              _class
            );
          })(r.Component)),
          _defineProperty(t, 'propTypes', {
            interval: a.a.number,
            cssModule: a.a.any,
            play: a.a.bool,
            cancelOnInteraction: a.a.bool,
            timerHeight: a.a.string,
            timerBackgroundColor: a.a.string,
            showTimer: a.a.bool,
            onTransitionStart: a.a.func,
            onTransitionEnd: a.a.func,
            onTransitionRequest: a.a.func,
            rootElement: a.a.string
          }),
          _defineProperty(t, 'defaultProps', {
            interval: 2e3,
            play: !1,
            cancelOnInteraction: !1,
            timerHeight: '6px',
            cssModule: null,
            timerBackgroundColor: 'rgba(0, 0, 0, 0.15)',
            showTimer: !0,
            onTransitionStart: null,
            onTransitionEnd: null,
            onTransitionRequest: null,
            rootElement: l
          }),
          n
        );
      }
    }
  ]);
});
