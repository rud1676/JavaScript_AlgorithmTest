function isPrime(num) {
  if (num === 0) return false;
  if (num === 1) return false;
  // 반복문 수행 횟수를 줄였다
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const getPermutations = (arr, num) => {
  const results = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations(rest, num - 1);

    const attached = permutations.map((v) => [fixed, ...v]);

    results.push(...attached);
  });

  return results;
};

function solution(numbers) {
  let arr = numbers.split("");
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let combination = getPermutations(arr, i + 1);
    for (let j = 0; j < combination.length; j++) {
      let sum = "";

      for (let k = 0; k < combination[j].length; k++) {
        sum = sum + combination[j][k];
      }
      answer.push(Number(sum));
    }
  }
  let a = new Set(answer);
  let array = Array.from(a);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      count++;
    }
  }
  return count;
}
