//! Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-pass");
const generatedPasswordElement = document.querySelector("#generated-pass");
const OpenCloseGeneratorButton = document.querySelector("#open-genera")

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

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getSymbol,
  getNumber,
) => {
  let password = "";
  const passwordLengh = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  for (i = 0; i < passwordLengh; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    });
  }
  //Retirando 2 caracteres da string (foram gerados 12 devido incremento, preciso de 10)

  password = password.slice(0, passwordLengh);

  //Passando a senha gerada para o h4 da page
  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};
//! Eventos

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  );
});
