function solution(k, dungeons) {
  let index = [];
  for (let i = 0; i < dungeons.length; i++) {
    index.push(i);
  }

  const getPermutations = (arr, num) => {
    const results = [];

    // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      // 나머지 배열을 기준으로 다시 순열을 구한다.
      // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
      const permutations = getPermutations(rest, num - 1);

      // 기준값(fixed)에 순열(permutations)을 붙인다.
      const attached = permutations.map((v) => [fixed, ...v]);

      // 붙인 값을 결과 값에 넣어준다.
      results.push(...attached);
    });

    return results;
  };

  let countarr = [];
  let arr = getPermutations(index, dungeons.length);
  for (let i = 0; i < arr.length; i++) {
    let tired = k;
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (tired >= dungeons[arr[i][j]][0]) {
        tired = tired - dungeons[arr[i][j]][1];
        count++;
      }
    }
    countarr.push(count);
  }

  return Math.max(...countarr);
}
