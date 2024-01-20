// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 문자열의 길이를 구합니다.
//let length = input.length;

var arr = input[0].split(" ");

let str = arr[0];
let n = arr[1];
strR=str.slice(0);
strR=strR.split("");


for(let i=1;i<=n;i++){
     var brr = input[i].split(" ");
   
    if(1==brr[0]){
          
        [strR[brr[1]-1],strR[brr[2]-1]]=[[strR[brr[2]-1]],strR[brr[1]-1]];
        strR=strR.join("")
        console.log(strR);
       
    }
    else if(2==brr[0]){
        strB=str.slice(0);
        strR=strR.split("");
      
            for(let j=0;j<str.length;j++){

            
        if(strR[j]==='a'){
            strR[j]=brr[2];
        }
            }
            console.log(strR.join(""));
         
    }
   
}