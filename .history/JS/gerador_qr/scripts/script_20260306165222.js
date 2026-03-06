//! Seleção
const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")

//!Eventos


function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;
    qrCodeBtn.innerText = "Gerando código"
}
qrCodeBtn.addEventListener("click", () =>{
    generateQrCode();
})