var images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];
var index = 0;

var image = document.getElementById("image");
image.src = images[0];

const nextSlide = (n) => {
  if (n == "next") {
    index++;
  } else {
    index--;
  }

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  image.src = images[index];
};
