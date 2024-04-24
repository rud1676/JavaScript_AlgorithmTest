function solution(user_id, banned_id) {
  var answer = 0;

  let mp = [];
  for (let b = 0; b < banned_id.length; b++) {
    const ban = banned_id[b];
    for (let k = 0; k < user_id.length; k++) {
      const id = user_id[k];
      if (id.length !== ban.length) continue;
      let ck = true;
      for (let i = 0; i < id.length; i++) {
        if (ban[i] === "*") continue;
        if (ban[i] !== id[i]) ck = false;
      }
      // 찾은 아이디라면 어떻게 처리할지.
      if (ck) {
        if (!mp[b]) mp.push([k]);
        else mp[b].push(k);
      }
    }
  }
  const result = new Set();
  function go(idx, arr) {
    if (idx === banned_id.length) {
      result.add(arr.sort().join());
      return;
    }
    const fk = mp[idx];
    for (let j = 0; j < fk.length; j++) {
      const el = arr.findIndex((e) => e === fk[j]);
      if (el !== -1) continue;
      arr.push(fk[j]);
      go(idx + 1, arr);
      const del = arr.findIndex((e) => e === fk[j]);
      arr.splice(del, 1);
    }
  }
  go(0, []);
  // set을 이용하면 편햇다 ㅠ
  return result.size;
}
