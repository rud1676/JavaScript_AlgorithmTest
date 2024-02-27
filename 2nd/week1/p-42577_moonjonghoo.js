function solution(phonebook) {
  let answer = true;
  for (const phoneNumber of phonebook) {
    for (let i = 1; i < phoneNumber.length; i++) {
      const frontnumber = phoneNumber.slice(0, i);
      if (phonebook.includes(frontnumber)) {
        return false;
      }
    }
  }
  return answer;
}
console.log(solution(["119", "97674223", "1195524421"]));

//시간초과.
