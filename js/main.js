var device = null;

function changeNavbarOpaciy(scrollOpacity) {
  color = `background-color: rgba(53, 54, 55, ${scrollOpacity})
           !important;`;
  document.querySelector(".navbar").style.cssText = color;
}

function navbarOpacity() {

  if (device == 2) {
    const curScroll = document.body.getBoundingClientRect().top;
    if (curScroll > -20) {scrollOpacity = 0}
    else {scrollOpacity = 1}
  }
  else {scrollOpacity = 1}

  changeNavbarOpaciy(scrollOpacity)
}

function checkPosition() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    $("#header").removeClass("sticky-top");
    $("#header").addClass("fixed-top");
    device = 1;
    navbarOpacity();
    $(window).unbind("scroll");
  }
  else {
    $("#header").removeClass("fixed-top");
    $("#header").addClass("sticky-top");
    device = 2;
    navbarOpacity();
    $(window).bind("scroll", navbarOpacity);
  }
}

function changeGalleryButton(event) {
  $(".portfolio-menu .btn").removeClass("active");
  event.target.classList.add("active");
}

function toggleNavbar(event) {
  if (device == 1) {$(event.delegateTarget).collapse('toggle')}
}

function carouselSet() {
  $("#carousel").carousel({
    interval: 8000,
    ride: true
  })
}

function init() {
  checkPosition();
  carouselSet();
  $(window).bind("resize", checkPosition);
  $(".portfolio-menu .btn").bind("click", changeGalleryButton);
  $('.navbar-collapse').on('click', 'a', toggleNavbar);
}

$(document).ready(init)
