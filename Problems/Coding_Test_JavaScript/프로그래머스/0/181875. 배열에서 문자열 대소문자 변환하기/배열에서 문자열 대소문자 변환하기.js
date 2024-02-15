function solution(strArr) {
    var answer = [];
    for(let i=0;i<strArr.length;i++){
       if(i%2!==0){
           
       strArr[i]= strArr[i].toUpperCase();
       }else{
          strArr[i]= strArr[i].toLowerCase();
       }
         }
    return strArr;
}