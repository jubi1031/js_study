//문자 (string)
// '' ""

let string = '안녕~';
string = '안녕하세요~ "이주비"라는 친구가 인사함';
console.log(string);

let name = '길동이';
let greeting = '안녕 나는 ' + name + '이야';
//`${변수명}` 템플릿 리터럴
greeting = `안녕하세요~ \n반갑습니다 \t제 이름은~~~~ ${name} 입니다.`;
console.log(greeting);

//이스케이프 표현
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
