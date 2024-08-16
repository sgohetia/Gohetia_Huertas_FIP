console.log("connected!"); // This mean that our JS is linked.

// This is for the image slider
const slider = document.querySelector("#image-slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let slideWidth = slider.clientWidth;
let currentIndex = 0;
//By using a negative value, the slides are translated to the left
function showSlide(index) {
  const newTransformValue = -index * slideWidth + "px";
  //The -index is used to calculate the position of the slide in the opposite direction.
  // For example, if index is 1, then -index becomes -1, which means moving one slide width to the left.
  // If index is 2, then -index becomes -2, which means moving two slide widths to the left.
  console.log(newTransformValue);
  slider.style.transform = "translateX(" + newTransformValue + ")";
}

function nextSlide() {
  console.log(currentIndex);
  currentIndex++;
  //if count is greater than or equal to number of slides restart
  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  // if count is less than 0 go to last slide
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }
  showSlide(currentIndex);
}

function updateSlideWidth() {
  slideWidth = slider.clientWidth;
  showSlide(currentIndex); // Adjust the position of the current slide on resize
}

// Attach click event handlers to buttons using event listeners
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

window.addEventListener("resize", updateSlideWidth);

// Call updateSlideWidth initially to set the correct initial slide width
updateSlideWidth();
