function solution(lines) {
  const times = [];
  for (const line of lines) {
    const [date, finish, duration] = line.split(" ");
    const millis = transTimeToMilliSeconds(finish);
    const startTime = millis - duration.substr(0, duration.length - 1) * 1000 + 1;
    const endTime = millis + 999;

    times.push(["START", startTime]);
    times.push(["END", endTime]);
  }
  times.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : -1));

  let answer = 0;
  let count = 0;

  for (const time of times) {
    if (time[0] === "START") count++;
    else count--;

    answer = Math.max(answer, count);
  }

  return answer;
}

const transTimeToMilliSeconds = (time) => {
  const hour = (time[0] * 10 + time[1] * 1) * 60 * 60;
  const minute = (time[3] * 10 + time[4] * 1) * 60;
  const seconds = time[6] * 10 + time[7] * 1;
  const millis = time[9] * 100 + time[10] * 10 + time[11] * 1;
  const amount = (hour + minute + seconds) * 1000 + millis;

  return amount;
};
