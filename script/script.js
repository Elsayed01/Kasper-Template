/* Adding Image Slider functionality to the design */

/* Start Image Slider */

const images = document
  .getElementById("landing")
  .getElementsByClassName("background");

const imagesArray = Array.from(images);

const arrowRight = document.querySelector(".arrow.right");
const arrowLeft = document.querySelector(".arrow.left");

const bullets = document
  .getElementById("landing-bullets")
  .getElementsByClassName("bullet");

const bulletsArray = Array.from(bullets);

// Current Slide to control the view of the backgrounds
let currentSlide = 2;

// handle arrows clicks

arrowLeft.onclick = goToPervious;
arrowRight.onclick = goToNext;

// Change Background functions

function goToPervious() {
  if (arrowLeft.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}

function goToNext() {
  if (arrowRight.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}

function checker() {
  // Check on the arrows function

  function checkingArrows() {
    if (currentSlide == 1) {
      arrowLeft.classList.add("disabled");
    } else {
      arrowLeft.classList.remove("disabled");
    }

    if (currentSlide == imagesArray.length) {
      arrowRight.classList.add("disabled");
    } else {
      arrowRight.classList.remove("disabled");
    }
  }

  checkingArrows();

  // Check on the bullets function

  function checkingBullets() {
    bulletsArray.forEach((bullet) => {
      bullet.classList.remove("active");
    });

    bulletsArray[currentSlide - 1].classList.add("active");
  }

  checkingBullets();

  // Check on the backgrounds function

  function checkingBackgrounds() {
    imagesArray.forEach((img) => {
      img.classList.remove("active");
    });

    imagesArray[currentSlide - 1].classList.add("active");
  }

  checkingBackgrounds();
}

/* End Image Slider */

/* --------------------------------------------------------------- */

/* Adding portfolio filtering functionality to the design */

/* Start Portfolio filtering */

const categories = document.querySelectorAll(".shuffle-menu li");

const imgs = document
  .getElementById("imgs-container")
  .getElementsByClassName("img-container");

const imgsArray = Array.from(imgs);

// handling the click on categories

function filterCategories() {
  categories.forEach((cat) => {
    cat.addEventListener("click", (e) => {
      categories.forEach((cat) => {
        cat.classList.remove("active");
      });

      e.target.classList.add("active");

      imgsArray.forEach((img) => {
        img.style.display = "none";
      });

      let filteredImages = Array.from(
        document.getElementsByClassName(e.target.dataset.category)
      );

      filteredImages.forEach((img) => {
        img.style.display = "block";
      });
    });
  });
}

filterCategories();

/* End Portfolio filtering */

/* --------------------------------------------------------------- */
