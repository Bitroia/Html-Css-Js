const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(!entr)
    })
})

images.forEach((image) => {
  image.scr = image.src.replace("&w=10", "&w=1000");
});
