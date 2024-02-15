const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);


if(a==1){
console.log("John");

}else if(a==2){

console.log("Tom");
}else if(a==3){

console.log("Paul");
}else{

console.log("Vacancy");
}