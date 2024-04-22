function solution(userIds, bannedIds) {
  const map = {};

  for (let i = 0; i < userIds.length; i += 1) {
    const userId = userIds[i];
    let t = [map];

    for (let j = 0; j < userId.length; j += 1) {
      const s = userId[j];
      const nt = [];

      for (const tm of t) {
        if (!tm[s]) {
          tm[s] = {};
        }

        if (!tm['*']) {
          tm['*'] = {};
        }

        nt.push(tm[s], tm['*']);
      }

      t = nt;
    }

    for (const el of t) {
      if (!el.fi) el.fi = [];

      el.fi.push(1 << i);
    }
  }

  const c = (s) => {
    let m = map;

    for (const str of s) {
      if (!m[str]) return [];

      m = m[str];
    }

    return m?.fi || [];
  };

  const groups = [];

  for (const bannedId of bannedIds) {
    const group = c(bannedId);

    if (!group.length) return 0;

    groups.push(group);
  }

  const set = new Set();

  const dfs = (i, acc) => {
    if (i === groups.length) {
      set.add(acc);
      return;
    }

    const group = groups[i];

    for (const b of group) {
      if (!(acc & b)) {
        dfs(i + 1, acc + b);
      }
    }
  };

  dfs(0, 0);

  return set.size;
}
