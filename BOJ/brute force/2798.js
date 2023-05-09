/*
	https://www.acmicpc.net/problem/2798
	블랙잭
	
	시간복잡도 
	1초 => 약 1억개의 연산 가능 
	N장의 카드 3개의 합이 M을 넘지 말아야 하므로
	최대연산은 100 * 99 * 98 = 약 97만 (1초안에 해결 가능) 
*/

// 입력
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [num, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const [n, m] = num.split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

// 조합 구하는 함수
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

// 조합 구하는 함수 실행
const combination = getCombinations(arr, 3);

let add = 300000; // 더해서 나오는 최대값
let answer = m;

// 완전 탐색하며 더한 값의 최소값을 구해주기
combination.map((el) => {
  if (answer === 0) return;

  add = el.reduce((acc, e) => acc + e, 0);
  if (add <= m) {
    answer = Math.min(answer, Math.abs(m - add));
  }
});

console.log(m - answer);
