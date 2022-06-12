function solution(n) {
	let answer = 0;
	for(let i = 2; i <= n; i ++){
			if(isPrime(i)) answer += 1;
	}
	return answer;
}

function isPrime(i){
for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
			if(i % j === 0) {
					return false;
			}
	}
	return true;
}