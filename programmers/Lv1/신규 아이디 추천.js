/* 
	!: 난 하드코딩 했는데 다들 정규식으로 편하게 풀었다.
 	!: 정규식 사용해도 된다는 걸 왜 생각못했을까?? 사실 코딩하는게 정규식 사용보다 더 쉬운것 같다.. 정규식 좀 공부해둬야지
	!: 그리고 실수로 놓쳤던 구간이 두군데 있다. 
	!: Lv3에서 2개의 .은 1개로 줄여야 할 때 내가 모르고 array[i] === '.' && array[i+1] === '.' 이 조건들을 써주지 않았다...한 30분 헤맨듯..
	!: 그리고 빈 문자열일 때 a 넣어주는걸 new_id 갯수만큼 a를 넣어줘야한다고 생각했었다. 풀고나니 뿌듯하다.
*/
function solution(new_id) {
  let id = new_id.toLowerCase(); // Lv1
  id = validateLetter(id);
  id = validateDot(id);
  id = validateLength(new_id, id);

  return id;
}

function validateLetter(id) {
  // Lv2
  const result = [...id].filter(
    (element) => !"~!@#$%^&*()=+[{]}:?,<>/".includes(element)
  );
  return result.join("");
}

function validateDot(id) {
  const array = [...id];
  for (let i = 0; i < array.length; i++) {
    // Lv3
    if (array[i] === array[i + 1] && array[i] === "." && array[i + 1] === ".") {
      array.splice(i, 1);
      i -= 1;
    }
  }
  const result = frontBackDot(array);
  return result.join("");
}

function frontBackDot(array) {
  // Lv 4
  if (array[0] === ".") {
    array.shift();
  }
  if (array[array.length - 1] === ".") {
    array.pop();
  }
  return array;
}

function validateLength(new_id, id) {
  id = id || "a"; // Lv5
  id = id.slice(0, 15); // Lv6
  id = frontBackDot([...id]).join("");

  if (id.length <= 2) {
    // Lv7
    const last = id[id.length - 1];
    while (id.length <= 2) {
      id += last;
    }
  }
  return id;
}
