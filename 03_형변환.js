// let number = 10;    // 묵시적 형변환
// let string = "20";

// const result = number + string;
// console.log(result);

// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof result);

// let strA = "10";
// let strB = "10개";

// let numA = Number(strA);
// let numB = Number(strB);

// console.log(numA);
// console.log(numB);
// console.log(typeof numA);
// console.log(typeof numB);

// let strA = "10";
// let strB = "10개";

// let numA = parseInt(strA, 10);
// let numB = parseInt(strB, 10);

// console.log(numA); // 10
// console.log(numB); // 10

// let str = "파이팅 2022"; // 문자열이 숫자가 아닌 문자열로 시작하면 NaN을 반환한다.
// let num = parseInt(str, 10);

// console.log(num); // NaN

// let num = 2022;
// let str = String(num);

// console.log(str);
// console.log(typeof str);    // string

// let varA;
// let varB = null;
// let varC = true;

// let strA = String(varA);
// let strB = String(varB);
// let strC = String(varC);

// console.log(strA); // undefined
// console.log(strB); // null
// console.log(strC); // true

// console.log(typeof strA);
// console.log(typeof strB);
// console.log(typeof strC);

let varA = "하이";
let varB = 0;
let varC = "";

let boolA = Boolean(varA);
let boolB = Boolean(varB);
let boolC = Boolean(varC);

console.log(boolA); // true
console.log(boolB); // false
console.log(boolC); // false
