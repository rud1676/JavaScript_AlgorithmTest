function solution(bookTimes) {
  const convertStringToNum = (time) => {
    const [h, m] = time.split(':').map(Number);

    return h * 60 + m;
  };

  const converted = bookTimes.map((bookTime) => [
    {
      value: 1,
      time: convertStringToNum(bookTime[0]),
    }, {
      value: -1,
      time: convertStringToNum(bookTime[1]) + 10,
    },
  ]).flat().sort((a, b) => a.time - b.time);

  const times = [];
  const values = [];

  for (const { value, time } of converted) {
    if (time === times[times.length - 1]) {
      values[values.length - 1] += value;
    } else {
      times.push(time);
      values.push(value);
    }
  }

  let max = 0;
  let acc = 0;

  for (const value of values) {
    acc += value;
    max = Math.max(max, acc);
  }

  return max;
}