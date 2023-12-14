/*
https://www.acmicpc.net/problem/15649
N과 M (1)
중복을 허용하지 않고 순서있게 나열하기

시간복잡도 : N! => 7! => 5040 -> 1초 안에 가능
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
        if (!selected.includes(i)) {
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
