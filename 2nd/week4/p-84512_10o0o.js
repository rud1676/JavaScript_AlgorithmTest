function solution(word) {
  const wordValueMap = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const indexMultiplyConstantArr = new Array(5);
  indexMultiplyConstantArr[4] = 1;
  for (let i = 3; i >= 0; i -= 1) {
    indexMultiplyConstantArr[i] = 1 + indexMultiplyConstantArr[i + 1] * 5;
  }

  let result = 0;

  for (let i = 0; i < word.length; i += 1) {
    const oneStr = word[i];
    result += 1 + wordValueMap[oneStr] * indexMultiplyConstantArr[i];
  }

  return result;
}
