const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString();

const N = +input;


for(let i=0;i<N;i++){
    let str = "";
    for(let k=N-1;k>i;k--){
        str+=" ";
    }
    for(let j=0;j<=i;j++){
        str+="* ";
    }

    
    console.log(str);
  
}
for(let n=0;n<N;n++){


 let str="";
 for(let m=0;m<=n;m++){
        str+=" ";
    }
    for(let l=N-1;l>n;l--){
        str+="* ";
    }
    
    console.log(str);
}