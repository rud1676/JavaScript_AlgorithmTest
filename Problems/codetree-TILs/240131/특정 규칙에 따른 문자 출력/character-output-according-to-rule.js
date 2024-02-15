const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let n = +input;

for(let i=0;i<n;i++){
    console.log('  '.repeat(n-1-i)+' @'.repeat(i+1));
}
for(let i=n-2;i>=0;i--){
    console.log(' @'.repeat(i+1)+'  '.repeat(n-1-i));
}