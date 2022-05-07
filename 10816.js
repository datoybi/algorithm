/*
숫자 카드 2
정답의 최대치
N (1 <= N <= 500,000)
-10^7 <= n <= 20^7
M (1 <= M <= 500,000)
-10^7 <= m <= 20^7
number는 9천조까지 가능하니까 number형 가능

메모리제한 256KB = 256 * 10^6 / 4 = 64백만
최대 담아야 할 메모리 수 : N + M = 1,000,000 백만, 사용가능

접근
가장 단순한 방법(O(NM))
N*M = 500,000 * 500,000 = 25 * 10^10 = 2천5백억!!!
1초는 약 1억개의 연산이므로 매우매우 시간초과

이분탐색(O(MlogN))
MlogN = 500,000 * 5 = 2,500,000 => 가능
1. n 정렬 (nlogn) = 2,500,000
2. 10보다 작은 값의 위치를 구하고 10보다 큰 값의 위치를 구해서
둘을 뺴주기
2번의 이진탐색 = M * logN * logN =  2,500,000 * 5 = 12,500,000
총 연산 : 12,500,000 + 2,500,000 = 약 15,000,000 가능!

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

const main = (input) => {
  const [N, n, M, m] = setArray(input);
  let ans = "";
  m.forEach((num) => {
    const result = Math.abs(
      maxBinarySearch(n, 0, N - 1, num) - minBinarySearch(n, 0, N - 1, num)
    );
    ans += `${result} `;
  });
  console.log(ans);
};

const setArray = (input) => {
  let [N, n, M, m] = input;
  N = parseInt(N, 10);
  M = parseInt(M, 10);
  n = n
    .split(" ")
    .map((el) => parseInt(el, 10))
    .sort((a, b) => a - b);
  m = m.split(" ").map((el) => parseInt(el, 10));
  return [N, n, M, m];
};

const minBinarySearch = (n, left, right, num) => {
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (num >= n[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

const maxBinarySearch = (n, left, right, num) => {
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (num > n[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
