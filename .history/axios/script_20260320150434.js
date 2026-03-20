//! Instalação

console.log(axios);

//! primeiro request

const getData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.log(error);
  }
};
