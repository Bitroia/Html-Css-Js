// // métodos

// const animal = {
//   nome: "Bob",
//   latir: function () {
//     console.log("Au au");
//   },
// };

// console.log(animal.nome);
// animal.latir();

//aprodfundando em métodos

// const pessoa = {
//   nome: "Vitoria",
//   getNome: function () {
//     return this.nome;
//   },

//   setNome: function (novoNome) {
//     this.nome = novoNome;
//   },
// };

// console.log(pessoa.getNome());
// console.log(pessoa.nome);

// pessoa.setNome("Joaquim")

// console.log(pessoa.getNome())

//prototype

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr));

//mais sobrfe prototype

// const myObject = {
//   a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// //classes clássicas

// const cachorro = {
//   raca: null,
//   patas: 4,
// };

// const pastorAlemao = Object.create(cachorro);

// const bullDog = Object.create(cachorro);

// const galgo = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";
// galgo.raca = "Galgo";
// bullDog.raca = "bullDog";

// console.log(bullDog);

// console.log(galgo.patas);

// //função como classe - função construtora

// function criarCachorro(nome, raca) {
//   const cachorro = Object.create({});

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const bob = criarCachorro("Bob", "Vira lata");

// console.log(bob);

// const jack = criarCachorro("Jack", "Poodle");

// console.log(jack);

// console.log(Object.getPrototypeOf(jack));

// // funcoes como classe

// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const husky = new Cachorro("Ozzy", "Husky");

// console.log(husky);

// //metodos na funcao construtora

// Cachorro.prototype.uivar = function () {
//   console.log("Auuuu!");
// };
// console.log(Cachorro.prototype);

// husky.uivar();

// //classes es6

// class CachorroClasse {
//   constructor(nome, raca) {
//     ((this.nome = nome), (this.raca = raca));
//   }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

//mais sobre classes

// class Caminhao {
//   constructor(eixos, cor) {
//     ((this.eixos = eixos), (this.cor = cor));
//   }

//   descreverCaminhao() {
//     console.log(
//       `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`,
//     );
//   }
// }

// const scania = new Caminhao(6, "branco");

// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.motor = 4; //nao funciona

// const c2 = new Caminhao(4, "Preta");

// console.log(c2);

// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6,"azul")

// console.log(c3.motor)

//override

class Humano {
  constructor (nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

const vitoriaa = new Humano ("vitoria",26)
 
console.log(vitoriaa)

Humano.prototype.idade = "Não definida";

 
console.log(vitoriaa.idade)

 
console.log(vitoriaa)
