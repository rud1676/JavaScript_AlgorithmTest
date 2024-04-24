// 시간 비교 함수 만들기
// 10분 더하는 함수 만들기
// 시작시간으로 정렬 후에
// room배열에 넣어주기.
function timediff(a, b) {
  let ha = Number(a[0] + a[1]);
  let hb = Number(b[0] + b[1]);
  if (ha > hb) return 1;
  else if (ha === hb) {
    let ma = Number(a[3] + a[4]);
    let mb = Number(b[3] + b[4]);
    if (ma > mb) return 1;
    else return -1;
  } else return -1;
}
function timeaddten(a) {
  let m = Number(a[3] + a[4]);
  let h = Number(a[0] + a[1]);
  if (m + 10 === 60) {
    return `${h + 1}:00`;
  }
  return `${h}:${m + 10}`;
}

function beforesolution(book_time) {
  var answer = 0;
  // sort end time
  let dates = book_time.sort((a, b) => timediff(a[0], b[0]));

  let room = [];
  dates.map((v) => {
    if (room.length >= 1) {
      // 해당 입장시간에 도달했을 때 방 비울 수 있는거 비우기
      let temp = [];
      for (let r of room) {
        if (timediff(timeaddten(r[1]), v[0]) !== -1) temp.push(r);
      }
      room = temp;
    }
    room.push(v);
    answer = Math.max(room.length, answer);
  });
  return answer;
}

// 다른사람들이 푼 방식을 보았다.
// 분으로 바꾸면 편해진다.
// 시작시간에 종료된 방을 보내고 넣는다.
// 그 이후에 풀이

function htom(a, b) {
  const [h, m] = a.split(":");
  const [bh, bm] = b.split(":");
  return [Number(h) * 60 + Number(m), Number(bh) * 60 + Number(bm) + 10];
}

function solution(book_time) {
  var answer = 0;
  // sort end time
  let times = book_time.map((v) => htom(v[0], v[1]));
  times.sort((a, b) => a[0] - b[0]);

  let room = [];
  for (let i = 0; i < times.length; i++) {
    room = room.filter((v) => v[1] > times[i][0]);
    room.push(times[i]);
    answer = Math.max(answer, room.length);
  }

  return answer;
}
