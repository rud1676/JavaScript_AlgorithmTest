const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

var n = Number(input[0]);

for(let i=1;i<=n;i++){
    let sum = 1;
  var arr =  input[i].split(" ");

 var numA =  Number(arr[0]);
  var numB = Number(arr[1]);
  for(let j=numA ;j<=numB;j++){
    sum*=j;
    
  }
  console.log(sum);
}