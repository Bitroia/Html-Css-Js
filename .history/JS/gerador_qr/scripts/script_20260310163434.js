//! Seleção
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg =document.querySelector("#qr-code img")

//! Gerar QR Code

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;
  qrCodeBtn.innerText = "Gerando código"; //mudando o texto
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}` // relacionando a string de API ao QR
  container.classList.add("active") //alterando a situação do qrcode pra ativo no layout
    qrCodeBtn.innerText = "Código criado!";  //mudando o texto
}
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if(e.code === "Enter")
  generateQrCode();
});

//! Limpar a área do QR Code

qrCodeInput.addEventListener("keyup", () => {
  if(!qrCodeInput.value){
    
  }
})
