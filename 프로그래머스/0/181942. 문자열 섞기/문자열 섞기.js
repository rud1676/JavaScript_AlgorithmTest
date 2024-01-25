function solution(str1, str2) {
    var arr = [];
    for(let i=0;i<str1.length;i++){ arr = [...arr,str1[i],str2[i]];}
    return arr.join("");
}