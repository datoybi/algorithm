function solution(s) {
  let cnt = 0;
  for (const el of s) {
    if (el === "(") cnt += 1;
    if (el === ")") cnt -= 1;
    if (cnt < 0) return false;
  }
  return cnt === 0;
}

// !: 아니 왜 이건 안되고 위에껀 되지???
// function solution(s){
//   let cnt = 0;
//   [...s].forEach(el => {
//     if (el === "(") cnt += 1;
//     if (el === ")") cnt -= 1;
//     if(cnt < 0) return false;
//   });
//   return cnt === 0;
// }
