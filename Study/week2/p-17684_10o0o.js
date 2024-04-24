function solution(msg) {
  const dict = new Map();
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((el, index) => {
      dict.set(el, index + 1);
  })
  const result = [];
  
  let str = ''
  let updateValue = 27;
  let pointer = 0;
  
  while (pointer < msg.length) {
      str += msg[pointer]
      
      if (pointer === msg.length - 1) {
          result.push(dict.get(str));
      } else {
          const merged = str + msg[pointer + 1];
          if (!dict.has(merged)) {
              result.push(dict.get(str));
              dict.set(merged, updateValue);
              updateValue += 1;
              str = ''
          } 
      }
      
      pointer += 1;
  }
  
  return result;
}