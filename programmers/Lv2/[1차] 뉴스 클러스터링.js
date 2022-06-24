/*
	잘 풀었는데 세세한 예외처리들을 못한게 아쉽다. 그래도 잘 풀어서 뿌듯하다.
*/
function solution(str1, str2) {
  const arr1 = [...str1.toLowerCase()];
  const arr2 = [...str2.toLowerCase()];
  let set1 = [];
  let set2 = [];

  for (let i = 0; i < arr1.length - 1; i++) {
    if (i != arr1.length - 1) {
      let str = `${arr1[i]}${arr1[i + 1]}`;
      if (isString(str) === true) set1.push(`${arr1[i]}${arr1[i + 1]}`);
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    if (i != arr2.length - 1) {
      let str = `${arr2[i]}${arr2[i + 1]}`;
      if (isString(str) === true) set2.push(`${arr2[i]}${arr2[i + 1]}`);
    }
  }

  let inArr = [];

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        inArr.push(set1[i]);
        set1[i] = "";
        set2[j] = "";
        break;
      }
    }
  }
  let inLength = inArr.length;
  let outLenghth = set1.length + set2.length - inArr.length;
  if (inLength === 0 && outLenghth === 0) {
    inLength = 1;
    outLenghth = 1;
  }
  let answer = Math.floor((inLength / outLenghth) * 65536);
  return answer;
}

function isString(str) {
  if (str.match(/[\W\d_]/gi)) {
    return false;
  }
  return true;
}
