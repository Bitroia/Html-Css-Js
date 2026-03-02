//! movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent) //Acessando o texto q contém no h1

//! selecionando por tag

const listItens = document.getElementsByTagName("li")

console.log(listItens)

//! selecionando elemento por ID

const title 