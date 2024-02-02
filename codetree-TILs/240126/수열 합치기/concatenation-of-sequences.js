const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

//let arr = input[0].split(" ").map(Number);

let brr = input[1].split(" ").map(Number);

let crr = input[2].split(" ").map(Number);

let drr= [...crr,...brr];

// drr=drr.filter((v,i)=> {
//    return i===drr.indexOf(v)});


console.log(drr.sort((a,b)=>a-b).join(" "))