//! adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui!");
});

//! removendo evento

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () =>{
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

//! argumento do evento

const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
     console.log(event)
     console.log(event.srcElement)
     console.log(event.offsetX)
     console.log(event.pointerType)
     console.log(event.)
})