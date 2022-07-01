// 시간초과 났던 내 풀이
function solution(number, k) {
	const arr = [...number].map(el => parseInt(el, 10));
	
	for(let i=0; i<k; i++) {
			let value = 0;
			let idx;
			for(let j=0; j<arr.length; j++){
					if(arr[j] !== 9){
							console.log(arr[j-1]);
							const tmp = [...arr];
							tmp.splice(j, 1);
							const tmpVal = tmp.join('');
							if(value < tmpVal) {
									value = tmpVal;
									idx = j;
							}  
					}
			}
			arr.splice(idx, 1);
	}
	return arr.join('');
}

// 모범답안을 가져왔는데 스텍을 사용하는데 잘 이해가 가지 않는다 - 다음에 또 보기
function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k -= 1;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k); 
  return arr.join("");
}