// let arrA = [1, 2, 3];
// let arrB = [...arrA, 4, 5, 6];

// console.log(arrB); // [1, 2, 3, 4, 5, 6]

// let objA = {
//   a: 1,
//   b: 2,
// };

// let objB = {
//   ...objA,
//   c: 3,
//   d: 4,
// };

// console.log(objB); // {a: 1, b: 2, c: 3, d: 4}

// 스프레드 연산자와 함수

// function func(a, b, c) {
//   console.log(a, b, c);
// }

// let arr = [1, 2, 3];
// func(...arr);

// rest 매개변수

// function func(...rest) {
//   console.log(rest);
// }

// func(1, 2, 3, 4, 5);    //배열 형태로 받기에 몇개를 넣어도 출력함

function func(param, b, ...imsi) {
  console.log(param);
  console.log(b);
  console.log(imsi);
}

func(1, 2, 3, 4);
