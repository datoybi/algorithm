function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const temp = [];
    for (let j = 0; j < arr1[0].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

// 모범 답안 
// 오.. map 안에 map을 사용해서 이중 포문 가능하군..
function solution(A, B){
	return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}