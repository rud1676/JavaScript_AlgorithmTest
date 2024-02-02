const fs = require("fs");
let givenInput = fs.readFileSync(0).toString().trim().split(" ");

if(givenInput[0].length>givenInput[1].length){
    console.log(givenInput[0]+" "+givenInput[0].length);
}else if(givenInput[0].length<givenInput[1].length){
    console.log(givenInput[1]+" "+givenInput[1].length);
}else{
    
console.log("same");
}