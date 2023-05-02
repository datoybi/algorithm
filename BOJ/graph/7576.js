// https://www.acmicpc.net/problem/7576
// 토마토
// 날짜를 구하는데 큐에 다 넣으면 날짜를 구할 수 있었다. 그게 왠지는 아직도 잘 모르겠당...
// Array.shift()의 시간복잡도는 O(N)이다. 그러니 사용하면 위험할 수도 있다.
// 여기에서는 change변수와 prevIndex, currentIndex를 이용하여 for문을 돌렸다.
// 그런데 이런 일이 비일 비재하다면 차라리 queue 클래스를 만드는게 현명한 방법인 것 같다는 생각도 들었다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const solution = () => {
  const [m, n] = num.split(" ").map((el) => +el);
  const graph = input.map((el) => el.split(" ").map((e) => +e));
  const visited = input.map((el) => el.split(" ").map((e) => +e));

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const direction = [];

  // 1이 있는 좌표 뽑기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) direction.push([i, j]);
    }
  }

  const bfs = () => {
    const queue = [...direction];
    let prevIndex = 0;

    while (queue.length !== 0) {
      const currentIndex = queue.length;
      let change = 0;

      for (let j = prevIndex; j < currentIndex; j++) {
        const coord = queue[j];
        for (let i = 0; i < 4; i++) {
          let nx = coord[0] + dx[i];
          let ny = coord[1] + dy[i];
          if (nx < 0 || ny < 0 || n <= nx || m <= ny || visited[nx][ny] !== 0)
            continue;
          visited[nx][ny] = visited[coord[0]][coord[1]] + 1;
          queue.push([nx, ny]);
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
    .map((el) => el.find((e) => e === 0))
    .filter((el) => el !== undefined).length;

  if (answer !== 0) {
    console.log(-1);
  } else {
    console.log(Math.max(...visited.map((el) => Math.max(...el))) - 1);
  }
};

solution();
