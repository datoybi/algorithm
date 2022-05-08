// 맞았습니다!!
/*
// 주의! 이문제는 readline으로 풀어야함!

문제 요약
	점 1개당 가장 가까운 같은 색의 점을 찾아 최소값을 구해 다 더하는 것
정답의 최대치
	점 두개 = 2 *10^5 이다.
	점의 최대 수는 5000
	될수 있는 최대 쌍은 5000/2
	즉, 10^5 * 2500 * 2
	
	최대치 : 5 * 10^8 = 5억
	-> int여도 충분하다

시간복잡도
	가장 쉬운 방법 O(N^2)
		10만 * 10만 = 100억
		N이 10만이기 떄문에 통과하지 못함 

	빠르게 풀기 위해선?
		내 풀이 중에 느렸던 곳이 어딘지 생각을 해서 다른 방법 찾기
	
	정렬의 특성인 각 원소마다, 가장 가까운 원소는 자신의 양 옆 중에 있다. 참고
	
	각 점마다, 자신과 가장 가까운 점을 빨리 찾기 O(N log N)
		색깔마다 ArrayList를 만들어주면, 총 배열이 크기는 O(N)이다. (최대값으로 생각해서 1개에 N이 다 있을 수도 있으니까)

공간 복잡도
	색깔별로 모으기 - 객체 사용 O(N^2)
	배열 정렬 - 정렬은 O(NlogN)
	정답 계산 O(N)
	총 O(N) 
	
	메모리 제한이 512MB일 때, int 변수를 대략 1.2억개 사용 가능

*/

// 1 색깔별로 정렬하기
// 2. 양 옆과 비교하여 최소값 더하기

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

const solution = (arr) => {
  let sum = 0;
  // 같은 색 끼리 묶기
  const collected = arr.reduce((acc, el, idx) => {
    const [id, color] = el;
    if (acc[color]) acc[color].push(id);
    else acc[color] = [id];
    return acc;
  }, {});

  // 정렬하기
  Object.values(collected).forEach((el) => el.sort((a, b) => a - b));
  // 양 옆 비교하며 sum 구하기
  Object.values(collected).forEach((wrap) => {
    wrap.forEach((el, idx, array) => {
      const smaller = array[idx + 1] - el;
      const bigger = el - array[idx - 1];

      if (idx === 0) {
        sum += smaller;
      } else if (idx === wrap.length - 1) {
        sum += bigger;
      } else {
        sum += Math.min(smaller, bigger);
      }
    });
  });
  return sum;
};

const main = (input) => {
  input.toString().trim().split("\n");
  input.shift();
  const arr = input.map((el) => el.split(" "));
  console.log(solution(arr));
};
