const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 비트마스킹으로 어떤구역을 A,B로 나눌지 케이스 분리 1000 -> 모든건 안된다.
// 각케이스 모든점 dfs진행 (최대 10개)
// dfs는 나눠진 점만 체크 => 한번 돌렷는데 남는 점이 잇으면 안됨 fail리턴
// 되면 각 구역별 인구합 + 차이 구함 (최소값 이 정답)

// bfs시작점 항상 체크해주기!!

function solution() {
  const n = +input.shift();
  const pop = input.shift().split(" ").map(Number);

  const gr = Array(n)
    .fill(0)
    .map((v) => []);

  for (let i = 0; i < n; i++) {
    const arr = input.shift().split(" ");
    for (let j = 0; j < arr[0]; j++) {
      gr[i].push(Number(arr[j + 1]));
    }
  }
  let result = Infinity;
  for (let i = 1; i < (1 << n) - 1; i++) {
    //비트마스킹으로 선택 했습니다~
    if (cs(i, gr, n)) {
      let suma = 0,
        sumb = 0;
      for (let j = 0; j < n; j++) {
        if (i & (1 << j)) {
          suma += pop[j];
        } else sumb += pop[j];
      }
      result = Math.min(Math.abs(suma - sumb), result);
    }
  }
  if (result === Infinity) console.log(-1);
  else console.log(result);
}

function cs(i, gr, n) {
  // 영역 나누기
  let vst = Array(n).fill(0);

  for (let j = 0; j < n; j++) {
    if (i & (1 << j)) {
      //1은 area A라 해보자.
      vst[j] = 1;
      dfs(vst, i, gr, j, 1);
      break;
    }
  }

  for (let j = 0; j < n; j++) {
    if (!(i & (1 << j))) {
      //0은 area 2라 해보자.
      vst[j] = 1;

      dfs(vst, i, gr, j, 2);
      break;
    }
  }
  for (let k = 0; k < n; k++) {
    if (vst[k] === 0) return false;
  }
  return true;
  // area 한점씩 돌았어 vst없는거 있으면 안됨!
}

function dfs(vst, mp, gr, x, area) {
  for (let nx of gr[x]) {
    nx = nx - 1;
    if (vst[nx]) continue; // 방문했다면 넘겨
    if (area === 2 && mp & (1 << nx)) continue; //area에 1일때 1이 영역에 있는 애가 아니면 패스
    if (area === 1 && !(mp & (1 << nx))) continue; // area 2 일때 2인 영역애 있는 애가 아니면 패스
    vst[nx] = 1;
    dfs(vst, mp, gr, nx, area);
  }
}

solution();
