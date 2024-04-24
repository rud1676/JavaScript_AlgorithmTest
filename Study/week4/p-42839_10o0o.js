const isPrimeNum = (number) => {
  if (number === 1) return false;
  const stringNum = String(number);
  if (stringNum.length !== 1 && ['0', '2', '4', '6', '8', '5'].includes(stringNum[stringNum.length - 1])) return false;

  const mid = Math.floor(Math.sqrt(number, 2));

  for (let i = 2; i <= mid; i += 1) {
    if (!(number % i)) return false;
  }

  return true;
};

function solution(numbers) {
  numbers = numbers.split('').map((el) => Number(el));
  const { length } = numbers;
  const result = new Set();

  const memo = new Array(numbers.length).fill(false);

  const recursive = (number) => {
    if (isPrimeNum(number)) { result.add(number); }

    for (let i = 0; i < length; i += 1) {
      if (!memo[i]) {
        const mergedNumber = number * 10 + numbers[i];
        memo[i] = true;
        recursive(mergedNumber);
        memo[i] = false;
      }
    }
  };

  for (let i = 0; i < length; i += 1) {
    const number = numbers[i];
    if (number) {
      memo[i] = true;
      recursive(number);
      memo[i] = false;
    }
  }

  return result.size;
}
