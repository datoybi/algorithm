function solution(a, b) {
	var week = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
return week[new Date(`2016.${a}.${b}`).getDay()];
}


// 남 코드
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}
