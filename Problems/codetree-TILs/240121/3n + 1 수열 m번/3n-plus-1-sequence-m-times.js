const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

var m = Number(input[0]);

let cnt =0;
for(let i=1;i<=m;i++){
    var n = Number(input[i]);
    cnt=0;
    while(n!==1){

        if(n%2===0){
            n/=2;
        }else{  
            n*=3;
            n+=1;
        }
        cnt++;
    }
    console.log(cnt);
}