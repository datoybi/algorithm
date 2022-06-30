// 정확성은 통과했으나 효율성은 통과하지 못함
function solution(info, query) {
	const infoArr = [];
	const queryArr = [];
	const answer = [];

	info.forEach(el => infoArr.push(el.split(' ')));
	query.forEach(el => {
			const splited = el.split(' and ');
			splited.push(...splited.pop().split(' '));
			queryArr.push(splited);
	})
	infoArr.sort((a,b) => b[4] - a[4]);
	
	queryArr.forEach(query => {
			let total = 0;
			for(let z=0; z < infoArr.length; z++){
					let cnt = 0;
					if(parseInt(infoArr[z][4], 10) >= parseInt(query[4], 10)){
							for(let i = 0; i < 4; i ++) {
									if(cnt !== i) break;
									if(query[i] === '-') cnt += 1;
									else cnt = query[i] === infoArr[z][i] ? (cnt + 1) : cnt;  
							}
					// console.log(`[${query}]\t[${infoArr[z]}]\t${cnt}`)
					if(cnt === 4) total += 1;
					} else {
							break;
					}
			}
			answer.push(total);
	})
	return answer;
}

/*
	검색 조건에 대한 dic 만들어주기
	x점 맞은 사람을 찾을 때 binary search 이용하기 
	찾으면 비교후 카운트
*/