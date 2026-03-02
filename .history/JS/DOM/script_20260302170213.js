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

const mainContainer = document.querySelector("#main-container");

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

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

//! Trabalhando com atributos

const firstLink = navLinks.querySelector("a")

console.log(firstLink)

firstLink.setAttribute("href", "https://www.google.com")

console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

//! Altura e largura

const footer = document.querySelector("footer")

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientHeight)
console.log(footer.clientWidth)

//! posição do elemento

const product1 = products[0]

console.log(product1.getBoundingClientRect())

//! css com js

mainContainer.style.color = "red"
mainContainer.style.background-color = "blue"