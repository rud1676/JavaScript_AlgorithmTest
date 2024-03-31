function solution(user_id, banned_id) {
  answer = 0;

  dfs(user_id.slice(), banned_id.slice(), []);
  answer = Array.from(new Set(arr.map((i) => i.sort().join()))).length;
  return answer;
}
var answer;
var arr = [];

function dfs(remain_users, banned_id, ban) {
  if (banned_id.length == 0) {
    arr.push(ban);
    return 1;
  } else {
    for (var idx = 0; idx < remain_users.length; idx++) {
      if (match(remain_users[idx], banned_id[0])) {
        dfs([...remain_users.slice(0, idx), ...remain_users.slice(idx + 1)], banned_id.slice(1), [
          ...ban,
          remain_users[idx],
        ]);
      }
    }
    return 0;
  }
}

function match(id, pattern) {
  pattern = pattern.replace(/\*/g, ".");
  const regex = RegExp("^(" + pattern + ")$");
  // console.log(id, pattern,regex.test(id))
  return regex.test(id);
}
