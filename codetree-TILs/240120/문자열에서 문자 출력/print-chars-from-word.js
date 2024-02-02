const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim();

for (let elem of givenStr) {
    console.log(elem);
}