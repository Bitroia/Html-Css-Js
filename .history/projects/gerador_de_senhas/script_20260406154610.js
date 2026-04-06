//! Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-pass");
const generatedPasswordElement = document.querySelector("#generated-pass");
const OpenCloseGeneratorButton = document.querySelector("#open-generate-pass");
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

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
  const passwordLength = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getSymbol,
    getNumber,
  ];

  for (let i = 0; i < passwordLength; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();
      password += randomValue;
    });
  }
  //Retirando 2 caracteres da string (foram gerados 12 devido incremento, preciso de 10)

  password = password.slice(0, passwordLength);

  //Passando a senha gerada para o h4 da page
  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};
//! Eventos

generatePasswordButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
})

// generatePasswordButton.addEventListener("click", () => {
//   generatePassword(
//     getLetterLowerCase,
//     getLetterUpperCase,
//     getNumber,
//     getSymbol,
//   );
// });

OpenCloseGeneratorButton.addEventListener("click", () => {
  
});
