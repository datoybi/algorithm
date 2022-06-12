function solution(arr) {
  const answer = [];

  arr.forEach((el, i) => {
    if (arr[i + 1] != el) answer.push(el);
  });
  return answer;
}
