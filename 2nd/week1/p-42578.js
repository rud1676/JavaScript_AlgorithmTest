function solution(clothes) {
  let answer = 1; //초기화 
  let categoryMap = new Map(); //카테고리별 의상 수를 저장할 map
  
  
  for(let [itemName, category] of clothes) {
      if(categoryMap.has(category)) { //boolean
          categoryMap.set(category, categoryMap.get(category) + 1);
          console.log(categoryMap)
      }else {
          categoryMap.set(category, 1)
      }
  }
  
  for (let count of categoryMap.values()) {
      answer*=(count+1)
  }

  return answer -1;
}

// new Map()
// -> Map 객체를 만들때 쓰인다.
// map.set(key,value)
// -> key를 이용해 value값을 저장한다.
// map.get(key)
// -> key에 해당하는 value를 반환한다.
// map.has(key)
// -> key가 존재한다면 true, 없다면 false를 반환한다.
// map.delete(key)
// -> key에 해당하는 값을 삭제한다.
// map.size
// -> 요소의 개수를 반환한다.
