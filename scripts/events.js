// for each type cometions/ talk/workshop

function show(contact) {
  $(contact)
    .removeClass("fade")
    .addClass("active")
    .siblings("li")
    .addClass("fade");
  $(
    "#thumb-" +
      $(contact)
        .data("filename")
        .replace(" ", "")
  )
    .addClass("active")
    .siblings("img")
    .removeClass("active");
}
function release(contact) {
  $(contact)
    .removeClass("active")
    .siblings()
    .removeClass("fade");
  $(".section.body .contacts img").removeClass("active");
}

// slider
AOS.init({
  duration: 800,
  easing: "slide",
  once: true
});

jQuery(document).ready(function($) {
  "use strict";

  var siteSliderRange = function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  };
  // siteSliderRange();

  var siteCarousel = function() {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        smartSpeed: 800,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">'
        ],
        responsive: {
          600: {
            margin: 0,
            nav: true,
            items: 2
          },
          1000: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3
          },
          1200: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 4
          }
        }
      });
    }

    if ($(".nonloop-block-14").length > 0) {
      $(".nonloop-block-14").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        smartSpeed: 800,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">'
        ],
        responsive: {
          600: {
            margin: 20,
            nav: true,
            items: 2
          },
          1000: {
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 3
          },
          1200: {
            margin: 30,
            stagePadding: 0,
            nav: true,
            items: 4
          }
        }
      });
    }

    $(".slide-one-item").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      pauseOnHover: false,
      nav: true,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">'
      ]
    });

    $(".slide-one-item-alt").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      pauseOnHover: true,
      onDragged: function(event) {
        console.log("event : ", event.relatedTarget["_drag"]["direction"]);
        if (event.relatedTarget["_drag"]["direction"] == "left") {
          $(".slide-one-item-alt-text").trigger("next.owl.carousel");
        } else {
          $(".slide-one-item-alt-text").trigger("prev.owl.carousel");
        }
      }
    });
    $(".slide-one-item-alt-text").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      pauseOnHover: true,
      onDragged: function(event) {
        console.log("event : ", event.relatedTarget["_drag"]["direction"]);
        if (event.relatedTarget["_drag"]["direction"] == "left") {
          $(".slide-one-item-alt").trigger("next.owl.carousel");
        } else {
          $(".slide-one-item-alt").trigger("prev.owl.carousel");
        }
      }
    });

    $(".custom-next").click(function(e) {
      e.preventDefault();
      $(".slide-one-item-alt").trigger("next.owl.carousel");
      $(".slide-one-item-alt-text").trigger("next.owl.carousel");
    });
    $(".custom-prev").click(function(e) {
      e.preventDefault();
      $(".slide-one-item-alt").trigger("prev.owl.carousel");
      $(".slide-one-item-alt-text").trigger("prev.owl.carousel");
    });
  };
  siteCarousel();
});
