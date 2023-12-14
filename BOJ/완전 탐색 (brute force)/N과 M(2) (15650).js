/*
	https://www.acmicpc.net/problem/15650
	N과 M (2)
	중복을 허용하지 않고 순서있게(오름차순으로) 나열하기
	일단 시간복잡도를 찾는데 애를 먹었다. 정확한 시간복잡도를 찾기 힘들어서 가장 클 경우의 수를 찾았다.
	N,M은 1~8의 수이고, N = 8, M = 1 일 때, 가장 큰 시간복잡도를 나타낸다. 8! => 4만정도라 1초안에 해결할 수 있다.
*/

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    solution(line);
  })
  .on("close", () => {
    process.exit();
  });

const solution = (input) => {
  const [N, M] = input.split(" ").map(Number);
  const selected = [];
  let result = "";

  const recursive = () => {
    if (selected.length === M) {
      result += selected.join(" ");
      result += "\n";
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        // 중복허용x, 오름차순
        if (!selected.includes(i) && selected.every((el) => el < i)) {
          selected.push(i);
          recursive();
          selected.pop();
        }
      }
    }
  };

  recursive();
  console.log(result);
};
