const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let n = Number(input);

let str ="";
for(let i=0;i<n;i++){

    for(let j=0;j<n;j++){
        str+=String.fromCharCode(n*i+65+j); 
    }
    str+="\n"
}
console.log(str);