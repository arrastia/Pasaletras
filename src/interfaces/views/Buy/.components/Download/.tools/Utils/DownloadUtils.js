const getPath = (update, first, last, smoothing, pointsNew) => {
  let points = pointsNew
      ? pointsNew
      : [
          [first, 16],
          [20, update],
          [last, 16]
        ],
    d = points.reduce((acc, point, i, a) => (i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(a, i, point, smoothing)}`), '');

  return `<path d="${d}" />`;
};

const getPoint = (a, i, point, smoothing) => {
  let cp = (current, previous, next, reverse) => {
      let p = previous || current,
        n = next || current,
        o = { length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)), angle: Math.atan2(n[1] - p[1], n[0] - p[0]) },
        angle = o.angle + (reverse ? Math.PI : 0),
        length = o.length * smoothing;
      return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    },
    cps = cp(a[i - 1], a[i - 2], point, false),
    cpe = cp(point, a[i - 1], a[i + 1], true);

  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
};

export const DownloadUtils = { getPath };
