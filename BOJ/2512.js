/*
예산
지방의 수 3 <= N <= 10,000
지방들의 예산 1 <= budgets <= 100,000
총 예산 N <= M <= 1,000,000,000 10억

정답의 최대치 
10^4
정답의 범위 : 1 ~ 10억
지방 예산들의 합 = 10억 
=> NUMBER 형으로 가능

지방들에게 줄 예산들 중 최댓값을 구하라.
뒤집은 문제 : 얼마나 많이 주어야, 원하는 최댓값을 얻을 수 있을까?
시간복잡도 N log M
10^4 * 10억 log = 90,000
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
  const [N, budgets, M] = setArray(input);
  const result = binarySearch(
    0,
    Math.max(0, Math.max.apply(null, budgets)),
    budgets,
    M
  );
  // !: 왜 right를 이렇게 설정해야만 할까??? 잘 모르겠당
  console.log(result);
};

const setArray = (input) => {
  let [N, budgets, M] = input;
  N = parseInt(N, 10);
  budgets = budgets.split(" ").map((el) => parseInt(el, 10));
  M = parseInt(M, 10);
  return [N, budgets, M];
};

const binarySearch = (left, right, budgets, M) => {
  let answer = 0;
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (destination(mid, budgets, M)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
};

const destination = (limit, budgets, M) => {
  let sum = 0;
  budgets.forEach((budget) => {
    sum += Math.min(budget, limit);
  });
  return sum <= M;
};
