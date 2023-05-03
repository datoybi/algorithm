// https://www.acmicpc.net/problem/16234
// 인구 이동
// 마무리에서 시뮬이 좀 꼬인것 같다 다음에 다시 또 풀어보기!!

// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const [num, ...input] = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\r\n");

// const [N, L, R] = num.split(" ").map((el) => +el);
// const graph = input.map((el) => el.split(" ").map((el) => +el));
// const visited = [...new Array(N)].map((el) => [...new Array(N)].fill(0));
// const dx = [0, 1, 0, -1];
// const dy = [1, 0, -1, 0];

// let count = 0;
// let newValue;

// const bfs = (x, y, visited) => {
//   const queue = [];
//   const visitedArr = [];
//   queue.push([x, y]);
//   visitedArr.push([x, y]);
//   visited[x][y] = 1;
//   let flag = false;

//   while (queue.length) {
//     const coord = queue.shift(); // 시간초과

//     for (let i = 0; i < 4; i++) {
//       const nx = coord[0] + dx[i];
//       const ny = coord[1] + dy[i];
//       if (nx < 0 || ny < 0 || N <= nx || N <= ny || visited[nx][ny] > 0)
//         continue;
//       const diff = Math.abs(graph[coord[0]][coord[1]] - graph[nx][ny]);

//       if (L <= diff && diff <= R) {
//         // console.log(diff);
//         // console.log(graph[coord[0]][coord[1]], graph[nx][ny]);
//         queue.push([nx, ny]);
//         visited[nx][ny] = visited[coord[0]][coord[1]] + 1;
//         visitedArr.push([nx, ny]);
//         flag = true;
//       }
//     }
//     newValue = Math.floor(
//       visitedArr.reduce((acc, [x, y]) => acc + graph[x][y], 0) /
//         visitedArr.length
//     );

//     visitedArr.forEach(([x, y]) => {
//       graph[x][y] = newValue;
//     });

//     if (flag) count += 1;
//     console.log("newValue ", newValue);
//     console.log("graph ", graph);
//     console.log("visited ", visited);
//     console.log("count ", count);
//   }
// };

// // 이중 for 문
// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < N; j++) {
//     bfs(i, j, visited);
//   }
// }

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l, r] = input.shift().split(" ").map(Number);
const citys = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 0)
);

for (let i = 0; i < n; i++) {
  citys[i] = input.shift().split(" ").map(Number);
}

let ans = 0;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

while (1) {
  let flag = false;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        let queue = [[i, j]];
        let visitedRecord = [[i, j]];
        let cnt = 1;
        let sumPopulation = citys[i][j];
        visited[i][j] = true;

        while (queue.length) {
          const [x, y] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [x + dx[k], y + dy[k]];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
              const diff = Math.abs(citys[x][y] - citys[nx][ny]);
              if (diff >= l && diff <= r && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                visitedRecord.push([nx, ny]);
                cnt++;
                sumPopulation += citys[nx][ny];
                flag = true;
              }
            }
          }
        }

        const changePopulation = Math.floor(sumPopulation / cnt);

        for (const [x, y] of visitedRecord) {
          citys[x][y] = changePopulation;
        }
      }
    }
  }

  if (!flag) break;
  ans += 1;
}
console.log(ans);
