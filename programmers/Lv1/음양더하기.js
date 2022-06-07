function solution(absolutes, signs) {
	let answer = 0;
	absolutes.forEach((abs, idx) => answer += signs[idx] ? abs : -abs)
	return answer;
}