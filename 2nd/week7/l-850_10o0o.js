const MOD = BigInt(10 ** 9 + 7);

class SegmentTree {
  constructor(origin) {
    this.origin = origin;
    this.counts = new Array(origin.length * 4).fill(0n);
    this.sum = new Array(origin.length * 4).fill(0n);
  }

  update(left, right, start, end, node, value) {
    const mid = Math.floor((start + end) / 2);

    if (start >= left && end <= right) {
      this.counts[node] += value;
    } else {
      if (left <= mid) {
        this.update(left, right, start, mid, node * 2 + 1, value);
      }

      if (right > mid) {
        this.update(left, right, mid + 1, end, node * 2 + 2, value);
      }
    }

    if (this.counts[node]) {
      this.sum[node] = BigInt(this.origin[end + 1]) - BigInt(this.origin[start]);
    } else if (start === end) {
      this.sum[node] = 0n;
    } else {
      this.sum[node] = (this.sum[node * 2 + 1] + this.sum[node * 2 + 2]) % MOD;
    }
  }
}

const rectangleArea = function (rectangles) {
  const cpx = new Set();
  const cpy = new Set();
  const idxMapX = new Map();
  const idxMapY = new Map();
  const coords = [];

  for (const [x1, y1, x2, y2] of rectangles) {
    cpx.add(x1);
    cpx.add(x2);
    cpy.add(y1);
    cpy.add(y2);

    coords.push([x1, y1, y2, 1n]);
    coords.push([x2, y1, y2, -1n]);
  }

  const compX = [...cpx].sort((a, b) => a - b);
  const compY = [...cpy].sort((a, b) => a - b);

  for (let i = 0; i < compX.length; i += 1) {
    idxMapX.set(compX[i], i);
  }

  for (let i = 0; i < compY.length; i += 1) {
    idxMapY.set(compY[i], i);
  }

  coords.sort((a, b) => a[0] - b[0]);
  const st = new SegmentTree(compY);
  let sum = 0n;
  let xCoord = 0n;

  for (const [x, y1, y2, v] of coords) {
    const diffX = (BigInt(x) - xCoord) % MOD;
    xCoord = BigInt(x);
    sum += diffX * st.sum[0];
    sum %= MOD;

    st.update(idxMapY.get(y1), idxMapY.get(y2) - 1, 0, compY.length - 1, 0, v);
  }

  return Number(sum);
};