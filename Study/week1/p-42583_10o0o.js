class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    if (!this.length) return undefined;

    const { value } = this.head;
    this.head = this.head.next;
    this.length -= 1;

    if (!this.length) {
      this.tail = null;
    }

    return value;
  }

  push(value) {
    const linkedNode = new LinkedNode(value);

    if (!this.length) {
      this.head = linkedNode;
    } else {
      this.tail.next = linkedNode;
    }

    this.length += 1;
    this.tail = linkedNode;
  }
}

function solution(bridgeLength, weight, truckWeights) {
  truckWeights.reverse();

  const memo = new Array(truckWeights.length).fill(0);
  const queue = new Deque();

  let time = 1;
  let sum = 0;

  while (truckWeights.length) {
    const lastIndex = truckWeights.length - 1;

    if (truckWeights[lastIndex] + sum <= weight) {
      memo[lastIndex] = time;
      sum += truckWeights[lastIndex];
      queue.push({
        index: lastIndex,
        truckWeight: truckWeights.pop(),
      });

      time += 1;
    } else {
      const { index, truckWeight } = queue.shift();
      const targetTime = memo[index];

      time += Math.max(0, bridgeLength - (time - targetTime));
      sum -= truckWeight;
    }
  }

  while (queue.length) {
    const { index, truckWeight } = queue.shift();
    const targetTime = memo[index];

    time += Math.max(0, bridgeLength - (time - targetTime));
    sum -= truckWeight;
  }

  return time;
}