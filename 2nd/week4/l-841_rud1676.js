/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let vst = Array(rooms.length).fill(0);
  let v = rooms[0];
  vst[0] = 1;
  let que = [...v];
  while (que.length !== 0) {
    let key = que.shift();
    vst[key] = 1;
    for (let k of rooms[key]) {
      if (vst[k]) continue;
      que.push(k);
    }
  }
  console.log(vst);
  for (let i = 0; i < vst.length; i++) {
    if (vst[i] === 0) return false;
  }
  return true;
};
