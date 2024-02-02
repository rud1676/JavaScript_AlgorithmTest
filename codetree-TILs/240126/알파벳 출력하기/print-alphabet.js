const fs = require("fs").readFileSync(0).toString().trim();



let n = Number(fs);
let c = 'A'.charCodeAt(0);

for(let i = 1; i <= n; i++) {
    let line = '';
    for(let j = 0; j < i; j++) {
        line += String.fromCharCode(c++);
        if(c > 'Z'.charCodeAt(0)) c = 'A'.charCodeAt(0);
    }
    console.log(line);
}