function solution(cap, n, deliveries, pickups) {
  var answer = -1;
  //배열 마지막부터 0이 아닌곳 찾기 전부 0이면 -1을 리턴
  function lastFun(arr) {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      if (arr[i] !== 0) {
        return i;
      } else {
        arr.pop();
      }
    }
    return -1;
  }

  //deliveries을 받는다고 가정
  function delFun(arr, cap) {
    var index = lastFun(arr);
    var checkIndex = index;
    while (index !== -1 && cap > 0) {
      var index = lastFun(arr);
      // cap보다 그 요소의 값이 크다면 요소의 값만 빼주고 돌아감 종료
      if (cap <= arr[index]) {
        arr[index] -= cap;
        cap = 0;
        break;
      }
      // cap보다 작다면 cap에서 그 요소 빼주고, 그 값을 0으로 돌림
      else if (cap > arr[index]) {
        cap -= arr[index];
        arr[index] = 0;
        index--;
      }
    }

    // 결론적으로 나올때는 배달 완료 된 것 배열이 튀어나옴.
    //console.log(index,arr);
    return checkIndex;
  }

  function pickFun(arr, cap) {
    var index = lastFun(arr);
    var checkIndex = index;
    while (index !== -1 && cap > 0) {
      var index = lastFun(arr);
      // cap보다 그 요소의 값이 크다면 요소의 값만 빼주고 돌아감 종료
      if (cap <= arr[index]) {
        arr[index] -= cap;
        cap = 0;
        break;
      }
      // cap보다 작다면 cap에서 그 요소 빼주고, 그 값을 0으로 돌림
      else if (cap > arr[index]) {
        cap -= arr[index];
        arr[index] = 0;
        index--;
      }
    }

    // 결론적으로 나올때는 배달 완료 된 것 배열이 튀어나옴.
    //console.log(index,arr);
    return checkIndex;
  }

  while (true) {
    var delLen = delFun(deliveries, cap) + 1;
    var pickLen = pickFun(pickups, cap) + 1;
    if (delLen === 0 && pickLen === 0) {
      return answer + 1;
    } else if (delLen > pickLen) {
      answer += delLen * 2;
    } else {
      answer += pickLen * 2;
    }
  }
}
