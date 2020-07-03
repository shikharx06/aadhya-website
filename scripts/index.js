// aadhya logo animation template
var logo_animation = bodymovin.loadAnimation({
  container: document.getElementById("logo"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "assets/LogonSound/logo.json"
});

// sound button animation template
var speaker_anim = bodymovin.loadAnimation({
  container: document.getElementById("audio-btn"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/icons/speaker.json",
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet"
  }
});

//LOADER animation and loader remove
$("body").append('<div id="loader" ><div id="loadingDiv"></div></div>');
$(window).on("load", function() {
  setTimeout(showPage, 3000); //wait for page load PLUS two seconds.
});

//show main page
function showPage() {
  // $("loadingDiv").fadeOut();
  // $("myDiv").fadeIn();
  document.getElementById("myDiv").style.display = "block";
  //remove loader
  $("#loadingDiv").remove();
  //play speaker icon animation on load
  speaker_anim.play();
}

//loader animation template.
var animation = bodymovin.loadAnimation({
  container: document.getElementById("loadingDiv"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/data.json"
});

// SOUND MUTE BUTTON AND IT's complementing LOGO ANIMATION.
var speakerdirection = 1;

function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  myAudio.play();

  //check if audio is muted or not
  if (myAudio.muted === true) {
    //change direction of animation flow and play
    speakerdirection = -speakerdirection;
    speaker_anim.setDirection(speakerdirection);
    speaker_anim.play();

    //unmute audio
    myAudio.muted = !myAudio.muted;
    //play aadhya beating animation
    logo_animation.play();
  } else {
    //change direction of animation flow and play
    speakerdirection = -speakerdirection;
    speaker_anim.setDirection(speakerdirection);
    speaker_anim.play();
    //pause addhya animation
    logo_animation.pause();
    //unmute audio
    myAudio.muted = !myAudio.muted;
  }
}
//sound button animation

//cursor parallax
$(".data-tilt").tilt({
  //enter and edit properties to change 3D effect. -- source tilt.js
});

// NAVBAR ONCLICK BLUE
$(document).ready(function() {
  $(".nav-link").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});
//nav animation
var hamburger_bun = document.getElementById("hamburger");
var burger_veggie = bodymovin.loadAnimation({
  container: hamburger_bun,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/icons/burger.json"
});
var directionMenu = 1;
hamburger_bun.addEventListener("click", e => {
  burger_veggie.setDirection(directionMenu);
  burger_veggie.play();
  directionMenu = -directionMenu;
});
