function solution(s) {
  let counts = s.length;
  if (counts === 1) return 0;

  let result = 0;

  const check = () => {
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
      if (['[', '{', '('].includes(s[i])) {
        stack.push(s[i]);
      } else {
        const popped = stack.pop();

        if (s[i] === ']' && popped !== '[') {
          return;
        } if (s[i] === '}' && popped !== '{') {
          return;
        } if (s[i] === ')' && popped !== '(') {
          return;
        }
      }
    }

    if (stack.length) return;

    result += 1;
  };

  while (1) {
    counts -= 1;
    check();
    if (!counts) break;

    s = `${s[s.length - 1]}${s.substring(0, s.length - 1)}`;
  }

  return result;
}
