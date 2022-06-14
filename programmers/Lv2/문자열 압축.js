// !: 아니. .이거 될듯말듯하면서 안됐다ㅜ.ㅜㅜ하.. 한 3시간 풀었는데... 다음에 꼭 다시 풀어보기

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

// function solution(s) {
// 	let arr = [...s];
// 	arr.push('.');
// 	let result = '';
// 	let answer = arr.length;
// 	for(let i = 1; i <= parseInt(arr.length / 2, 10) ; i ++) {
// 			let now = 0;
// 			let cnt = 1;
// 			let word = '';
// 			for(let j = 0; j < arr.length; j ++){
// 					word = arr.slice(i, i+j).join('');
// 							if(now === arr.length-1) break;
// 							if(word === arr.slice(i+j, i+j+j).join('')) {
// 									cnt += 1;
// 							} else {
// 									result += cnt === 1 ? `${word}` : `${cnt}${word}`
// 									cnt = 1;
// 							}      
// 					}
			
// 			answer = Math.min(answer, result.length)
// 			result = '';
// 	}
// 	console.log(answer)
	
// }

// 모범답안

function solution(s) {
	//문자열 길이 1인 경우
    if (s.length === 1) return 1;
    let strings = [];
    let answer = 0;
    //첫번째 반복문은 압축할 문자열 길이 1부터 시작 ~ 문자열 길이 / 2
    for(let i = 1; i <= parseInt(s.length / 2); i++) {
        let cnt = 1;
        let string = '';
        for(let j = 0; j < s.length; j += i) {
            const current = s.substr(j, i);
            const next = s.substr(j+i, i);
            if(current === next) {
                cnt++;
            } else {
                string = cnt > 1? string + cnt + current : string + current;
                cnt = 1;
            }
        }
        strings.push(string.length);
    }
    return Math.min(...strings);
}