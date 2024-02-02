function solution(t, p) {
    var cnt=0;
    for(let i=0;i<=t.length-p.length;i++){
        console.log(Number(t.slice(i,i+p.length)));
        if(Number(t.slice(i,i+p.length))<=Number(p)){
            cnt++;
            
        }
    }  
    return cnt;
}