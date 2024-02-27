function solution(participant, completion) {
  const memo = {};
  
  for (const person of completion) {
      memo[person] = memo[person] !== undefined ? memo[person] + 1 : 1;
  }
  
  for (const person of participant) {
      if (!memo[person]) return person;
      
      memo[person] -= 1;
  }
}