const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n");


let one = input[0].split(" ");

let two = input[1].split(" ");

var sumOne = 0;

var str="";

for(let i=0;i<4;i++){
    sumOne+=parseInt(one[i]);

    var avr = parseInt(sumOne/4);

    
}
str += avr.toFixed(1);

sumOne=0;

for(let i=0;i<4;i++){
    sumOne+=parseInt(two[i]);

    var avr = parseInt(sumOne/4);

    
}
console.log(str+=" "+avr.toFixed(1));


sumOne=0;
str="";
for(let i=0;i<4;i++){

    sumOne+=parseInt(one[i])+parseInt(two[i]);;

    var avr = parseInt(sumOne/2);
str+=avr.toFixed(1)+" ";


sumOne=0;
    
}

console.log(str);



sumOne=0;
str="";
for(let i=0;i<4;i++){

    sumOne+=parseInt(one[i])+parseInt(two[i]);;

    var avr = parseInt(sumOne/8);




    
}
str+=avr.toFixed(1);
console.log(str);