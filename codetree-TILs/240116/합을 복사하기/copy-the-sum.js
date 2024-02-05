let [a,b,c] = [1,2,3];

let temp = a+b+c;

c=temp;


a=b=c;

console.log(`${a} ${b} ${c}`)