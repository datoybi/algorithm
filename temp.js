/*
투포인터 디버깅해보기
https://www.youtube.com/watch?v=rI8NRQsAS_s&ab_channel=%EB%8F%99%EB%B9%88%EB%82%98
*/
function solution(n, arr) {
  let answer = 0;
  let sum = 0;
  let end = 0;

  // 시작점 start를 배열 시작부터 오른쪽으로 한 칸씩 옮김
  for (let start = 0; start < arr.length; start++) {
    // 끝점 end를 가능한 만큼 이동시킴
    while (sum < n && end < arr.length) {
      sum += arr[end];
      end += 1;
    }
    if (sum === n) {
      answer += 1;
    }
    sum -= arr[start];
  }
  return answer;
}

const arr = [1, 2, 3, 2, 5];
console.log(solution(5, arr));
