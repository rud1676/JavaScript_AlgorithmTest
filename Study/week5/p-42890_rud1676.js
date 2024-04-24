const ans = [];
function checkMinimal(arr) {
  let isMini = true;
  ans.map((v) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
      if (v.includes(arr[i])) cnt++;
    }
    if (v.length === cnt) isMini = false;
  });
  return isMini;
}

function isUnique(idxarr, relation) {
  const s = new Set();
  let ch = true;
  relation.map((v) => {
    let onerow = ""; // 컬럼값 한줄 가져오기
    for (let i = 0; i < idxarr.length; i++) {
      onerow += v[idxarr[i]];
    }
    if (s.has(onerow)) ch = false;
    else {
      s.add(onerow);
    }
  });
  console.log(s);
  return ch;
}
function comb(arr, l) {
  const result = [];
  if (l === 1) return arr.map((v) => [v]);
  arr.forEach((fix, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const com = comb(rest, l - 1);
    const attach = com.map((v) => [...v, fix]);
    result.push(...attach);
  });
  return result;
}

function solution(relation) {
  // 조합 배열
  const cLength = relation[0].length;
  const comArray = [];
  for (let i = cLength; i > 0; i--) {
    const temp = comb(
      Array(cLength)
        .fill(0)
        .map((v, i) => i),
      i
    );
    comArray.push(...temp);
  }

  while (comArray.length) {
    const v = comArray.pop();
    // 최소성 검사
    if (checkMinimal(v)) {
      if (isUnique(v, relation)) {
        // 유일성
        ans.push(v);
      }
    }
  }
  return ans.length ? ans.length : 1;
}
