/*
TODO: 나중에 다시 풀어보기
https://www.acmicpc.net/problem/1182	
	부분수열의 합
	시간복잡도 : 완전 탐색으로 모든 경우의 수를 다 돌려본다고 할 때, N이 20까지 될 수 있으므로 어마어마하다.
	그러나 계산도중에 S값을 초과하면 반복문을 그만 돌리는 걸로 해서 구현을 한번 해 보겠다. 
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // sort의 시간복잡도는?

const selected = [];
console.log(arr);
let sum = 0;
let count = 0;

const recursive = () => {
  if (sum === S) {
    count += 1;
  }

  if (selected.length === N) {
    console.log(selected);
    return;
  } else {
    arr.forEach((el, i) => {
      selected.push(el);
      sum += el;
      recursive();
      sum -= el;
      selected.pop();
    });
  }
};

recursive();
console.log(count);
