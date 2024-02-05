function solution(array) {
    var cnt = 0;
    array.join("").split("").forEach(item=>{
        if(item==7){
            cnt++;
        }
    })
    return cnt;
}