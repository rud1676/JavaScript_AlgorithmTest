class UnionFind {
  constructor(size) {
    this.root = new Array(size).fill().map((_, index) => index);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.root[x] === x) return x;

    const found = this.find(this.root[x]);
    this.root[x] = found;
    return found;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return;

    if (this.rank[rootX] >= this.rank[rootY]) {
      if (this.rank[rootX] === this.rank[rootY]) this.rank[rootX] += 1;

      this.root[rootY] = rootX;
    } else {
      this.root[rootX] = rootY;
    }
  }
}

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(n);
  let result = 0;

  for (const [a, b, c] of costs) {
    if (uf.find(a) !== uf.find(b)) {
      result += c;
      uf.union(a, b);
    }
  }

  return result;
}