(() => {
  console.log("connected!"); // This mean that our JS is linked.
  //This script here is to control the behavior of Sticky header when scrolling.
  const header = document.querySelector("header");
  //This function here is to add the sticky class to the header element when the user scrolls down the page
  //and the vertical position exceeds 80px.
  window.addEventListener("scroll", function () {
    //Using addEventListener to the window object that listen for the scroll event.
    header.classList.toggle("sticky", window.scrollY > 80); //This function will be executed whenever users scroll the page.
  });

  //This script here is to control the behavior of Burger Menu Icon and the Nav list when changing screen orientation.
  let menuIcon = document.querySelector("#menu-icon");
  let navList = document.querySelector(".navlist");
  //This script here is to toggle open and close the Burger Menu Icon in Mobile orientation.
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
  };
  //This script here is to automatically close the menu when the browser scrolls.
  window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
  };

  //This script here is to control the behavior and add some rule of the page content upon scrolling or page reloading.
  //It will creates a ScrollReveal animations that make elements appear to come from the top, moving 85px over 2.5 seconds.
  const sr = ScrollReveal({
    origin: "top",
    distance: "85px",
    duration: 2500,
    reset: true,
  });
  //This script is for the Header content to have some drop animation when reload or scrolled in.
  sr.reveal(".home-text", { delay: 300 });
  sr.reveal(".home-img", { delay: 400 });
  sr.reveal(".container", { delay: 400 });
  sr.reveal(".about-img", {});
  sr.reveal(".about-text", { delay: 300 });
  sr.reveal(".middle-text", {});
  sr.reveal(".row-btn, .shop-content", { delay: 300 });
  sr.reveal(".body-shop, .row-btn", { delay: 300 });
  sr.reveal(".review-content, .contact", { delay: 300 });
  sr.reveal(".img-slider, .messageUs", { delay: 300 });

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
})();
