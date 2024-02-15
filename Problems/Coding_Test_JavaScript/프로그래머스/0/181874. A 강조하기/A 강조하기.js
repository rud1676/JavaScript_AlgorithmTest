function solution(myString) {
    myString=myString.split("");
    myString.forEach((v,i)=>{
        if(v==="a"){
    myString[i]="A"
        }
        if(v===v.toUpperCase()){
            if(v!=="A")
            myString[i]=myString[i].toLowerCase();
        }
    })
    return myString.join("");
}