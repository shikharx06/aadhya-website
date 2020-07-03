var myCenter = new google.maps.LatLng(13.0183642, 77.5078933);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter
  });

  marker.setMap(map);
}
google.maps.event.addDomListener(window, "load", initialize);

// instagram icon animation
var instagram = document.getElementById("instagram");
var insta_anim = bodymovin.loadAnimation({
  container: instagram,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../assets/icons/instagram.json"
});
instagram.addEventListener("mouseenter", function() {
  insta_anim.play();
});
instagram.addEventListener("mouseleave", function() {
  insta_anim.stop();
});

// facebook icon animation
var facebook = document.getElementById("facebook");
var fb_anim = bodymovin.loadAnimation({
  container: facebook,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "../assets/icons/facebook.json"
});
facebook.addEventListener("mouseenter", function() {
  fb_anim.play();
});
facebook.addEventListener("mouseleave", function() {
  fb_anim.stop();
});

// github icon animation
var github = document.getElementById("github");
var git_anim = bodymovin.loadAnimation({
  container: github,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "../assets/icons/github.json"
});
github.addEventListener("mouseenter", function() {
  git_anim.play();
});
github.addEventListener("mouseleave", function() {
  git_anim.stop();
});

// linkedin icon animation
var linkedin = document.getElementById("linkedin");
var linkedin_anim = bodymovin.loadAnimation({
  container: linkedin,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "../assets/icons/linkedin.json"
});
linkedin.addEventListener("mouseenter", function() {
  linkedin_anim.play();
});
linkedin.addEventListener("mouseleave", function() {
  linkedin_anim.stop();
});
// tilt
$(".data-tilt").tilt({
  scale: 0.9
});
