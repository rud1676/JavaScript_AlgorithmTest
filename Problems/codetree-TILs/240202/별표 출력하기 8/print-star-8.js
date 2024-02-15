const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = +input;

let str = "";

for (let i = 0; i < n; i++) {
    str = "";
    if (i % 2 !== 0) {
        for (let j = 0; j < i + 1; j++) {
            str += "* ";
        }
    }
    else {
        str += "*";
    }

    console.log(str);
}