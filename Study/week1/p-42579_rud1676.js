function solution(genres, plays) {
  var answer = [];
  // 10000, 10000
  let hash = {};
  genres.map((v, i) => {
    if (hash[v]) hash[v].push(i);
    else hash[v] = [i];
  });
  let total = {};

  // 1만번
  for (let gen of Object.keys(hash)) {
    for (let num of hash[gen]) {
      if (total[gen]) total[gen] += plays[num];
      else total[gen] = plays[num];
    }
  }

  const temp = [];
  for (let [key, value] of Object.entries(total)) {
    temp.push([key, value]);
  }

  const sr = temp.sort((a, b) => {
    return b[1] - a[1];
  });

  // 장르 정함

  sr.map((v) => {
    const playsongs = [];
    for (let song of hash[v[0]]) {
      playsongs.push([song, plays[song]]);
    }
    if (playsongs.length === 1) {
      //하나있으면 그냥 넣어줌
      answer.push(playsongs[0][0]);
    } else {
      // 두개이상 규칙 따르기
      const srsongs = playsongs.sort((a, b) => b[1] - a[1]); // 제일 많이 들은 순서의 곡들
      if (srsongs[0][1] == srsongs[1][1]) {
        // 만약 횟수가 같다면 고유번호 낮은걸로
        if (srsongs[0][0] > srsongs[1][0]) {
          answer.push(srsongs[1][0]);
          answer.push(srsongs[0][0]);
        } else {
          answer.push(srsongs[0][0]);
          answer.push(srsongs[1][0]);
        }
      } else {
        answer.push(srsongs[0][0]);
        answer.push(srsongs[1][0]);
      }
    }
  });

  return answer;
}
