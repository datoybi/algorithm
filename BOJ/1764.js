/* 맞았습니다!
듣보잡

	정답의 최대치, 메모리 제한
		256MB = 1,000,000 * 256 / 20*8 = ???
		문자열은 어떻게 계산해야 할 지 몰라서 8바이트로 계산
		=> 백만개의 String 가능 (?)

접근
	단순한 방법 O(NM)
		시간복잡도 N 500,000 * 500,000 = 250,000,000,000 = 무려 2천억!
		나에게 주어진 시간 2초, 약 2억
	이분탐색 사용 O(N log M)
		시간복잡도 N 500,000 * 5 = 2,500,000 = 2백5십만개의 연산
		2초안에 충분히 가능!
		1. 배열 세팅 및 N 정렬
		2. N을 M만큼 이진탐색 순회
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

const setArray = (input) => {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((el) => parseInt(el, 10));

  const n = input.splice(0, N).sort();
  const m = [...input].sort();

  return [N, M, n, m];
};

const binarySearch = (n, left, right, name) => {
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (name === n[mid]) {
      return name;
    }
    if (name < n[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return null;
};

const main = (input) => {
  // 배열 세팅 및 N 정렬
  const [N, M, n, m] = setArray(input);
  // N을 M만큼 이진탐색 순회
  let answer = "";
  let answerCnt = 0;
  m.forEach((name) => {
    const selected = binarySearch(n, 0, N - 1, name);
    if (selected) {
      answerCnt += 1;
      answer += `${selected} \n`;
    }
  });
  console.log(answerCnt);
  console.log(answer);
};
