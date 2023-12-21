//bg move

$(document).ready(function () {
    // Function to update background pattern based on scroll position
    function updateBackgroundPattern() {
      // Calculate scroll percentage
      var scrollPercentage = $(window).scrollTop() / ($(document).height() - $(window).height());
  
      // Update background properties dynamically based on scroll position
      var gradientPosition = 620 + scrollPercentage * 890; // Adjust as needed
      var linearGradientPosition = 121.4 + scrollPercentage * 1113.5; // Adjust as needed
  
      // Update CSS properties
      $('.background, .background2, .background3').css({
        'background-position': `17.5px ${gradientPosition}px, 17.5px ${gradientPosition}px, 0 -${linearGradientPosition}px, -${linearGradientPosition}px 0`,
      });
    }
  
    // Attach scroll event listener
    $(window).scroll(updateBackgroundPattern);
  
    // Initial update on page load
    updateBackgroundPattern();
  });
  


//clock

function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 1000);
  }


  //gallery

  const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const scrollbarThumb = document.querySelector('.thumb');
const slideCount = slides.length;
const slideHeight = 720;
const marginTop = 16;

const scrollThumb = () => {
  const index = Math.floor(slideGallery.scrollTop / slideHeight);
  scrollbarThumb.style.height = `${((index + 1) / slideCount) * slideHeight}px`;
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  slideGallery.scrollTo(0, index * slideHeight + marginTop);
};

document.querySelector('.thumbnails').innerHTML += [...slides]
  .map(
    (slide, i) => `<img src="${slide.querySelector('img').src}" data-id="${i}">`
  )
  .join('');

document.querySelectorAll('.thumbnails img').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => scrollThumb());

scrollThumb();