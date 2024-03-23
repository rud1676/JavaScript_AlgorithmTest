function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const people = [person1, person2, person3];

  const findPersonAnswer = (person, idx) => {
    if (person[idx]) return person[idx];

    return findPersonAnswer(person, idx - person.length);
  };

  const checkAnsCount = (person) => {
    let count = 0;

    for (let i = 0; i < answers.length; i += 1) {
      const answer = findPersonAnswer(person, i);

      if (answers[i] === answer) count += 1;
    }

    return count;
  };

  const result = [];
  for (const person of people) {
    result.push(checkAnsCount(person));
  }

  const findManyCorrect = (result) => {
    let BigOne;
    let newArr = [];
    for (let i = 1; i <= result.length; i += 1) {
      if (!BigOne || result[i - 1] > BigOne) {
        BigOne = result[i - 1];
        newArr = [i];
      } else if (result[i - 1] === BigOne) {
        newArr.push(i);
      }
    }
    return newArr;
  };

  return findManyCorrect(result);
}
