function solution(n, wires) {
  const max = n;
  let result = max;

  class MyNode {
      constructor(index) {
          this.index = index;
          this.connections = [];
      }
  }

  const nodesArray = new Array(n + 1).fill().map((_, index) => new MyNode(index));

  for (const wire of wires) {
      const [index1, index2] = wire;
      nodesArray[index1].connections.push(nodesArray[index2]);
      nodesArray[index2].connections.push(nodesArray[index1]);
  }

  const search = (targetNode, beforeIndex) => {
      let sum = 1;

      for (const connectNode of targetNode.connections) {
          if (connectNode.index !== beforeIndex) {
              sum += search(connectNode, targetNode.index);
          }
      }

      return sum;
  }

  for (const wire of wires) {
      const sum1 = search(nodesArray[wire[0]], wire[1]);
      const sum2 = search(nodesArray[wire[1]], wire[0]);

      result = Math.min(Math.abs(sum1 - sum2), result);
  }

  return result;
}