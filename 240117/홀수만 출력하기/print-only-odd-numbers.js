const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");


let res="";
for(let i=0;i<input.length;i++){

    let x = Number(input[i]);


    if(input[i]%2!=0 && input[i]%3==0){
      console.log(input[i]);
    }

}