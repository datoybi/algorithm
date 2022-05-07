/*
!: 두 용액
전체용액 N 2 <= N <= 100,000
용액의 특성값 -10^9 ~10^9

정답의 최대치
두 용액이 더해지면 20억, number형은 900조까지 가능하니 number 사용 가능

메모리 제한
128MB = 128 * 10^6 / 4 = 32백만개의 int 사용가능
N = 10^5

접근
간단한 접근(O(N^2))
10^10 = 100억, 주어진 시간 1초 => 1억개의 연산 가능

이분탐색 접근 (O(NlogN))
1. n정렬 (n log n)
n log n = 25,000,000
2. N에 대해 이분탐색 (logN) 5
!:  a를 정했을 때 -a와 가장 가까운 값을 빨리 찾으면 된다!
어디서? left + 1 ... N
	정렬의 특성 중 각 원소마다, 가장 가까운 원소는 양 옆에 있다
정렬 해보기!

회고
a의 -a와 가까운 수를 구해야 하는지는 생각치 못했다.
아직도 세부조건을을 왜 사용해야 되는지 잘 모르겠다
이분탐색할 때 중복을 없애는 방법은 idx + 1부터 탐색하는 것이다.
*/

(() => {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const buffer = [];
  r1.on("line", (line) => {
    buffer.push(line);
  }).on("close", () => {
    main(buffer);
  });
})();

let r1 = 0;
let r2 = 0;
let bestSum = Number.MAX_VALUE;

const main = (input) => {
  const [N, n] = setArray(input);

  n.forEach((num, idx) => {
    // !: binarySearch 두번째 인자로 왜 idx + !이 들어가는지 잘 이해가 되진 않는다.
    // !: 아마도 앞에서 탐색 다 해주니까 중복 제거도 할겸 idx+1 하나보다.
    const result = binarySearch(n, idx + 1, N - 1, num);
    // !: result-1, result중에 idx + 1이상 N이하의 것만 가능한 원소이다. (idx < result - 1) 이 조건도 왜하는지 잘 모르겠음
    if (idx < result - 1 && Math.abs(num + n[result - 1]) < bestSum) {
      bestSum = Math.abs(num + n[result - 1]);
      r1 = n[result - 1];
      r2 = num;
    }

    if (result <= N - 1 && Math.abs(num + n[result]) < bestSum) {
      bestSum = Math.abs(num + n[result]);
      r1 = n[result];
      r2 = num;
    }
  });

  const print = r1 < r2 ? `${r1} ${r2}` : `${r2} ${r1}`;
  console.log(print);
};

const setArray = (input) => {
  let [N, n] = input;
  N = parseInt(N, 10);
  n = n
    .split(" ")
    .map((el) => parseInt(el, 10))
    .sort((a, b) => a - b);
  return [N, n];
};

const binarySearch = (n, left, right, num) => {
  let result = right + 1;
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (-num <= n[mid]) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
