function solution(arrows) {
  const v = new Set();
  const e = new Set();
  const visited = new Set();

  let [x, y] = [0, 0];
  v.add('0 0');

  const processPos = (dPos) => {
    const [mx, my] = [x + dPos[0], y + dPos[1]];
    const vKey = `${mx} ${my}`;
    const eKey = `${x} ${y} ${mx} ${my}`;
    const eKey2 = `${mx} ${my} ${x} ${y}`;

    v.add(vKey);

    if (!visited.has(eKey)) {
      visited.add(eKey);
      visited.add(eKey2);

      if (dPos[0] && dPos[1] && e.has(`${mx} ${y} ${x} ${my}`)) {
        const [cx, cy] = [(mx + x) / 2, (my + y) / 2];
        v.add(`${cx} ${cy}`);

        e.add(`${x} ${y} ${cx} ${cy}`);
        e.add(`${cx} ${cy} ${x} ${y}`);

        e.add(`${mx} ${my} ${cx} ${cy}`);
        e.add(`${cx} ${cy} ${mx} ${my}`);

        e.add(`${mx} ${y} ${cx} ${cy}`);
        e.add(`${cx} ${cy} ${mx} ${y}`);

        e.add(`${x} ${my} ${cx} ${cy}`);
        e.add(`${cx} ${cy} ${x} ${my}`);

        e.delete(`${mx} ${y} ${x} ${my}`);
        e.delete(`${x} ${my} ${mx} ${y}`);
      } else {
        e.add(eKey);
        e.add(eKey2);
      }
    }

    x = mx;
    y = my;
  };

  for (const arrow of arrows) {
    const dPos = [0, 0];

    if (arrow === 0) {
      dPos[0] -= 1;
    } else if (arrow === 1) {
      dPos[0] -= 1;
      dPos[1] += 1;
    } else if (arrow === 2) {
      dPos[1] += 1;
    } else if (arrow === 3) {
      dPos[0] += 1;
      dPos[1] += 1;
    } else if (arrow === 4) {
      dPos[0] += 1;
    } else if (arrow === 5) {
      dPos[0] += 1;
      dPos[1] -= 1;
    } else if (arrow === 6) {
      dPos[1] -= 1;
    } else if (arrow === 7) {
      dPos[0] -= 1;
      dPos[1] -= 1;
    }

    processPos(dPos);
  }

  return 1 + e.size / 2 - v.size;
}