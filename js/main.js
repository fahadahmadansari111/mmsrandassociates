// Initialize and adds the map
function initMap() {
  // Random location for fictitious business
  const loc = {
    lat: 26.930267,
    lng: 81.1905524
  }
  // Centers map onto location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  // The marker is positioned at location
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  })
}

// Opacity scroll effect
$(window).on("scroll", function () {
  if (window.scrollY > 810) {
    $("#navbar").css("opacity", "0.9");
  } else {
    $("#navbar").css("opacity", "1");
  }
});

// Smooth Scrolling

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 65
    }, 800);
  }
});