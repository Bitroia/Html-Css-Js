// arrays

// const lista = [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Vitoria", true, 2, 5.76, []];

// console.log(itens);

// // mais sobre arrays

// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr[4]);

// //propriedades

// const numbers = [5, 4, 3];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Vitoria";

// console.log(myName.length);

// //metodos

// const otherNumbers = [1, 3, 4];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(text.indexOf("g"));

// //objetos

// const person = {
//   name: "Vitória",
//   age: 26,
//   job: "Programadora",
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// ///criando e deletando propriedades

// const car = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Tiguan",
//   km: 20000,
// };

// console.log(car);
// car.doors = 4;
// console.log(car);
// delete car.km;
// console.log(car);

// //mais sobre objetos

// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// //conhecendo melhor os objetos

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// //mutação

// const a = {
//   name: "Vitoria",
// };

// const b = a;

// console.log(a);
// console.log(b);
// console.log(a === b);

// a.age = 31;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// // loop em array

// const users = ["Maria", "João", "Pedro", "Miguel"];

// for (let i = 0; i < users.length; i++) {
//   console.log(`Listando o usuário: ${users[i]}`);
// }

// //push e pop

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// console.log(array.length);

// array.pop("d");

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "y");

// //shift e unshift

// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "q", "r");

// letters.unshift("z");

// //lastindexof e indexof

// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));
// console.log(myElements.indexOf("Mamão"));

// console.log(myElements.lastIndexOf("Mamão"));

// //slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4);

// console.log(testeSlice);
// console.log(subArray);

// const subArray2 = testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);

// console.log(subArray4);

// //foreach

// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//   console.log(`O número é ${numero}`);
// });

// const posts = [
//   { title: "Primeiro post", category: "PHP" },
//   { title: "Segundo post", category: "Javascript" },
//   { title: "Terceiro post", category: "Python" },
// ];

// posts.forEach((post) => {
//   console.log(`Exibindo post: ${post.title}, da categora: ${post.category}`);
// });

// //includes

// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("KIA"));

// if (brands.includes("BMW")) {
//   console.log("Há carros da marca BMW!");
// }

//reverse

// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();

// console.log(reverseTest);

//trim

// const trimTest = "  testando \n  ";

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// padstart

const testePadstart = "1";

const newNumber = testePadstart.padStart(4, "0");

console.log(testePadstart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

//slip

const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split("");

console.log(arrayDaFrase);

//join

const fraseDeNovo = arrayDaFrase.join("");
console.log(fraseDeNovo);
const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
const frasedeCompra = `Precisamos comprar: ${itensParaComprar.join(",")}.`

console.log(frasedeCompra);