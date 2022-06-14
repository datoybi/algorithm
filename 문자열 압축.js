// !: 좀 설계 해보고 풀어보기

// function solution(s) {
//     let now = 0;
//     let cnt = 0;
//     let arr = [...s]
//     let result = '';

//     arr.forEach((el, i) => {
//         if(arr[now] === el) {
//             cnt += 1;
//         } else {
//             result += cnt === 1 ? `${arr[now]}` : `${cnt}${arr[now]}`;
//             console.log(result)
//             now = i;
//             cnt = 1;
//         }
//     });
//     result += cnt === 1 ? `${arr[now]}` : `${cnt}${arr[now]}`;
//    console.log(result)

//     var answer = 0;
//     return answer;
// }

function solution(s) {
  let now = 0;
  let cnt = 0;
  let arr = [...s];
  let result = "";

  arr.forEach((el, i) => {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[now]);
      if (arr[now] === el) {
        cnt += 1;
      } else {
        result += cnt === 1 ? `${arr[now]}` : `${cnt}${arr[now]}`;
        console.log(result);
        now = i;
        cnt = 1;
      }
    }
  });

  result += cnt === 1 ? `${arr[now]}` : `${cnt}${arr[now]}`;
  console.log(result);

  var answer = 0;
  return answer;
}
