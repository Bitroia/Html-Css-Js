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

const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

//classes clássicas

const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

const bullDog = Object.create(cachorro);

const galgo = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";
galgo.raca = "Galgo";
bullDog.raca = "bullDog";

console.log(bullDog);

console.log(galgo.patas);

//função como classe - função construtora

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// funcoes como classe

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky)

//metodos na funcao construtora

Cachorro.prototype.uivar = function(){
  console.log("Auuuu!")
}

husky.uivar{}
