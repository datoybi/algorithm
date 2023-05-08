// 잘 됐는데 특정 반례에서 어떻게 고쳐야할지 모르겠다...ㅜㅜ 다음에 다시 해보기!!
/*
그 특정 반례
4 10 100
0 1 1 1 1 2 1 1 1 1
0 0 0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1 1
0 0 0 0 0 0 0 0 0 0

ans : 14

*/

// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const [num, ...input] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\r\n");

// const [n, m, t] = num.split(" ").map(Number);
// const graph = input.map((el) => el.split(" ").map(Number));
// const visited = [...new Array(n)].map((el) => new Array(m).fill(0));
// const dx = [0, 1, 0, -1];
// const dy = [1, 0, -1, 0];

// const bfs = (x, y) => {
//   const queue = [[x, y]];
//   let hasGram = false;

//   while (queue.length) {
//     const coords = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       const nx = coords[0] + dx[i];
//       const ny = coords[1] + dy[i];
//       // if (nx < 0 || ny < 0 || n <= nx || m <= ny) continue;
//       if (nx < 0 || ny < 0 || n <= nx || m <= ny || visited[nx][ny] > 0)
//         continue;
//       // 그램이 없으면
//       if (!hasGram && visited[nx][ny] === 0) {
//         if (graph[nx][ny] === 0) {
//           visited[nx][ny] = visited[coords[0]][coords[1]] + 1;
//           queue.push([nx, ny]);
//         } else if (graph[nx][ny] === 2) {
//           hasGram = true;
//           visited[nx][ny] = visited[coords[0]][coords[1]] + 1;
//           queue.push([nx, ny]);
//         }
//         // 그램이 있으면
//       } else if (hasGram) {
//         if (graph[nx][ny] === 1 || graph[nx][ny] === 0) {
//           visited[nx][ny] = visited[coords[0]][coords[1]] + 1;
//           queue.push([nx, ny]);
//         }
//       }
//     }
//   }
// };

// bfs(0, 0);
// console.log(visited);
// // 출력
// const answer = visited[n - 1][m - 1];
// if (answer === 0) console.log("Fail");
// else console.log(answer <= t ? answer : "Fail");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const delta = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const [N, M, T] = input[0].split(" ").map(Number);
const castle = [];
for (let i = 1; i <= N; i++) castle.push(input[i].split(" ").map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(0));
castle[0][0] = 1;
visited[N - 1][M - 1] = T + 1;
let queue = [[0, 0]];
while (queue.length) {
  const [r, c] = queue.shift();
  for (const [dr, dc] of delta) {
    if (N > r + dr && r + dr >= 0 && M > c + dc && c + dc >= 0) {
      if (r + dr == N - 1 && c + dc == M - 1) {
        visited[N - 1][M - 1] = Math.min(
          visited[N - 1][M - 1],
          visited[r][c] + 1
        );
        queue = [];
        break;
      } else if (visited[r + dr][c + dc] == 0) {
        if (castle[r + dr][c + dc] == 0) {
          visited[r + dr][c + dc] = visited[r][c] + 1;
          queue.push([r + dr, c + dc]);
        } else if (castle[r + dr][c + dc] == 2) {
          visited[r + dr][c + dc] = visited[r][c] + 1;
          visited[N - 1][M - 1] =
            visited[r][c] + (N - 1 - (r + dr) + M - 1 - (c + dc)) + 1;
        }
      }
    }
  }
}
if (visited[N - 1][M - 1] <= T) console.log(visited[N - 1][M - 1]);
else console.log("Fail");
