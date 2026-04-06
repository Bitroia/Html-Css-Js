//! Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-pass");
const generatedPasswordButton = document.querySelector("#generated-pass");

//! Funções
//Letras, números e símbolos
const getLetterLowerCase = () => {
  console.log(String.fromCharCode(Math.floor(Math.random() * 26)));
};

//! Eventos

generatePasswordButton.addEventListener("click", () => {
  console.log("teste");
});
