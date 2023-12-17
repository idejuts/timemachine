//reveal

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 10;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);




//animation

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const scrollingText = document.querySelector(".time-scroll");

  let animationFrameId;

  function updateAnimation() {
    const scrollPosition = window.scrollY;

    // Adjust these values for responsiveness
    const screenSizeFactor = window.innerWidth / 500; // Change the divisor based on your desired responsiveness
    const convergenceAmount = scrollPosition / (25* screenSizeFactor);

    scrollingText.style.transform = `translateX(${convergenceAmount}vw) translateY(-50%)`;
    scrollingText.style.opacity = 2 - scrollPosition / 105;

    // Request the next animation frame
    animationFrameId = requestAnimationFrame(updateAnimation);
  }

  // Start the animation
  updateAnimation();

  // Stop the animation when the page is hidden or closed
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      // Resume the animation when the page is visible again
      updateAnimation();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const scrollingText = document.querySelector(".achine-scroll");

  let animationFrameId;

  function updateAnimation() {
    const scrollPosition = window.scrollY;

    // Adjust these values for responsiveness
    const screenSizeFactor = window.innerWidth / 100; // Change the divisor based on your desired responsiveness
    const convergenceAmount = scrollPosition / (-5 * screenSizeFactor);

    scrollingText.style.transform = `translateX(${convergenceAmount}vw) translateY(-50%)`;
    scrollingText.style.opacity = 2 - scrollPosition / 105;

    // Request the next animation frame
    animationFrameId = requestAnimationFrame(updateAnimation);
  }

  // Start the animation
  updateAnimation();

  // Stop the animation when the page is hidden or closed
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      // Resume the animation when the page is visible again
      updateAnimation();
    }
  });
});



//logo color change

const logo = document.querySelector('.logo');
let scrollingStarted = false;

window.addEventListener('scroll', () => {
  if (!scrollingStarted) {
    scrollingStarted = true;

    // Set initial color and hue values
    logo.style.setProperty('--initial-hue', '180deg');
    logo.style.setProperty('--initial-color', '#13070c');
  }

  if (scrollingStarted) {
    // Adjust these values for the desired effect
    const hueSpeed = 15; // Controls how fast the hue changes
    const saturationSpeed = 15; // Controls the saturation (constant in this example)

    const hue = (window.scrollY || window.scrollY) / hueSpeed;
    const saturation = (window.scrollY || window.scrollY) / saturationSpeed;

    // Use HSL color model for continuous hue change with red tones
    const hslColor = `hsl(${(hue) % 360}, 30%, 30%)`;

    logo.style.color = hslColor;
    logo.style.borderColor = hslColor;
  }
});


