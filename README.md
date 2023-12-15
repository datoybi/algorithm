## sort()

- 시간복잡도 : O(n log n)
- 자바스크립트는 정렬할 때 숫자도 유니코드(문자열) 취급한 뒤 정렬한다.그래서 return a - b 을 해주는데 각각의 의미는 아래와 같다.
- 음수가 리턴되면 a < b 를 의미, 양수가 리턴되면 a > b 를 의미, 0이 리턴되면 a == b을 의미.
- b-a - 내림차순, a-b - 오름차순

```jsx
const arr1 = [100, 3, 20];
arr1.sort(); // [ 100, 20, 3 ]

arr1.sort((a, b) => {
  return a - b;
});

console.log(arr1); // [ 3, 20, 100 ]
```

### 2차원 sort

```jsx
const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

// 오름차순
arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

console.log(arr);
// [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]

// 내림차순
arr.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));

console.log(arr);
// [ [ 10, 3 ], [ 6, 6 ], [ 4, 5 ], [ 4, 3 ], [ 2, 2 ] ]

// arr[0]이 같으면 arr[1] 기준으로 오름차순 정렬
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(arr);
//  [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]
// https://ywtechit.tistory.com/269
```

- [각각의 메서드에 대한 시간복잡도](https://kimyejin.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Array-%EB%A9%94%EC%86%8C%EB%93%9C-%EB%B0%8F-%EC%98%88%EC%A0%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84-Big-O)
- JS 에서 Number 범위? '약 천조'
- console.log() 되도록 변수에 담아서 한번만 사용하기 - console.log()의 시간복잡도가 O(N)
- 나머지 떨구기 빠른 순서 ~~ > Math.floor() > parseInt
- json 지양하기 -> 이차원, 삼차원 가면 배열이 다루기 훨 쉽다.
- 중복제거엔 Set 사용하기

### js array 중복 채크

```jsx
function solution(arr) {
  const dic = [...new Set(arr)]; // 중복 제거한 dic
  const answer = [];

  dic.forEach((el) => {
    const count = arr.filter((el2) => el2 === el).length; // 원소 갯수 세기
    answer.push([el, count]);
  });
  return answer;
}

console.log(solution([1, 2, 3, 3]));
```

## 정규식

### 공백 제거

```jsx
console.log("was".search(/\s/)); // 공백이 없으면 -1
console.log(" ".search(/\s/)); // 공백이 있으면 0
```

---

## 2차원 배열 new Array().fill() 할 때 주의점

```jsx
const graph1 = [...new Array(5)].map(() => []); // ❌
const graph2 = [...new Array(5)].fill([]); // ⭕
```

fill()을 사용하면 같은 참조값을 공유하게 된다.

```jsx
graph1[1].push("1");
graph2[1].push("1");

console.log(graph1);
[[], ["1"], [], [], []];
console.log(graph2);
[[], ["1"], [], [], []];

console.log(graph1[1] === graph1[2]); // false
console.log(graph2[1] === graph2[2]); // true
```

그러므로 `map으로 할당`하는 방법을 채택하는 것이 좋다.
