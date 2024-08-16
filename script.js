// function test() {
//   console.log(arguments.length);
//   [...arguments].forEach((arg) => {
//     console.log(arg);
//   });
// }

// test("asd", 123, true, { name: "Gani" });

// const user = {
//   name: "Gani",
//   getName() {
//     console.log(this.name);
//   },
// };

// user.getName();

// function test(mes) {
//   console.log(this);
//   console.log(` ${mes}  ${this.name || "Empty value"}`);
// }

// const user = {
//   name: "Gani",
// };
// let message = ["Hello"];

// test(...message);

// test.apply(user, message);
// test.call(user, ...message);

// const res = test.bind(user, message);

// res();

// function toDoUrl(serverFunc) {
//   return serverFunc.bind(
//     undefined,
//     "https://jsonplaceholder.typicode.com/todos"
//   );
// }

// const customFetch = (url) => {
//   fetch(url)
//     .then((res) => {
//       res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     });
// };

// const showTodo = toDoUrl(customFetch);

// showTodo();

// function plusOne(numbers) {
//   return numbers + 1;
// }
// function isEven(numbers) {
//   return numbers % 2 == 0;
// }

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(isEven));
// console.log([1, 2, 3, 4].map(plusOne));

// function testReduce(sum, el) {
//   return (sum += el);
// }

// console.log([1, 2, 3, 4, 5].reduce(testReduce));
// let arr = [1, 2, 3, 4, 5];

// const logger = (func) => {
//   return function () {
//     const res = func(...arguments);
//     console.log(res);
//     return res;
//     // return func(...arguments);
//   };
// };

// const test = () => "gani";

// const testLog = logger(test);

// testLog();
