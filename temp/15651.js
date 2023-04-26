/*
	https://www.acmicpc.net/problem/15651
	N과 M (3)

	시간복잡도?
	O(N^M)	
	조건 : 1 ≤ M ≤ N ≤ 7
	이루어질 최대 연산 : 7^7 = 823543
	시간제한 : 1초 => 1억번의 연산
	즉, 시간안에 해결 가능!

	공간복잡도
	O(M)

	!: 나중에 풀어보기 
	백트래킹인데 이해가 잘 안됨 ㅠ
*/

// M, N
// M이 1이면

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ");
const selected = [];
const used = [];

const recursive = (k) => {
  console.log(k);
  if (k === m) {
    for (let i = 1; i <= m; i++) {
      console.log(i + "");
    }
    console.log("\n");
  } else {
    for (let j = 1; j < n + 1; j++) {
      selected[k] = j;
      recursive(k + 1);
      selected[k] = 0;
    }
  }
};

recursive(0);
