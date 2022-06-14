function solution(x) {
  const num = [...(x + "")].reduce((acc, el) => {
    return parseInt(el, 10) + acc;
  }, 0);

  const answer = x % num === 0 ? true : false;
  return answer;
}
