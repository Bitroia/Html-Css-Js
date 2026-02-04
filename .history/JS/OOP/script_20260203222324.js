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

const pessoa = {
  nome: "Vitoria",
  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.getNome());
console.log(pessoa.nome);

pessoa.setNome