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

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "()[]{}=<>/,.!@#$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase,getLetterUpperCase,getSymbol,getNumber) => {
    let password = """
    
}
console.log(getSymbol());
//! Eventos

generatePasswordButton.addEventListener("click", () => {});
