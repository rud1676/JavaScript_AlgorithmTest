var canVisitAllRooms = function (rooms) {
  let n = rooms.length;
  let check = Array.from({ length: n }, () => false);
  function DFS(v) {
    check[v] = true;
    let m = rooms[v].length;
    for (let i = 0; i < m; i++) {
      DFS(rooms[v][i]);
    }
  }
  DFS(0);
  if (check.includes(false)) {
    return false;
  }
  return true;
};

console.log(canVisitAllRooms([[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]]));
