//! movendo-se pelo DOM

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent); //Acessando o texto q contém no h1

//! selecionando por tag

const listItens = document.getElementsByTagName("li");

console.log(listItens);

//! selecionando elemento por ID

const title = document.getElementById("title");

console.log(title);

//! selecionando elemento por classe

const products = document.getElementsByClassName("product");

console.log(products);

//! selecionando os elementos por css

const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery);

const mainContainer = document.querySelectorAll("#main-container");

console.log(mainContainer);

//! insertBefore (inserindo elemento antes do outro)

const p = document.createElement("p");

console.log(p);

const header = title.parentElement;

console.log(header);

header.insertBefore(p, title);

// !appendChild (adicionando um elemento dentro do outro)

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

//! replaceChild (trocar um elemento)

const h2 = document.createElement("h2");

h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);

//! createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement
