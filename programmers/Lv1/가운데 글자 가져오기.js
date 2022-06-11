function solution(dartResult) {
	const arr = getSplitedArray([...dartResult])
	console.log(arr);
	
	arr.forEach(outer => {
			let score = [...outer];
			console.log(score)
			// if(score[2])
	})
	
	var answer = 0;
	return answer;
}

function getSplitedArray(dartArray) {
	let tmp = '';
	const arr = [];
	
	dartArray.forEach((el, idx) => { 
			if(tmp.length >= 2) {
					if(el === '#' || el === '*' ) {
							tmp += el;
							arr.push(tmp);
							tmp = '';
					} else {
							if(isNaN(el)) {
									tmp += el;
									arr.push(tmp);
									tmp = '';
							} else {
									arr.push(tmp);
									tmp = '';
									tmp += el; 
							}
					}
			} else {
				 tmp += el; 
			}
			if(idx === dartArray.length - 1 && tmp) {
					arr.push(tmp);
			}
	})
	return arr;
}