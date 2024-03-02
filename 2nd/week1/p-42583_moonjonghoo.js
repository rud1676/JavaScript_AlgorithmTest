function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = [];
  let bridge_weight = 0;
  while (truck_weights.length > 0) {
    answer++;
    if (bridge.length == bridge_length) {
      bridge_weight -= bridge.shift();
    }
    if (bridge_weight + truck_weights[0] > weight) {
      bridge.push(0);
      continue;
    }
    let truck_weight = truck_weights.shift();
    bridge.push(truck_weight);
    bridge_weight += truck_weight;
  }

  answer += bridge_length;

  return answer;
}
