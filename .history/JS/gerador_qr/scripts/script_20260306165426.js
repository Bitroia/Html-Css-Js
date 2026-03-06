//! Seleção
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");

//!Eventos

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;
  qrCodeBtn.innerText = "Gerando código";
  QRCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr}`
}
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});
