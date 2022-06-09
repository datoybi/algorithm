/*
	아오 굉장히 힘들게 푼 문제.. 뭔가가 예외처리와 생각해야 할 것들이 꽤 많았다.

*/
function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const duplicate = isDuplicated(lost, reserve);
  duplicate.forEach((el) => {
    removeElement(lost, el);
    removeElement(reserve, el);
  });

  let lostLength = lost.length;
  let i = 0;

  while (true) {
    let num = lost[i];
    if (reserve.indexOf(num - 1) != -1) {
      removeElement(reserve, num - 1);
      lostLength -= 1;
    } else if (reserve.indexOf(num + 1) != -1) {
      removeElement(reserve, num + 1);
      lostLength -= 1;
    }
    i += 1;
    if (reserve.length === 0 || i === lost.length) break;
  }
  let answer = n - lostLength;
  return answer;
}

function isDuplicated(lost, reserve) {
  const result = lost.filter((el, idx) => reserve.includes(el));
  return result;
}

function removeElement(arr, el) {
  return arr.splice(arr.indexOf(el), 1);
}

// 모범답안
function solution(n, lost, reserve) {
	const realReserve = reserve.filter(r => !lost.includes(r));
	const realLost = lost.filter(r => !reserve.includes(r));
	// const reserveNum = reserve.lenght - realReserve.length;
	
	const ableNum = realLost.filter(a => {
			return realReserve.find((b, i) => {
					const has = b === a-1 || b === a+1;
					if (has) {
							delete realReserve[i];
					}
					return has;
			});
	}).length;
	return n - (realLost.length - ableNum);
}