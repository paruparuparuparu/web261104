const titles = [
  "타짜",
  "보헤미안 랩소디",
  "악마는 프라다를 입는다 2",
  "오디세이",
  "극장판 치이카와: 인어 섬의 비밀"
];

const ratings = [6.9, 7.9, 7.0, 8.0, 7.3];
const years = [2006, 2018, 2026, 2026, 2026];



// 합계
let sum = 0;

for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}

console.log("합계:", sum);

// 평균
const average = sum / ratings.length;

console.log("평균:", average);

// 최고 평점 영화와 8점 이상 개수
let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] > max) {
    max = ratings[i];
    maxIndex = i;
  }

  if (ratings[i] >= 8) {
    count++;
  }
}

console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

// 영화별 등급 라벨
for (let i = 0; i < ratings.length; i++) {
  let label;

  if (ratings[i] >= 8.5) {
    label = "명작";
  } else if (ratings[i] >= 7) {
    label = "추천";
  } else {
    label = "보통";
  }

  console.log(
    titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label
  );
}

// 요약 한 줄
const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

// 보너스: while로 합계를 구하고 for의 결과와 비교
let whileSum = 0;
let index = 0;

while (index < ratings.length) {
  whileSum = whileSum + ratings[index];
  index++;
}

console.log("while 합계:", whileSum);
console.log("for 합계와 같은가:", whileSum === sum);

// 보너스: switch로 연도대 출력
for (let i = 0; i < years.length; i++) {
  const decade = years[i] - years[i] % 10;

  switch (decade) {
    case 1990:
      console.log(titles[i] + " : 1990년대");
      break;

    case 2000:
      console.log(titles[i] + " : 2000년대");
      break;

    case 2010:
      console.log(titles[i] + " : 2010년대");
      break;

    case 2020:
      console.log(titles[i] + " : 2020년대");
      break;
  }
}
