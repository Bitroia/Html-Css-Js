/*// variaveis

let nome = "Vitoria";

console.log(nome);

nome = "Vitoria Cardozo"

console.log(nome);

const idade = 26;

console.log(idade);

//idade = 33; //da erro pq a idade é const

console.log(typeof nome);
console.log(typeof idade);

//variaveis inválidas 

//let 2teste = "invalido"
//let @teste = "invalido"


let a = 10,
b = 20, c = 30;

console.log(a,b,c);


const nomecompleto = "Vitória Cardozo"

const nomeCompleto = "João da Silva"

console.log(nomecompleto)
console.log(nomeCompleto)

//simbolos permitidos para criar variaveis
// 
let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste)

// prompt

const age = prompt("Digite a sua idade")

console.log(`Você tem ${age} anos.`);

//alert  

alert("Testando");

const numero = 6;

alert(`O número é ${numero}.`);

//math 

console.log(Math.max (4,3,1,8,2));

console.log(Math.floor (5.23));

console.log(Math.ceil (5.23));



//console

console.log("Teste!");
console.error("erro!");
console.warn("aviso!");


//if

const m = 10;

if (m > 5) {
  console.log("M é maior que 5!");
}

const user = "João";

if (user === "João") {
  console.log("Olá, João!");
}

if (user === "Maria") {
  console.log("Olá, Maria!");
}

console.log(user === "João", user === "Maria");

//else

const loggedIn = false;

if (loggedIn) {
  console.log("Está autenticado!");
} else {
  console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20){
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos!");
}

//else if 

if (1 >2){
    console.log("Teste");
} else if (2 > 3){
  console.log("teste 2");
} else if (5 > 1){
  console.log("Agora sim");
}

const userName = "Matheus"
const userAge = 31

if(userName === "José"){
  console.log("Bem vindo, José!");
} else if (userName === "Matheus" && userAge === 31) {
  console.log(`Olá ${userName}, você tem ${userAge} anos!`);
}
else {
  console.log("Nenhuma condição aceita!");
}

//while

let p = 0;

while(p<5){
  console.log(`Repetindo${p}`);
  p = p + 1;
}  

//loop infinito

let x=10

while(x>5){
console.log(`Repetindo`);
}



//do while

let o =10;

do{
  console.log(`Valor de o: ${o}`);
  o--;
} while(o > 1);
*/
//for

for (let t = 0; t < 10; t++)
{
  console.log("Repetindo algo...")
}

let r = 10;

for(r;r > 0; r= r-1){
 console.log(`O r está diminuindo: ${r}`);
}

//identação

for (let u = 0; u <10; u++){
  if(u*2>10){
    console.log(`Maior que 10! ${u}`);
  } else {
    
  }
}