/*
	두 수의 합
	정답의 최대치
	1 <= a <= 1,000,000 백만
	1 <= n <= 100,000 십만
	1 <= x <= 2,000,000 2백만
	=> 1,000,000 * 100,000 = 100,000,000,000 천억
	Number는 9천조 까지 가능
	
	메모리 : 128 = 10^6 * 128 = 128,000,000 / 4 = 32,000,000 개의 정수형 가능 

	1 <= i < j <= n

	가장 단순한 방법(O(N^2))
	N이 N만큼 순회하면 된다. 그러면 시간복잡도가 N * N 
	= 100000 * 100000 = 10,000,000,000 = 백억. 우리에게 주어진 시간 1초 
	-> 약 1억개의 연산 가능 따라서 시간 초과
	
	이진탐색을 이용한 방법(O(NlogN))
	1. 정렬을 해준다. NlogN
	2. N만큼 순회하면서 이진탐색 logN
	시간복잡도 : NlogN = 100000 * 5 = 500,000 가능!
*/

(() => {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const buffer = [];
  r1.on("line", function (line) {
    buffer.push(line);
  }).on("close", function () {
    main(buffer);
  });
})();

const setArray = (input) => {
  const n = parseInt(input.shift(), 10);
  const x = parseInt(input.pop(), 10);
  const a = input
    .toString()
    .split(" ")
    .map((el) => parseInt(el, 10))
    .sort((a, b) => a - b);

  return [n, x, a];
};

const main = (input) => {
  const [n, x, a] = setArray(input);
  console.log(n); // 총 갯수
  console.log(a); // n만큼 길이의 배열
  console.log(x); // 맞출 합의 길이

  let sum = 0;
  for (let i = 0; i < Math.floor(n / 2) + 1; i++) {
    console.log(binarySearch(a, 0, n - 1, a[i], x));
  }
  console.log(sum);
};

const binarySearch = (a, left, right, num, x) => {
  while (left <= right) {
    let mid = parseInt((left + right) / 2, 10);
    if (num === a[mid]) break;
    console.log(left, right, num, x, mid);

    if (num + a[mid] === x) return 1;
    if (num + a[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
};
