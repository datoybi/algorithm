/*
나무자르기

정답의 최대치
나무의 수의 범위 1 <= N <= 1,000,000
나무의 길이의 범위 1 <= M <= 2,000,000,000
절단 할수 있는 나무 높이의 범위  0 ~ 1,000,000,000

1. 정답의 범위 : 0 ~ 10억
2. 잘린 나무의 길이의 합 <= 나무 높이의 총합 = 100만 * 10억 = 10^15 = 약 100조
=> number가 표현할 수 있는 최대값은 약 9천조이기 때문에 Number형으로 가능

키워드
!:	적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 "설정할 수 있는 높이의 최댓값"을 구하는 프로그램을 작성하시오

원래 문제 : 원하는 길이 M만큼 얻을 수 있는 최대 높이(H)는 얼마인가??
뒤집은 문제 : 어떤 높이로 잘랐을 때, 원하는 길이 M만큼을 얻을 수 있는가? yes/no

접근
	매개 변수 만들어보기
	뒤집은 문제: 어떤 높이로 잘랐을 때 원하는 길이 M만큼을 얻을 수 있는가? yes/no
	시간 복잡도: O(N) (자를 수 있는 높이에 대해 10억?)

시간복잡도 (왜 20억일까 10억이아니고??)
원래 문제: 뒤집은 문제를 모든 H마다 (0~20억) 해보면 마지막 Yes가 정답
시간복잡도: O(뒤집은 문제 * log 20억) = O(N log N) = 31N

1. H를 정해서 결정 문제 한번 풀기 O(N)
2. 정답의 범위를 이분 탐색 하면서 풀기 O(logX) 번 반복
3. 총 시간복잡도 O(NlogX)

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
  const [N, M, A] = setArray(input);
  const result = binarySearch(0, 2000000000, A, M);
  console.log(result);
};

const setArray = (input) => {
  const [N, M] = input[0].split(" ").map((el) => parseInt(el, 10));
  const A = input[1].split(" ").map((el) => parseInt(el, 10));
  return [N, M, A];
};

const binarySearch = (left, right, A, M) => {
  let ans = 0;
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (determination(A, mid, M)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

const determination = (A, h, M) => {
  // H 높이로 나무들을 잘랐을 때, M만큼을 얻을 수 있으면 true, 없으면 false를 return 하는 함수
  let sum = 0;
  A.forEach((num) => {
    if (num > h) {
      sum += num - h;
    }
  });
  return sum >= M;
};
