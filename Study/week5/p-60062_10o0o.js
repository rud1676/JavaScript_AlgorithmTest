function solution(n, weak, dist) {
  dist.sort((a, b) => b - a);
  const gwds = [];
  const twds = [];

  const fillWds = () => {
    let point = 0;

    for (let i = 0; i < weak.length; i += 1) {
      twds.push(Math.abs(weak[i] - point));
      point = weak[i];
    }

    twds[0] += n - point;
  };

  fillWds();

  for (let i = 0; i < twds.length; i += 1) {
    gwds.push([...twds]);

    twds.push(twds.shift());
  }

  const gpo = (x) => {
    const peo = dist.slice(0, x);
    const m = new Array(x).fill(0);
    const t = [];
    const g = [];

    const r = () => {
      if (t.length === x) {
        g.push([...t]);
        return;
      }

      for (let i = 0; i < x; i += 1) {
        if (!m[i]) {
          t.push(peo[i]);
          m[i] = 1;
          r();
          t.pop();
          m[i] = 0;
        }
      }
    };

    r();

    return g;
  };

  for (let i = 0; i < dist.length; i += 1) {
    const po = gpo(i + 1);

    for (const wds of gwds) {
      for (const peo of po) {
        let point = 0;
        for (let p of peo) {
          point += 1;

          while ((point < wds.length) && ((p - wds[point]) >= 0)) {
            p -= wds[point];
            point += 1;
          }

          if (point >= wds.length) {
            return i + 1;
          }
        }
      }
    }
  }

  return -1;
}
