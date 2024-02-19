const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const diff = [
  // [y,x]
  [0, 1], //right
  [0, -1], // left
  [1, 0], // down
  [-1, 0], // up
];

const [r, c] = input.shift().split(" ").map(Number);
const vst = Array.from(Array(c), () => Array(r).fill(0));
const lvst = Array.from(Array(c), () => Array(r).fill(0));
const mp = input.map((v) => {
  return v.split(" ").map(Number);
});

const aInfo = {};
const result=[];

function dfs(y, x,area) {
  let ret=1;
  for (let i = 0; i < 4; i++) {
    const ny = y + diff[i][0];
    const nx = x + diff[i][1];

    if (ny < 0 || ny >= c || nx < 0 || nx >= r || vst[ny][nx]) continue;

    if (i == 0 && mp[y][x] & (1 << 2)) continue; // move right check right block
    else if (i == 1 && mp[y][x] & (1 << 0)) continue; // move left check left block
    else if (i == 2 && mp[y][x] & (1 << 3)) continue; // move up check up block
    else if (i == 3 && mp[y][x] & (1 << 1)) continue; // move down check down block

    vst[ny][nx] = area;
    ret+=dfs(ny,nx,area);
  }
  return ret;
}

function findch(y,x,list){
  for(let i=0;i<4;i++){
    const ny = y+diff[i][0];
    const nx = x+diff[i][1];
    if(ny<0||nx<0||ny>=c||nx>=r) continue;
    if(vst[y][x]!==vst[ny][nx]) {
      list.add(vst[ny][nx]);
      continue;
    }
    if(lvst[ny][nx]) continue;
    lvst[ny][nx]=1;

    findch(ny,nx,list);
  }
  return list;
}



  // 각 방을 방문해 dfs돌린다. => area로 구분 (1번)
  // area번호 => size를 대응 시킨다. (2번)
  // 맵을 다 돈다.
  // 방이 인접한 정보를 알아야됨. => 그래프로 연결해본다.
  // 인접한 애들 두명 짝지어서 더해본다.
function solution() {
  let area = 1;
  for(let i=0;i<c;i++){
    for(let j=0;j<r;j++){
      if(vst[i][j]===0) {
        vst[i][j]=area;
        const cnt = dfs(i,j,area);
        aInfo[area]=cnt;
        area++;
      }
    }
  }

  // 인접한애들 찾기 위해 벽일때 푸쉬함.
  let a = {}
  for(let i=1;i<=area-1;i++){
      a[i] = new Set();
  }
  for(let i=0;i<c;i++){
    for(let j=0;j<r;j++){
      if(!lvst[i][j]){
        lvst[i][j]=1;
        const area = vst[i][j];
        a[area]=findch(i,j,a[area]);
      }
    }
  }
  // 인접행렬 a

let mx = -1;
for(let key of Object.keys(a)){
  let suma = aInfo[key];
  for(let b of a[key].entries()){
    mx = Math.max(mx,suma+aInfo[b[0]]);
  }
}

  

  result.push(area-1);
  result.push(Math.max(...Object.values(aInfo)));
  result.push(mx);
  result.map(v=>console.log(v));
}

solution();
