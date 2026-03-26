const images = document.querySelectorAll(".image-container img")

images.forEach((image) => {
    image.scr = replace("&w=10", "&w=1000")
})