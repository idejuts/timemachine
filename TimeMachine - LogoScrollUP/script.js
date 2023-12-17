document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const scrollingText = document.querySelector(".time-scroll");

  let animationFrameId;

  function updateAnimation() {
    const scrollPosition = window.scrollY;
    const convergenceAmount = scrollPosition / 5;

    scrollingText.style.transform = `translateX(${convergenceAmount}px) translateY(-50%)`;
    scrollingText.style.opacity = 2 - scrollPosition / 70;

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
    const convergenceAmount = scrollPosition / -5;

    scrollingText.style.transform = `translateX(${convergenceAmount}px) translateY(-50%)`;
    scrollingText.style.opacity = 2 - scrollPosition / 70;

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
    logo.style.setProperty('--initial-hue', '0deg');
    logo.style.setProperty('--initial-color', '#eb871e');
  }

  if (scrollingStarted) {
    // Adjust these values for the desired effect
    const hueSpeed = 5; // Controls how fast the hue changes
    const saturationSpeed = 5; // Controls the saturation (constant in this example)

    const hue = (window.scrollY || window.scrollY) / hueSpeed;
    const saturation = (window.scrollY || window.scrollY) / saturationSpeed;

    // Use HSL color model for continuous hue change with red tones
    const hslColor = `hsl(${(hue) % 30}, 100%, 30%)`;

    logo.style.color = hslColor;
    logo.style.borderColor = hslColor;
  }
});


