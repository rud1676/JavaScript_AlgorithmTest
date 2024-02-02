const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let arrA= input[0].split(" ");
let arrB= input[1].split(" ");

let mathA = Number(arrA[0]);
let mathB = Number(arrB[0]);

let engA = Number(arrA[1]);
let engB = Number(arrB[1]);

if(mathA === mathB){
    if(engA>engB){
        console.log("A");
    }else{
        console.log("B");
    }
}else if(mathA>mathB){
    console.log("A");
}else{
    console.log("B");
}