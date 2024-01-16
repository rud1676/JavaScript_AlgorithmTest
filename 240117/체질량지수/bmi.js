const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])/100;
let b = Number(input[1]);

let obe = parseInt(b/ (a**2));


console.log(obe);
if(obe>25){
    console.log("Obesity");
}