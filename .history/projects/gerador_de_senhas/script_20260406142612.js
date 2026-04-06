//! Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-pass");
const generatedPasswordButton = document.querySelector("#generated-pass");

//! Funções
//Letras, números e símbolos
const getLetterLowerCase = () => {
  return(String.fromCharCode(Math.floor(Math.random() * 26)+ 97));
};

const getLetterUpperCase = () => {
  console.log(String.fromCharCode(Math.floor(Math.random() * 26)+ 65));
};

//! Eventos

generatePasswordButton.addEventListener("click", () => {
  getLetterLowerCase()
});
