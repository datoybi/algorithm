function solution(arr1, arr2) {
  a = arr1[0].length;
  b = arr1.length;
  c = arr2[0].length;
  d = arr2.length;
  max1 = Math.max(a, c);
  max2 = Math.max(b, d);

  const answer = Array(max1).fill[Array(max1).fill[0]];

  // function solution() {
  //   const A = [[1, 2], [3, 4]];
  //   const B = [[5, 6, 7], [8, 9, 10]];
  //   const a = A[0].length;
  //   const b = A.length;
  //   const c = B[0].length;
  //   const d = B.length;
  //   const max1 = Math.max(a, c);
  //   const max2 = Math.max(b, d);
  //   const result = [];

  //   for(let i = 0; i < max1; i ++){
  //     for(let j = 0; j <max2; j ++) {
  //       console.log('A : ' + A[i][j] + ' , B : ' + B[j][i])
  //     }
  //   }

  // }

  // solution();

  //     arr1.forEach

  return answer;
}
