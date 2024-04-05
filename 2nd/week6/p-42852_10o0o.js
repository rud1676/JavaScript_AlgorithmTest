/* eslint-disable no-shadow */
function solution(n, lost, reserve) {
  const rawStudent = new Array(n).fill(1);

  const checkLostAndReserve = (student) => student.map((el, idx) => {
    if (lost.includes(idx + 1)) el -= 1;
    if (reserve.includes(idx + 1)) el += 1;

    return el;
  });
  const student = checkLostAndReserve(rawStudent);

  const borrowClothes = (student, idx) => {
    for (let i = idx; i < student.length; i += 1) {
      if (student[i] === 2 && student[i - 1] === 0) {
        student[i] -= 1;
        student[i - 1] += 1;
        return borrowClothes(student, i + 1);
      } if (student[i] === 2 && student[i + 1] === 0) {
        student[i] -= 1;
        student[i + 1] += 1;
        return borrowClothes(student, i + 1);
      }
    }

    return student;
  };

  const result = borrowClothes(student, 0);
  return result.filter((el) => el > 0).length;
}
