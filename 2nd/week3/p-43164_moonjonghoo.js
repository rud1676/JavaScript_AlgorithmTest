function solution(tickets) {
  tickets.sort();
  let vis = Array(tickets.length).fill(false);
  var answer = [];
  function dfs(cur, cnt, path) {
    if (cnt === tickets.length && answer.length === 0) {
      answer = path;
      return;
    }
    for (let i = 0; i < tickets.length; i += 1) {
      if (vis[i]) continue;
      if (tickets[i][0] === cur) {
        vis[i] = true;
        dfs(tickets[i][1], cnt + 1, [...path, tickets[i][1]]);
        vis[i] = false;
      }
    }
  }
  dfs("ICN", 0, ["ICN"]);
  return answer;
}
