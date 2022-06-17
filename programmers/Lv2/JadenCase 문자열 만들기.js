function solution(s) {
  const arr = [...s];
  let answer = "";

  arr.map((el, i) => {
    if (!isNaN(el) || el === " ") {
      // 숫자거나 공백이면
      answer += el;
    } else {
      // 문자면
      if (i === 0) {
        answer += el.toUpperCase();
      } else if (arr[i - 1] === " ") {
        answer += el.toUpperCase();
      } else {
        answer += el.toLowerCase();
      }
    }
  });
  return answer;
}
