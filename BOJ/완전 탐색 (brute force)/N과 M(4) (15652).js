/*
	https://www.acmicpc.net/problem/15652
	N과 M (4)
	중복을 허용해서 순서있게 나열하기
	1 <= N, M <= 8 이니까 
	시간복잡도를 못찾겠다. 대략적으로 N^M 해도 1억은 안넘긴 하다.
	강의에서는 N^M보다 작다 이렇게 표현하는군..
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
        if (selected.every((el) => el <= i)) {
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

/*
	시간복잡도 : 8! 보다 작음 -> 가능
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
    } else {
      for (let i = 1; i <= N; i++) {
        if (selected.every((el) => el <= i)) {
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
