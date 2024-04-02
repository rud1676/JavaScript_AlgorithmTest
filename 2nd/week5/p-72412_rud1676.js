function binarySearch(arr, find) {
  let left = 0; // big
  let right = arr.length; // small
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < find) right = mid;
    else left = mid + 1;
  }

  return left; // position이니까 갯수 반환하려면 +1해줘야됨
}
function solution(info, query) {
  var answer = [];
  const group = {};
  function go(arr, idx, score) {
    if (idx === 4) {
      const temp = arr.join();
      if (group[temp]) group[temp].push(score);
      else group[temp] = [score];
      return;
    }

    go([...arr], idx + 1, score);
    arr[idx] = "-";
    go([...arr], idx + 1, score);
  }
  info.map((v) => {
    // 50,000 * 16
    const spl = v.split(" ");
    go(spl.slice(0, 4), 0, +spl[4]);
  });

  for (let k in group) {
    group[k].sort((a, b) => b - a); // 내림차순 정렬
  }

  query.map((v) => {
    const temp = v.split(" and ");
    const [t, score] = temp[3].split(" ");
    const q = [...temp.slice(0, 3), t];
    const gr = q.join();
    const cksc = parseInt(score);
    if (group[gr]) {
      answer.push(binarySearch(group[gr], cksc));
    } else answer.push(0);
  });

  return answer;
}
