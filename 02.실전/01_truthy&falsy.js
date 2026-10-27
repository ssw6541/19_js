if (!undefined) {
  console.log("undefined는 falsy한 값입니다.");
}
if (!null) {
  console.log("null은 falsy한 값입니다.");
}
if (!0n) {
  console.log("0n은 falsy한 값입니다.");
}
if (!0) {
  console.log("0은 falsy한 값입니다.");
}
if (!-0) {
  console.log("-0은 falsy한 값입니다.");
}
if (!NaN) {
  console.log("NaN은 falsy한 값입니다.");
}
if (!"") {
  console.log('""은 falsy한 값입니다.');
}

// 출력
// undefined는 falsy한 값입니다.
// null는 falsy한 값입니다.
// 0n은 falsy한 값입니다.
// 0는 falsy한 값입니다.
// -0는 falsy한 값입니다.
// NaN는 falsy한 값입니다.
// ""는 falsy한 값입니다.

// 0n은 불리언 자료형의 참은 아니지만 참과 같은 의미로 쓰인다.
// 조건식에서 ture로 평가됨.

const num = "false";

if (num) {
  console.log("true");
} else {
  console.log("false");
}

// true
