const fs = require("fs");

let a = fs.readFileSync(0).toString();

a= Number(a);


 let result =   a+1.5;

 console.log(result.toFixed(2));