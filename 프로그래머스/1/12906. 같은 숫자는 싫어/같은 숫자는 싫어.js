function solution(arr)
{var answer = [];
    answer = arr.filter((item,index,self)=>{return item!==self[index-1]})
    return answer;
}