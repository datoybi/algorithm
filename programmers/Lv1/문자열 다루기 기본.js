function solution(s) {
  let answer = false;
  if (s.length === 4 || s.length === 6) {
    answer =
      [...s].filter((el) => isNaN(el) === true).length === 0 ? true : false;
  }
  return answer;
}

// 조금더 간결한 version
function solution(s) {
  return s.length === 4 || s.length === 6 ? !isNaN(s) : false;
}
