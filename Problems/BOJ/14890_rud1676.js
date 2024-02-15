const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, l] = input.shift().split(" ").map(Number);
const mp = input.map((v) => v.split(" ").map(Number));

function solution() {
  let result = 0;
  for (let i = 0; i < n; i++) {
    //새 층이므로 초기화
    let prev = mp[i][0];
    let cnt = 0;
    let check = true;
    for (let j = 0; j < n; j++) {
      // 올라갈 때 => cnt=-l일때 가능
      // cnt !=0  이면 불가능.
      // cnt =0 으로 초기화(새로운 카운트)

      if (prev === mp[i][j]) {
      } else if (prev === mp[i][j] - 1 && cnt === -l) {
        cnt = 0;
      }
      //내려갈 때
      else if (prev === mp[i][j] + 1 && cnt <= 0) {
        //칸이 바뀌면 새로운 카운트 - 내려가면 내려가는 값이 충분히 있어야됨.
        //만약 cnt>0이면 내려가고 값을 못채운거임.
        cnt = l;
      } else {
        check = false;
        break;
      }
      if (cnt > -l) cnt--;

      prev = mp[i][j];
    }
    if (cnt > 0) check = false; // 마지막 내리막 검사

    if (check) {
      //console.log(i);
      result++;
    }
  }

  for (let i = 0; i < n; i++) {
    //새 층이므로 초기화
    let prev = mp[0][i];
    let cnt = 0;
    let check = true;
    for (let j = 0; j < n; j++) {
      // 올라갈 때 => cnt=-l일때 가능
      // cnt !=0  이면 불가능.
      // cnt =0 으로 초기화(새로운 카운트)
      if (prev === mp[j][i]) {
      } else if (prev === mp[j][i] - 1 && cnt === -l) {
        cnt = 0;
      }
      //내려갈 때
      else if (prev === mp[j][i] + 1 && cnt <= 0) {
        //칸이 바뀌면 새로운 카운트 - 내려가면 내려가는 값이 충분히 있어야됨.
        //만약 cnt>0이면 내려가고 값을 못채운거임.
        cnt = l;
      } else {
        check = false;
        break;
      }
      if (cnt > -l) cnt--;
      prev = mp[j][i];
    }
    if (cnt > 0) check = false; // 마지막 내리막 검사
    if (check) {
      //console.log(i);
      result++;
    }
  }

  console.log(result);
}
// 숫자 바뀌는거 1차이면
// L로 카운트
// 1. 내려가는 거 생각해보자.
// 내려갈때 +L하고 같은칸유지시 -1 해서 0 도달하면 길 OK 그전에 층이 바뀌면 fail
// 2. 올라갈때
// 같은칸 유지시 -1해서 최대 -L까지 올라갈때 +L해서 0으로
//
// 유지 -1씩 L = 0 이면 경사 OK
// 한칸씩 같은칸 갈때마다 -1씩 (최대-L)

solution();
