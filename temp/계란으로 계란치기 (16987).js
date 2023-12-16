/*
https://www.acmicpc.net/proble
m/16987계란으로 계라치기
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input.map((el) => el.split(" ").map(Number));
const visited = Array(N).fill(false);
let result = [];
let count = 0;

let i = 0;
const selected = [];

console.log(visited);
console.log(arr);
console.log("\n");

const calculate = (arr1) => {
  const temp = [...arr1];
  console.log(temp);
  if (result.length === 0) result.push(temp);
  else {
    const idx = result.length - 1;
    result[idx][0] -= temp[1];
    temp[0] -= result[idx][1];

    if (result[idx][0] < 0) {
      result.pop();
    }

    if (temp[0] > 0) {
      result.push(temp);
    }
  }
  console.log("result : ", result);
};

const recursive = () => {
  if (selected.length === N) {
    console.log("selected", selected);
    console.log(result);
    count = Math.max(count, N - result.length);
    console.log("count ", count);
    result = [];
    return;
  } else {
    arr.forEach((el, index) => {
      if (!visited[index] && selected.every((select) => select !== el)) {
        visited[index] = true;
        selected.push(el);
        calculate(el);
        recursive();
        selected.pop();
        visited[index] = false;
      }
    });
  }
};

recursive();
console.log(count);
