// https://www.acmicpc.net/problem/7569
// 토마토
// 굿 안보고 디버깅 잘해서 잘 풀음

// 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [m, n, h] = num.split(" ").map((el) => +el);

// 3차원 그래프 만들기
const graph = [];
let idx = 0;
for (let i = 0; i < h; i++) {
  let temp = [];
  for (let j = 0; j < n; j++) {
    temp.push(input[idx].split(" ").map((e) => +e));
    idx += 1;
  }
  graph.push(temp);
}

const visited = JSON.parse(JSON.stringify(graph)); // visited 세팅
// h, x, y direction 세팅
const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1]; // 높이 h
const direction = [];

// 토마토가 있는 1인 좌표 저장
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let z = 0; z < m; z++) {
      if (graph[i][j][z] === 1) direction.push([i, j, z]);
    }
  }
}

const bfs = () => {
  const queue = [...direction];
  let prevIndex = 0;

  while (queue.length) {
    const currentIndex = queue.length;
    let change = 0;
    //		const coord = queue.shift(); // 시간초과 남
    for (let j = prevIndex; j < currentIndex; j++) {
      const coord = queue[j];

      for (let i = 0; i < 6; i++) {
        const nz = coord[0] + dz[i];
        const nx = coord[1] + dx[i];
        const ny = coord[2] + dy[i];

        if (
          nz < 0 ||
          nx < 0 ||
          ny < 0 ||
          h <= nz ||
          n <= nx ||
          m <= ny ||
          visited[nz][nx][ny] !== 0
        )
          continue;
        visited[nz][nx][ny] = visited[coord[0]][coord[1]][coord[2]] + 1;
        queue.push([nz, nx, ny]);
        change = 1;
      }
    }
    if (!change) break;
    prevIndex = currentIndex;
  }
};

bfs();

// 정답 출력
let answer = visited
  .map((element) => element.map((el) => el.find((e) => e === 0)))
  .map((filterEl) => filterEl.includes(0))
  .filter((el) => el).length;

if (answer !== 0) {
  console.log(-1);
} else {
  console.log(
    Math.max(
      ...visited.map((elements) =>
        Math.max(...elements.map((element) => Math.max(...element)))
      )
    ) - 1
  );
}
