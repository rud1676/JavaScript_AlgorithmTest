function rectangleArea(rectangles) {
  const set = new Set();
  const width = 10e9;
  for (const rectangle of rectangles) {
    for (let x = rectangle[0]; x < rectangle[2]; x++) {
      for (let y = rectangle[1]; y < rectangle[3]; y++) {
        set.add(x * width + y);
      }
    }
  }
  return set.size % (10e9 + 7);
}
