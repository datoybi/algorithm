function solution(s) {
  let check = true;
  let cnt = 0;

  [...s].forEach((el) => {
    if (cnt === 0 && el === ")") return false;
    if (el === ")") cnt += 1;
    else if (el === "(") cnt -= 1;
    if (cnt < 0) return false;
  });

  return check === 0;
}
