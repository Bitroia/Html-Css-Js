// //setTimeout

// console.log("Ainda não executou");

// setTimeout(function () {
//   console.log("Requisição assíncrona");
// });

// console.log("Ainda não executou 2");

// //setInterval

// console.log("Ainda não executou");

// // setInterval(function () {
// //   console.log("Intervalo assíncrono");
// // }, 3000);

// console.log("Ainda não executou");

//Promisses

// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Outro código");

//falha na promisse

Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos");
    }
  })

  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

//rejeição

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O numero é maior que 10`);
    } else {
      reject(new Error("N[umero"))
    }
  });
}
