a; /*
	TODO: 재도전 해보기
	https://www.acmicpc.net/problem/14888
	연산자 끼워넣기

	회고 : 이 흐름을 백트레킹을 이용하여 생각해 내기가 아직은 어렵다. 많이 해봐야 할 것 같다. 
	언제 재귀를 끝낼지를 잘 생각하기! 
	*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

let max = -1_000_000_000;
let min = 1_000_000_000;

const calculate = (i, a, b) => {
  if (i === 0) return a + b;
  if (i === 1) return a - b;
  if (i === 2) return a * b;
  if (i === 3) return ~~(a / b);
};

const recursive = (count = 0, result = arr[0]) => {
  if (count === N - 1) {
    max = Math.max(max, result);
    min = Math.min(min, result);
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      if (operators[i]) {
        operators[i] -= 1;
        recursive(count + 1, calculate(i, result, arr[count + 1]));
        operators[i] += 1;
      }
    }
  }
};

recursive();

console.log(max);
console.log(min);
