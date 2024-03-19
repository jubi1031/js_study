//swich
// 정해진 범위 안의 값에 대해 특정한 일을 한 경우

let today = new Date();
let day = today.getDay();
console.log('오늘 날짜 : ', today);
console.log('오늘 날짜 : ', `오늘은 ${day} 요일 입니다.`);

let dayname;
if (day === 0) {
  dayname = '일';
} else if (day === 1) {
  dayname = '월';
} else if (day === 2) {
  dayname = '화';
} else if (day === 3) {
  dayname = '수';
} else if (day === 4) {
  dayname = '목';
} else if (day === 5) {
  dayname = '금';
} else {
  dayname = '토';
}
console.log('오늘 날짜 : ', `오늘은 ${dayname}요일 입니다.`);

switch (day) {
  case 0:
    dayname = '일';
    break;
  case 1:
    dayname = '월';
    break;
  case 2:
    dayname = '화';
    break;
  case 3:
    dayname = '수';
    break;
  case 4:
    dayname = '목';
    break;
  case 5:
    dayname = '금';
    break;
  case 6:
    dayname = '토';
    break;
  default:
    console.log('해당 요일 없음');
}
console.log(dayname);

let condition = 'good'; // bad - 나쁨, okey - 좋음
let text;
switch (condition) {
  case 'good':
  case 'okey':
    text = '좋음';
    break;

  case 'bad':
    text = '나쁨';
    break;
  default:
    text = '어떤 기분인게야??????';
}
console.log(text);
