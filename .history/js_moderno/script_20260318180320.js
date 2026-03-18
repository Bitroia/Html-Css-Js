//! var, let e const

// var x = 10;
// var y = 15;

// if (y > 10) {
//   var x = 5;
//   console.log(x);
// }

// console.log(x);

// let a = 10;
// let b = 15;

// if (b > 10) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// function logName() {
//   const name = "Vitoria";
// }

// logName();
// console.log(name);

//! arrow function

// const sum = function (a, b) {
//   return a + b;
// };

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));

// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//   if (name) {
//     return `Hello ${name}!`;
//   } else {
//     return "Hello";
//   }
// };

// console.log(greeting("Vitoria"));
// console.log(greeting());

// const user = {
//   name: "Theo",
//   sayUserName() {
//     setTimeout(function () {
//       console.log(this);
//       console.log(`Username: ${this.name}`);
//     }, 1000);
//   },
//   sayUserNameArrow() {
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Username: ${this.name}`);
//     }, 2000);
//   },
// };

// user.sayUserName();
// user.sayUserNameArrow();

//! filter

const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumbers);

const users = [
  { name: "João", available: true },
  { name: "Maria", available: false },
  { name: "Matheus", available: true },
  { name: "Josias", available: false },
  { name: "Kleber", available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

//! map

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira", price: 150, category: "Eletro" },
  { name: "Fogão", price: 499, category: "Eletro" },
  { name: "Calça", price: 87.99, category: "Roupas" },
];

products.map((product) => {
  if (products.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

//! destructuring

const fruits = ["maçã", "mamão", "laranja"];

const [f1, f2, f3] = fruits;

console.log(f1, f3);

const productsDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periferico",
  color: "cinza",
};

const { name: productName, price, category, color } = productsDetails;

console.log(
  `O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`,
);

//! spread operator

const a1 = [1, 2, 3];

const a2 = [4, 5, 6];

const a3 = [...a1,...a2];

console.log(a3)


const a4 = [0, ...a3,7]

console.log(a4)

const carName