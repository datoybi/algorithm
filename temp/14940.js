// 해보고 싶었는뎅... 풀이설명도 없고 잘나온 풀이도 별로 없다ㅠ퓨담음에 도전해봐야겠다

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m] = num.split(" ").map((el) => +el); // n 세로 m 가로
const graph = input.map((el) => el.split(" "));
const visited = [...new Array(n)].map((el) => new Array(m).fill(0));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
console.log(n, m);
console.log(input);
console.log(graph);
console.log(visited);

const bfs = (x, y) => {
  let queue = [];
  queue.push([x, y]);

  while (queue.length !== 0) {
    const coord = queue.shift();
    console.log(queue);
    // console.log(coord);

    for (let i = 0; i < 4; i++) {
      const nx = coord[0] + dx[i];
      const ny = coord[1] + dy[i];

      if (nx < 0 || ny < 0 || n <= nx || m <= ny) continue; // 좌표 조건에 맞지 않으면
      if (graph[nx][ny] === "0") continue; // 방문 불가능한곳이면
      if (visited[nx][ny] !== 0) continue; // 이미 방문 했으면

      queue.push([nx, ny]);
      visited[nx][ny] = visited[coord[0]][coord[1]] + 1;

      // if (0 <= nx && 0 <= ny && nx < n && ny < m && graph[nx][ny] !== "2") {
      // console.log("yes");
      // console.log("nx ", nx);
      // console.log("ny ", ny);
      // if (graph[nx][ny] === "2") {
      // console.log("2입니다");
      // console.log(visited[nx][ny]);
      // } else {
      //   queue.push([nx, ny]);
      //   visited[nx][ny] = visited[coord[0]][coord[1]] + 1;
      // }
      // }
    }
  }
};

console.log(graph);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log(i, j);
    bfs(i, j);
  }
}

console.log(visited);
