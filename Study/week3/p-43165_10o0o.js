function solution(numbers, target) {
  const { length } = numbers;

  let result = 0;

  const recursive = (index, sum) => {
    if (index === length) {
      if (sum === target) result += 1;
      return;
    }

    const number = numbers[index];
    recursive(index + 1, sum + number);
    recursive(index + 1, sum - number);
  };

  recursive(0, 0);

  return result;
}
