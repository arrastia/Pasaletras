import React, { Fragment, useEffect, useRef } from 'react';

import './Download.scss';

export const Download = () => {
  const arrowRef = useRef(null);
  const buttonRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    let svgPath = new Proxy(
      { y: null, s: null, f: null, l: null },
      {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.s != null && target.f != null && target.l != null) {
            arrowRef.current.innerHTML = getPath(target.y, target.f, target.l, target.s, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        }
      }
    );

    svgPath.f = 8;
    svgPath.l = 32;
    svgPath.s = 0;
    svgPath.y = 30;

    buttonRef.current.addEventListener('click', event => {
      if (!buttonRef.current.classList.contains('loading')) {
        if (!buttonRef.current.classList.contains('animation')) {
          buttonRef.current.classList.add('loading', 'animation');

          setTimeout(() => {
            iconRef.current.style.setProperty('overflow', 'visible');
            setTimeout(() => {
              buttonRef.current.classList.remove('animation');
            }, 600);
          }, 4820);
        }
      } else {
        if (!buttonRef.current.classList.contains('animation')) {
          buttonRef.current.classList.add('reset');
          setTimeout(() => {
            buttonRef.current.classList.remove('loading', 'reset');
            iconRef.current.removeAttribute('style');
          }, 400);
        }
      }
      event.preventDefault();
    });
  }, []);

  const getPoint = (point, i, a, smoothing) => {
    let cp = (current, previous, next, reverse) => {
        let p = previous || current,
          n = next || current,
          o = {
            length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
            angle: Math.atan2(n[1] - p[1], n[0] - p[0])
          },
          angle = o.angle + (reverse ? Math.PI : 0),
          length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
      },
      cps = cp(a[i - 1], a[i - 2], point, false),
      cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  };

  const getPath = (update, first, last, smoothing, pointsNew) => {
    let points = pointsNew
        ? pointsNew
        : [
            [first, 16],
            [20, update],
            [last, 16]
          ],
      d = points.reduce((acc, point, i, a) => (i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`), '');
    return `<path d="${d}" />`;
  };

  return (
    <Fragment>
      <button className="button" ref={buttonRef}>
        <svg className="circle" viewBox="0 0 76 76">
          <circle className="default" cx="38" cy="38" r="36"></circle>
          <circle className="active" cx="38" cy="38" r="36"></circle>
        </svg>
        <div className="icon" ref={iconRef}>
          <svg className="line" viewBox="0 0 4 37">
            <line x1="2" y1="2" x2="2" y2="35"></line>
          </svg>
          <div>
            <svg className="arrow" viewBox="0 0 40 32" ref={arrowRef}></svg>
            <svg className="progress" viewBox="0 0 444 10">
              <path d="M2,5 L42,5 C60.0089086,6.33131695 73.3422419,6.99798362 82,7 C87.572404,7.00129781 91.0932494,1.72677301 102,1.99944178 C112.906751,2.27211054 112.000464,7.99986045 122,8 C131.999536,8.00013955 132,2 142,2 C152,2 152,8 162,8 C172,8 172,2 182,2 C192,2 192,8 202,8 C212,8 212,2 222,2 C232,2 232,8 242,8 C252,8 252,2 262,2 C272,2 272,8 282,8 C292,8 292,2 302,2 C312,2 312,8 322,8 C332,8 332,2 342,2 C352,2 351.897852,7.49489262 362,8 C372.102148,8.50510738 378.620177,5.22532154 402,5 L442,5"></path>
            </svg>
          </div>
        </div>
        {/* <span>0%</span> */}
      </button>
    </Fragment>
  );
};
