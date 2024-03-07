// 모두 초로 바꾸기
// 300,000 + 299999 ... 1  for문 한번으로..
// 시작시간으로 정렬 후 합 시간 따지기
// 30만번. * 
// 끝시간으로 정렬 후 합 시간 따지기
// calculator 시간 따지기?

function stot(str){
    const [h,m,t] = str.split(":").map(Number);
    return h*3600 + m*60 + t;
}
function ttos(t){
    const h=Math.floor(t/3600).toString().padStart(2,'0');
    const m=Math.floor((t%3600/60)).toString().padStart(2,'0');
    const tt=(t%60).toString().padStart(2,'0');
    return `${h}:${m}:${tt}`
}

function solution(play_time, adv_time, logs) {
    var answer = '';
    let advt = stot(adv_time);
    let pt = stot(play_time);
    
    // 시작시간으로 정렬함
    let logts = logs.map(v=>{
        const [st,ed]=v.split("-");
        return [stot(st),stot(ed)];
    }).sort((a,b)=>a[0]-b[0]);
    let sarr=Array(pt+10).fill(0); // 모든 시간 초를 배열로 표현 - 누적합으로 표현하기
    for(let log of logts){
        sarr[log[0]+1]++;
        sarr[log[1]+1]--;
    }
    let sum=0;
    for(let i=0;i<sarr.length;i++){
        sum+=sarr[i];
        sarr[i]=sum;
    }
    sum=0;
    for(let i=0;i<sarr.length;i++){
        sum+=sarr[i];
        sarr[i]=sum;
    }
    
    
    let mx = -1;
    let mxidx=-1;
    for(let i=advt;i<sarr.length;i++){
        let s = sarr[i] - sarr[i-advt];
        if(s>mx){
            mx = s;
            mxidx=i;
        }
    }
    
    // 첫 0분에 광고배치 흠 말이안되네
    // 배열 1 -1로 누적합으로 변환 -> 30만
    // 구간 2-5 1씩더하는거면
    // 누적합 => 0 1 0 0 0 -1 => 1씩더하는걸 표현.
    // 실제 누적합 30만
    // 모든 구간의 겹치는 부분을 알 수 있어.
    // 
    // length만큼 누적합? 도저어언
    
    if(mxidx===-1) return "00:00:00";
    return ttos(mxidx-advt);