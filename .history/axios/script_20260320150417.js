//! Instalação

console.log(axios);

//! primeiro request

const getData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.");
  } catch (error) {
    console.log(error);
  }
};
