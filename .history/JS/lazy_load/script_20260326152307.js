const images = document.querySelectorAll(".image-container img");

const observer

images.forEach((image) => {
  image.scr = image.src.replace("&w=10", "&w=1000");
});
