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

const categories = Array.from(
  document
    .getElementById("shuffle-menu")
    .getElementsByClassName("shuffle-category")
);

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

      seeMore();
    });
  });
}

filterCategories();

/* End Portfolio filtering */

/* Start see more functionality */

const seeMoreButton = document.getElementById("see-more");

function seeMore() {
  // initial items before showing more
  // starting index
  let currentItem = 8;
  let currentItemReferenced = 8;

  categories.forEach((category) => {
    // checking which category is selected
    if (category.classList.contains("active")) {
      // getting the items in the category
      let imgs = [
        ...document.querySelectorAll(`.${category.dataset.category}`),
      ];

      // see if we need to show the see more button
      // limiting the initial shown items to 8
      if (imgs.length > currentItem) {
        for (let i = currentItem; i < imgs.length; i++) {
          imgs[i].style.display = "none";
        }
        seeMoreButton.style.display = "block";
      } else {
        seeMoreButton.style.display = "none";
      }

      // handle the click on the see more button
      if (seeMoreButton.style.display !== "none") {
        seeMoreButton.addEventListener("click", (e) => {
          // adding 4 by 4 if exist
          for (let i = currentItem; i < currentItem + 4; i++) {
            if (imgs[i]) {
              imgs[i].style.display = "block";
              currentItemReferenced++;
            } else {
              break;
            }
          }

          // where the items index stopped
          currentItem = currentItemReferenced;

          // hide the see more button if all images are shown
          if (currentItem >= imgs.length) {
            seeMoreButton.style.display = "none";
          }
        });
      }
    }
  });
}

seeMore();

/* End see more functionality */

/* --------------------------------------------------------------- */
