function solution(phone_book) {
  var answer = true;
  const hash = {};

  phone_book.map((str) => {
    hash[str] = true;
    return str;
  });

  phone_book.map((str) => {
    let pre = "";
    for (let i = 0; i < str.length - 1; i++) {
      pre += str[i];
      if (hash[pre]) answer = false;
    }
  });

  return answer;
}
