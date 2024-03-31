function solution(relations) {
  const n = relations[0].length;
  const cm = 1 << n;
  const s = new Set();

  const a = (x) => {
    for (const el of s) {
      if ((x & el) === x) {
        s.delete(el);
      }
    }

    s.add(x);
  };

  const e = (x) => {
    for (const el of s) {
      if ((el & x) === el) {
        return false;
      }
    }

    return true;
  };

  const c = (x) => {
    const ca = new Set();

    for (const r of relations) {
      const ka = [];

      for (let i = 0; i < n; i += 1) {
        if (x & (1 << i)) {
          ka.push(r[i]);
        }
      }

      const k = ka.join(',');

      if (ca.has(k)) return false;

      ca.add(k);
    }

    return true;
  };

  for (let i = 1; i < cm; i += 1) {
    if (e(i) && c(i)) {
      a(i);
    }
  }

  return s.size;
}
