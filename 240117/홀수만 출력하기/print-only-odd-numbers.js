const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");


let res="";
for(let i=0;i<input.length;i++){

    var x = Number(input[i]);


    if(x%2!=0 && x%3==0){
      console.log(x);
    }

}