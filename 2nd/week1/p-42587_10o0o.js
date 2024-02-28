class LinkedNode {
  constructor(priority, location) {
      this.priority = priority;
      this.location = location;
      this.next = null;
      this.prev = null;
  }
}

function solution(priorities, location) {
  const queue = [...priorities].sort((a, b) => a - b);    
  const firstNode = new LinkedNode(priorities[0], 0)
  let head = firstNode;
  
  for (let i = 1; i < priorities.length; i += 1) {
      const linkedNode = new LinkedNode(priorities[i], i);
      head.next = linkedNode;
      linkedNode.prev = head;
      head = linkedNode;
  }
  
  head.next = firstNode;
  firstNode.prev = head;
  head = firstNode;
  
  let result = 1;
  
  while (1) {
      if (head.priority === queue[queue.length - 1]) {
          if (head.location === location) {
              return result;
          }
          
          queue.pop();
          head.prev.next = head.next;
          head.next.prev = head.prev;
          head = head.prev;
          result += 1;
      }
      
      head = head.next;
  }
}