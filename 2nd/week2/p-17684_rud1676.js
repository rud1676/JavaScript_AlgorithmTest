function solution(msg) {
  var answer = [];
  //    K 출력
  //    KA 등록
  //   A 출력 AK 등록
  //  KA 출력
  // KAO 등록
  // O 출력
  // 검사는 최대한 긴거부터 줄여나가는데..
  // 최대 length부터 최소까지 보면되나
  // 1000개이하면 그래도 뭐든 시도해봐도 될듯

  let arr = [];
  //사전 초기화
  for (let i = 0; i < 26; i++) {
    arr.push(String.fromCharCode("A".charCodeAt() + i));
  }

  let diclen = 1;
  for (let i = 0; i < msg.length; ) {
    //diclen부터 1까지
    let size = diclen;
    while (size) {
      if (i + size > msg.length) size = msg.length - i;
      let cstr = msg.substr(i, size);
      let idx = arr.indexOf(cstr);
      if (idx !== -1) {
        //출력할꺼 발견한다면..
        answer.push(idx + 1);
        let reg = cstr + msg[i + size];
        arr.push(reg);
        i = i + size;
        diclen = Math.max(diclen, size + 1);
        break;
      }
      size--;
    }
  }
  return answer;
}
