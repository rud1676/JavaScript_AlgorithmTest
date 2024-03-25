const canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length).fill(0);
  visited[0] = 1;
  let keys = [0];

  while (keys.length) {
    const newKeys = [];

    for (const key of keys) {
      const forwardKeys = rooms[key];

      for (const forwardKey of forwardKeys) {
        if (!visited[forwardKey]) {
          visited[forwardKey] = 1;
          newKeys.push(forwardKey);
        }
      }
    }

    keys = newKeys;
  }

  for (let i = 0; i < visited.length; i += 1) {
    if (!visited[i]) return false;
  }

  return true;
};