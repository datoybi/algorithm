// function solution(s, n) {
//     var answer = '';
//     for(let i = 0; i < s.length; i ++){
//         let code = s.charCodeAt(i);
//         let sum = code + n;

//         if(sum > 122) {
//            sum = sum - 123 + 97;
//         } else if(sum > 90 && sum <= 96) {
//            sum = sum - 91 + 65;
//         }
//         if(code === 32) {
//             answer += ' ';
//         } else {
//             answer += String.fromCharCode(sum);
//         }
//     }
//     return answer;
// }

// 아예 모두 다 대문자로 바꿔서 Z보다 큰지 작은지 판별
function solution(s, n) {
  return s
    .split("")
    .map((value) => {
      if (value === " ") return value;
      return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n);
    })
    .join("");
}
