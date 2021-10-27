var responsiveSlider = function() {
  var slider = document.querySelector(".wow");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.querySelector(".wow ul");
  var count = 1;
  var items = slideList.querySelectorAll(".wow li").length;
  var prev = document.querySelector(".wow #prev");
  var next = document.querySelector(".wow #next");
  var slider2 = document.querySelector(".wow2");
  var sliderWidth2 = slider2.offsetWidth;
  var slideList2 = document.querySelector(".wow2 ul");
  var count2 = 1;
  var items2 = slideList2.querySelectorAll(".wow2 li").length;
  var prev2 = document.querySelector(".wow2 #prev2");
  var next2 = document.querySelector(".wow2 #next2");
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
    sliderWidth2 = slider2.offsetWidth;
    
  });
  
  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count == 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };
  var prevSlide2 = function() {
    if(count2 > 1) {
      count2 = count2 - 2;
      slideList2.style.left = "-" + count2 * sliderWidth2 + "px";
      count2++;
    }
    else if(count2 == 1) {
      count2 = items2 - 1;
      slideList2.style.left = "-" + count2 * sliderWidth2 + "px";
      count2++;
    }
    };

    
  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
    var nextSlide2 = function() {
      if(count2 < items2) {
        slideList2.style.left = "-" + count2 * sliderWidth2 + "px";
        count2++;
      }
      else if(count2 = items2) {
        slideList2.style.left = "0px";
        count2 = 1;
      }
    };
    
  
  next.addEventListener("click", function() {
    nextSlide();
  });

  next2.addEventListener("click", function() {
    nextSlide2();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  prev2.addEventListener("click", function() {
    prevSlide2();
  });

  
  setInterval(function() {
    nextSlide()
  }, 4000);
  
  setInterval(function() {
    nextSlide2()
  }, 4000);

  };
  
  window.onload = function() {
  responsiveSlider();
  }