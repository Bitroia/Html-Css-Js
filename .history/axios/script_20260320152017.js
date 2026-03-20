//! Instalação

console.log(axios);

//! primeiro request

const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(response);

    return response.data;
    

  } catch (error) {
    console.log(error);
  }
};

getData();

//! Imprimindo dados na tela

