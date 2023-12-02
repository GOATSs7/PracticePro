const images = [
  "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
  "https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff",
  "https://thumbs.dreamstime.com/z/random-click-squirrel-wire-random-picture-cute-squirrel-219506797.jpg",
];

let currentImageIndex = 0;
const imageList = document.querySelector(".image-list");

function showImage(index) {
  imageList.style.transform = `translateX(-${index * 100}%)`;
}

function loadImages() {
  images.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("slider-image"); // Add a class if needed for styling
    imageList.appendChild(img);
  });
}

document.querySelector(".prev-button").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

document.querySelector(".next-button").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

// Load initial image
loadImages();
showImage(currentImageIndex);
