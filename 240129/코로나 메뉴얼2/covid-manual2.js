const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let [A,B,C,D] = new Array(4).fill(0);
for(let i=0;i<3;i++){
    input[i]=input[i].split(" ");
    var symp=input[i][0];
    var temp=+input[i][1];
    if(symp==='Y' && temp>=37){
    A++;
}else if(symp==='N' && temp>=37){
    B++;
}else if(symp==='Y' && temp<37){
    C++;
}else if(symp==='N' && temp<37){
    D++;
}
}





console.log(A>=2?[A,B,C,D].join(" ")+" E":[A,B,C,D].join(" "));