/*
	https://www.acmicpc.net/problem/4396
	지뢰찾기

	맞왜틀!!!!!!!!!!!!
*/ const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const board1 = input.slice(0, N).map((el) => el.split(""));
const board2 = input.slice(N, N * 2).map((el) => el.split(""));

const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

const solution = () => {
  let result = Array.from(Array(N), () => Array(N).fill(0));
  let flag = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 닫혀있을 때
      if (board2[i][j] === ".") {
        if (board1[i][j] === "*" && flag) {
          // 지뢰이고 밟았을 때
          result[i][j] = "*";
        } else {
          result[i][j] = ".";
        }
        // 열려있을때
      } else {
        if (board1[i][j] === "*") {
          // 지뢰면
          result[i][j] = "*";
          flag = true;
        } else {
          for (let z = 0; z < 8; z++) {
            const nx = i + dx[z];
            const ny = j + dy[z];
            if (nx < 0 || N - 1 - 1 < nx || ny < 0 || N - 1 < ny) continue;
            if (board1[nx][ny] === "*") {
              result[i][j] += 1;
            }
          }
        }
      }
    }
  }
  return result;
};

const result = solution();
console.log(result.map((el) => el.join("")).join("\n"));

/*

2
**
**
x.
..


3
.*.
*.*
.*.
xxx
xㅌx
xxx
*/
