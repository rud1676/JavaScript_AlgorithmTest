/*
function comb(arr,sel){
  const result = [];
  if(sel===1) return arr.map(v=>[v]);
  arr.forEach((v,idx,origin)=>{
      const rest = origin.slice(idx+1);
      const combination = comb(rest,sel-1);
      const attach = combination.map(va=>[v,...va])
      result.push(...attach);
  })
  return result;
}
function solution(clothes) {
  var answer = 0;
  let set = {};
  clothes.map(v=>{
      if(set[v[1]]) 
          set[v[1]] += 1;
      else 
          set[v[1]] = 1;
  })
  
  // 1개만..
  // 2개만..
  // 3개만...
  // 모든 조합의 곱을 어떻게 표현하지??
  
  const v = [...Object.values(set)];
  for(let i=1;i<=v.length;i++){
      const idxcomb=comb(Array(v.length).fill(0).map((_v,ii)=>ii),i);
      for(let combi of idxcomb){
      let mul=1;
          for(let idx of combi){
              mul*=v[idx];
          }
      answer+=mul;
      }
  }
  return answer;
}
*/
// 이거 왜 1번만 런타임 에러나오는지 모르겠음 ㅠㅜ
