// NAVBAR ONCLICK BLUE
$(document).ready(function() {
  $(".nav-link").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//hamburger animation
var directionMenu = 1;
var hamburger = document.getElementById("hamburger");
var burger_patty = bodymovin.loadAnimation({
  container: hamburger,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../assets/icons/burger.json"
});
hamburger.addEventListener("click", e => {
  burger_patty.setDirection(directionMenu);
  burger_patty.play();
  directionMenu = -directionMenu;
});
