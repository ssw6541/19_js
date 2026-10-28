// let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one, two, three); // 1 2 3

// let arr = [1, 2, 3];
// let [one, two, three] = arr;

// console.log(one, two, three); // 1 2 3

// let arr = [1, 2];
// let [one, two, three] = arr;

// console.log(one, two, three); // 1 2 undefiend

// let person = {
//   name: "이정환",
//   age: 25,
//   location: "경기도",
// };

// let { name, age, location } = person;

// console.log(name, age, location);

// // 이정환 25 경기도

function func({ name, age, location }) {
  console.log(name, age, location);
}

let person = {
  name: "이정환",
  age: 25,
  location: "경기도",
};

func(person);

// 이정환 25 경기도
