// 변수 선언 및 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 문자열의 길이를 구합니다.
//let length = input.length;

var arr = input[0].split(" ");

let str = arr[0];
let n = arr[1];

str=str.split("");


for(let i=1;i<=n;i++){
     var brr = input[i].split(" ");
    if(1==brr[0]){       
        [str[brr[1]-1],str[brr[2]-1]]=[[str[brr[2]-1]],str[brr[1]-1]];
            
    }
    else if(2==brr[0]){
     
            for(let j=0;j<str.length;j++){   
        if(str[j]==='a'){
            str[j]=brr[2];
        }
            }
                
    }   
    console.log(str.join(""));
}