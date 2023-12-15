/*
	https://www.acmicpc.net/problem/15651
	N과 M (3)
	중복을 허용해서 순서있게 나열하기
	
	시간복잡도 : N^Mc= 7^7 = 823543 -> 82만 -> 약 1초도 안걸림 시간안에 풀수 있다. 
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
        selected.push(i);
        recursive();
        selected.pop();
      }
    }
  };

  recursive();
  console.log(result);
};

/*
	시간복잡도 : N^M = 7^7 = 82만 -> 시간내에 가능
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
        selected.push(i);
        recursive();
        selected.pop();
      }
    }
  };

  recursive();
  console.log(result);
};
