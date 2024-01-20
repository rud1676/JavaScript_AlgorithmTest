const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
var cnt=0;
let i =0;
while(i<input[0].length){
if(input[0][i]===input[1]){
    cnt++;
}
i++;

}

console.log(cnt);