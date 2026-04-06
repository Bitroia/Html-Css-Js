//! Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-pass");
const generatedPasswordButton = document.querySelector("#generated-pass");

//! Funções
//Letras, números e símbolos
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

console.log(ge());
//! Eventos

generatePasswordButton.addEventListener("click", () => {
  
});
