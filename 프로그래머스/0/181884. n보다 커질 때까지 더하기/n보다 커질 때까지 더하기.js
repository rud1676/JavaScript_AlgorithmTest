function solution(numbers, n) {
    var sum = 0;
    
    let i=0;
    while(sum<=n){
        
       sum+=numbers[i]; 
        i++;
    }
        
        
        
    return sum;
}