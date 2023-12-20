const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const board1 = input.slice(0, 5).map((el) => el.split(" ").map(Number));
const board2 = input.slice(5, 5 * 2).map((el) => el.split(" ").map(Number));
const result = Array.from(Array(5), () => Array(5).fill(0));
let count = 0;

// 수 마크
const mark = (n) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board1[i][j] === n) {
        result[i][j] = 1;
      }
    }
  }
};

// 빙고인지 체크
const check = () => {
  let bingoCount = 0;

  // 가로 빙고 체크
  for (let i = 0; i < 5; i++) {
    if (result[i].every((el) => el === 1)) bingoCount += 1;
  }

  // 세로 빙고 체크
  for (let i = 0; i < 5; i++) {
    let temp = [];
    for (let j = 0; j < 5; j++) {
      temp.push(result[j][i]);
    }
    if (temp.every((el) => el === 1)) bingoCount += 1;
  }

  // 오른쪽 위 방향 대각선 빙고 체크
  temp = [];
  for (let i = 0; i < 5; i++) {
    temp.push(result[i][i]);
  }
  if (temp.every((el) => el === 1)) bingoCount += 1;

  // 왼아래 대각선
  temp = [];
  for (let i = 0; i < 5; i++) {
    temp.push(result[i][4 - i]);
  }
  if (temp.every((el) => el === 1)) bingoCount += 1;

  if (bingoCount >= 3) return true;
  return false;
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    mark(board2[i][j]);
    count += 1;
    if (check()) {
      console.log(count);
      return;
    }
  }
}
