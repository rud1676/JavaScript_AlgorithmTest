const fs = require("fs");
const path = require("path");

const problemsDir = "./"; // 문제 파일이 저장된 디렉토리
const readmePath = "README.md";
const idDir = "id";

// 아이디별 문제 카운트
let userProblems = {};
let users = []; //id폴더에 있는 것을 보고 유저들을 파악한다.

//
for (let md of fs.readdirSync(`${idDir}/`)) {
  const match = md.match(/(.*).md$/);
  users.push(match[1]);
}

// 파일 시스템에서 문제 파일을 찾아 아이디별로 문제를 분류
function processDirectory(directory) {
  // 무시할 폴더들
  if (directory.indexOf(".git") !== -1) return;
  if (directory.indexOf("test") !== -1) return;
  if (directory.indexOf("id") !== -1) return;

  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    // 해당 디렉토리를 다 읽어 배열로
    const fullPath = path.join(directory, file); // 절대 경로를 얻는다.
    if (fs.lstatSync(fullPath).isDirectory()) {
      // 그 경로가 폴더면
      processDirectory(fullPath); //다시 탐색
    } else {
      // 파일이면
      const usersRegexPart = users.join("|"); // 유저 파일인지 정규식 검사
      const regex = new RegExp(`_(${usersRegexPart}).(js|cpp)$`);
      const match = file.match(regex);
      if (match) {
        // 유저가 푼 파일이라면
        const userId = match[1];
        if (!userProblems[userId]) {
          userProblems[userId] = [];
        }
        userProblems[userId].push(fullPath); // 유저가 푼 파일 객체에 넣는다.
      }
    }
  });
}

// README와 사용자 문서 업데이트
function updateDocuments() {
  let temp = fs.readFileSync(readmePath, "utf8");
  temp = temp.slice(temp.indexOf("# 🧮 JavaScript Alghorithm Test"));
  console.log(temp);
  // README 내용 갱신
  let readmeContent = `
  # 문제 풀이 현황
  |ID|Profile|Solved|
  |:---:|:---:|:---:|
  `;
  for (const [userId, problems] of Object.entries(userProblems)) {
    readmeContent += GeneratorTableRow(userId, problems.length);
    // 사용자 문서 업데이트
    let userDocContent = `## 문제리스트\n`;
    problems.forEach((problem) => {
      userDocContent += `- [${problem}](../${problem})\n`;
    });
    fs.writeFileSync(`${idDir}/${userId}.md`, userDocContent);
  }
  readmeContent += temp;
  fs.writeFileSync(readmePath, readmeContent);
}

// 테이블 한줄 갱신하는 거
function GeneratorTableRow(id, nums) {
  return `|[${id}](https://github.com/${id}) | <img width=150 src="https://github.com/${id}.png"> | [!<img width=150 src="https://capsule-render.vercel.app/api?type=rounded&text=${nums}개&color=gradient&height=800&fontSize=200">](./id/${id}.md)|
  `;
}

// 메인 로직 실행
processDirectory(problemsDir); // 최상위 루트부터 탐색한다.
// 여기까하면 userProblems에 푼 파일들이 유저 객체에 저장됨.
updateDocuments();
