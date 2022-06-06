// json 지양하기 ? 배열이 다루기 훨 쉽다..
// 중복제거엔 Set 사용하기 

const solution = (id_list, report, k) => {
  // id_list의 json 생성
  const lists = {};
  id_list.map((id) => {
    lists[id] = 0;
  });

  // report 배열 생성 및 처리
  const record = {};
  report.forEach((element) => {
    const [reporter, reported] = element.split(" ");
    if (!record[reported]) {
      record[reported] = [reporter];
    } else if (!record[reported].includes(reporter)) {
      // 중복처리
      record[reported] = [...record[reported], reporter];
    }
  });

  // k와 비교 후 정답 추출
  for (element in record) {
    if (record[element].length >= k) {
      record[element].forEach((el) => {
        lists[el] += 1;
      });
    }
  }

  const answer = Object.values(lists);
  return answer;
};
