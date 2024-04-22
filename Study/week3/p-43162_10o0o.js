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

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootY] > this.rank[rootX]) {
      this.root[rootX] = rootY;
    } else {
      this.rank[rootX] += 1;
      this.root[rootY] = rootX;
    }
  }

  compress() {
    for (let i = 0; i < this.root.length; i += 1) {
      this.root[i] = this.find(this.root[i]);
    }
  }

  getUniqueLength() {
    let length = 0;

    for (let i = 0; i < this.root.length; i += 1) {
      if (this.root[i] === i) {
        length += 1;
      }
    }

    return length;
  }
}

function solution(n, computers) {
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if (computers[i][j]) {
        uf.union(i, j);
      }
    }
  }

  uf.compress();

  return uf.getUniqueLength();
}