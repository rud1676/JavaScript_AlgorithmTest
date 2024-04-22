function solution(bridge_length, weight, truck_weights) {
  var now = 0;
  let que = [];
  let totalweight = 0;

  // 다리를 건너는 트럭은 큐로
  // if 무게수용
  // 큐에 트럭 넣음
  // total 무게 갱신
  // 수용못하면.. 다리 지날때 까지기다리기.
  // 큐에 트럭 넣을때 몇초엿는지 정보 있어야할듯

  for (let tr of truck_weights) {
    if (totalweight + tr <= weight) {
      now++;
      // 무게 시간이 늘어날 땐 시간 초과 된건 빼줘야됨
      if (que.length !== 0) {
        while (que[0][1] + bridge_length <= now) {
          totalweight -= que[0][0];
          que.shift();
        }
      }
    } else {
      //못담을땐 앞에있는 시간에 더해줘야됨
      while (totalweight + tr > weight) {
        now = que[0][1] + bridge_length;
        totalweight -= que[0][0];
        que.shift();
      }
    }
    que.push([tr, now]);
    totalweight += tr;
  }
  if (que) {
    now = que[que.length - 1][1] + bridge_length;
    console.log(que);
  }

  return now;
}
