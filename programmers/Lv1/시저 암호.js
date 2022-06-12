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
function solution(s, n){
	return s.split("").map(value => {
			if (value === " ") return value;
			return value.toUpperCase().charCodeAt() + n > 90
			? String.fromCharCode(value.charCodeAt() + n - 26)
			: String.fromCharCode(value.charCodeAt() + n)
	}).join("");
}

//https://programmers.co.kr/learn/courses/30/lessons/12926/solution_groups?language=javascript

// 또 머리가 멈췄다... 내일 더 풀어보자
