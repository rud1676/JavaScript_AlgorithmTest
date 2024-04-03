const fs = require("fs");
const path = require("path");

const problemsDir = "./"; // 문제 파일이 저장된 디렉토리
const readmePath = "README.md";
const idDir = "id";

// 아이디별 문제 카운트
let userProblems = {};

// 파일 시스템에서 문제 파일을 찾아 아이디별로 문제를 분류
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else {
      const match = file.match(/\[(.*?)\]_(.*?).js$/);
      if (match) {
        const userId = match[2];
        if (!userProblems[userId]) {
          userProblems[userId] = [];
        }
        userProblems[userId].push(file);
      }
    }
  });
}

// README와 사용자 문서 업데이트
function updateDocuments() {
  // README 내용 갱신
  let readmeContent = `# 문제 풀이 현황\n\n`;
  for (const [userId, problems] of Object.entries(userProblems)) {
    readmeContent += `- ${userId}: ${problems.length}개\n`;
    // 사용자 문서 업데이트
    let userDocContent = `## 문제리스트\n`;
    problems.forEach((problem) => {
      userDocContent += `- [${problem}](../${problem})\n`;
    });
    fs.writeFileSync(`${idDir}/${userId}.md`, userDocContent);
  }
  fs.writeFileSync(readmePath, readmeContent);
}

// 메인 로직 실행
processDirectory(problemsDir);
updateDocuments();
