const convertStrToTime = (str) => {
  const [h, m, s] = str.split(':').map(Number);

  return h * 3600 + m * 60 + s;
};

const prefixNum = (num) => {
  if (num === 0) return '00';
  if (num < 10) return `0${num}`;
  return num;
};

const convertTimeToStr = (time) => {
  const h = (time - (time % 3600)) / 3600;
  time -= h * 3600;
  const m = (time - (time % 60)) / 60;
  time -= m * 60;
  const s = time;

  return `${prefixNum(h)}:${prefixNum(m)}:${prefixNum(s)}`;
};

function solution(playTime, advTime, logs) {
  playTime = convertStrToTime(playTime);
  advTime = convertStrToTime(advTime);

  const acc = new Array(playTime + 1).fill(0);

  for (const log of logs) {
    const [start, end] = log.split('-').map(convertStrToTime);

    acc[start] += 1;
    acc[end] -= 1;
  }

  for (let i = 0; i < acc.length - 1; i += 1) {
    acc[i + 1] += acc[i];
  }

  for (let i = 0; i < acc.length - 1; i += 1) {
    acc[i + 1] += acc[i];
  }

  let max = acc[advTime];
  let maxTime = 0;

  for (let i = 1; i <= playTime - advTime; i += 1) {
    const cal = acc[i + advTime] - acc[i];

    if (cal > max) {
      max = cal;
      maxTime = i;
    }
  }

  if (maxTime) maxTime += 1;

  return convertTimeToStr(maxTime);
}