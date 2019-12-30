$(document).ready(function() {
  $(".smooth").smoothScroll();
  if ($(window).width() <= 480) {
    document.getElementById("shuffle").removeAttribute("data-aos");
  }

  var capsule = $(".faq-item").length;
  var i = 0;
  var delayCounter = 0;
  while (i < capsule) {
    document
      .getElementsByClassName("faq-item")
      [i].setAttribute("data-aos-delay", delayCounter);
    i++;
    if (i % 2 == 0 && $(window).width() >= 700) {
      delayCounter = 0;
    }
    if ($(window).width() <= 700) {
      delayCounter = 0;
    }
    delayCounter = delayCounter + 150;
  }

  var capsule2 = $(".rep-block").length;
  var ii = 0;
  var delayCounter2 = 250;
  /*if (ii % 2 == 0 && $(window).width() >= 750) {
        delayCounter2 = 0;
        console.log('memememememe');
      }*/
  if ($(window).width() <= 750) {
    delayCounter2 = 0;
    while (ii < capsule2) {
      document
        .getElementsByClassName("rep-block")
        [ii].setAttribute("data-aos-delay", delayCounter2);
      ii++;
    }
  }
});
