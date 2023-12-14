/*
	https://www.acmicpc.net/problem/15663
	N과 M (9)
	중복없이 순서있게(오름차순으로) 나열하기
	1 <= N, M <= 8 이니까 
	시간복잡도 : 8^8은 넘지 않을 것 같아서 1초만에 가능

	메모리 초과 발생 -> 10000보다 작은 수 
	
	어렵넹
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").sort((a, b) => a - b);
// const arr = input[1].split(" ");

const selected = [];
let result = "";
let cur_index = -1;
const output = [];
const chosen = new Array(N).fill(false);

// 애초에 일케하면 계속 지금 선택된거 따라가지 못함
// 그 이유는 cur_index계속 변하는데..흠 왜 안되는거지ㅠㅠ 디버깅 해봐야겠다 집가서..
const recursive = () => {
  if (selected.length === M) {
    result += selected.join(" ");
    result += "\n";
    return;
  } else {
    arr.forEach((el, idx) => {
      console.log(cur_index, idx, el, selected);
      if (cur_index !== idx) {
        selected.push(el);
        cur_index = idx;
        recursive();
        selected.pop();
        cur_index = -1;
      }
    });
  }
};

// const recursive = () => {
//   if (selected.length === M) {
//     output.push(selected.join(" "));
//     return;
//   } else {
//     chosen.forEach((bool, idx) => {
//       if (!bool) {
//         chosen[idx] = true;
//         selected.push(arr[idx]);
//         recursive();
//         chosen[idx] = false;
//         selected.pop();
//       }
//     });
//   }
// };

recursive();
// console.log(result);
// const r = [...new Set(result.split("\n"))].join("\n");
// console.log([...new Set(result.split("\n"))].join("\n"));
console.log([...new Set(output)].join("\n"));
