function solution(my_str, n) {
    var answer = [];
    var fl = Math.ceil(my_str.length/n);
    for(let i=0;i<fl;i++){
    answer[answer.length] = my_str.slice(i*n,n*i+n);
    }
    return answer;
}