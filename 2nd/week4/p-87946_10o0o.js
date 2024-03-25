function solution(k, dungeons) {
  const len = dungeons.length;
  const visited = new Array(len).fill(false);
  let clearCnt = 0;
  
  const dfs = (k, curCnt) => {
      clearCnt = Math.max(curCnt, clearCnt);
    
      for(let i=0; i<len; i++) {
          const [minK, useK] = dungeons[i];
                     
          if(k >= minK && !visited[i]) {
              visited[i] = true;
              dfs(k - useK, curCnt + 1);
              visited[i] = false;
          }
      }
  }
  dfs(k, 0);
  
  return clearCnt;
}
