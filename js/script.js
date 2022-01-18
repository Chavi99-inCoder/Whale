/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$(document).on("pagecreate", "#map-page", function () {
  var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434); // Default to Hollywood, CA when no geolocation support
  if (navigator.geolocation) {
    function success(pos) {
      // Location found, show map with these coordinates
      drawMap(
        new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
      );
    }
    function fail(error) {
      drawMap(defaultLatLng); // Failed to find location, show default map
    } // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
    navigator.geolocation.getCurrentPosition(success, fail, {
      maximumAge: 500000,
      enableHighAccuracy: true,
      timeout: 6000,
    });
  } else {
    drawMap(defaultLatLng); // No geolocation support, show default map
  }
  function drawMap(latlng) {
    var myOptions = {
      zoom: 10,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(
      document.getElementById("map-canvas"),
      myOptions
    ); // Add an overlay to the map of current lat/lng
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: "Greetings!",
    });
  }
});

function sendEmailValidation() {
  var data = document.getElementsByName("sendemailid")[0].value;
  var vali = validateEmail(data);

  if (vali) {
    document.getElementById("btnsendemail").style.display = "block";
    document.getElementById("emailertext").style.display = "none";
  } else {
    document.getElementById("btnsendemail").style.display = "none";
    document.getElementById("emailertext").style.display = "block";
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function locationvalidate() {
  var location = document.getElementsByName("loc")[0].value;
  var desination = document.getElementsByName("dec")[0].value;

  if (
    location == null ||
    location == "" ||
    desination == null ||
    desination == ""
  ) {
    window.location.href = "#errorpopup";
  } else {
    window.location.href = "#checkAvailabilty";
  }

  document.getElementById("downtowntoberlin").style.display = "none";
  document.getElementById("berlintoparis").style.display = "none";
  document.getElementById("praguetoparis").style.display = "none";
  document.getElementById("notrain").style.display = "none";

  if (location == "Down Town" && desination == "Berlin") {
    document.getElementById("downtowntoberlin").style.display = "block";
  } else if (location == "Berlin" && desination == "Paris") {
    document.getElementById("berlintoparis").style.display = "block";
  } else if (location == "Prague" && desination == "Paris") {
    document.getElementById("praguetoparis").style.display = "block";
  } else {
    document.getElementById("notrain").style.display = "block";
  }
}

function sortbydate() {
  var location = document.getElementsByName("loc")[0].value;
  var desination = document.getElementsByName("dec")[0].value;
  var edate = document.getElementsByName("edate")[0].value;

  document.getElementById("downtowntoberlin").style.display = "none";
  document.getElementById("downtowntoberlin1").style.display = "none";
  document.getElementById("downtowntoberlin2").style.display = "none";
  document.getElementById("berlintoparis").style.display = "none";
  document.getElementById("berlintoparis1").style.display = "none";
  document.getElementById("berlintoparis2").style.display = "none";
  document.getElementById("praguetoparis").style.display = "none";
  document.getElementById("praguetoparis1").style.display = "none";
  document.getElementById("praguetoparis2").style.display = "none";

  if (
    location == "Down Town" &&
    desination == "Berlin" &&
    edate == "2022-02-01"
  ) {
    document.getElementById("downtowntoberlin1").style.display = "block";
  } else if (
    location == "Down Town" &&
    desination == "Berlin" &&
    edate == "2022-02-02"
  ) {
    document.getElementById("downtowntoberlin2").style.display = "block";
  } else if (
    location == "Berlin" &&
    desination == "Paris" &&
    edate == "2022-02-03"
  ) {
    document.getElementById("berlintoparis1").style.display = "block";
  } else if (
    location == "Berlin" &&
    desination == "Paris" &&
    edate == "2022-02-04"
  ) {
    document.getElementById("berlintoparis2").style.display = "block";
  } else if (
    location == "Prague" &&
    desination == "Paris" &&
    edate == "2022-02-05"
  ) {
    document.getElementById("praguetoparis1").style.display = "block";
  } else if (
    location == "Prague" &&
    desination == "Paris" &&
    edate == "2022-02-06"
  ) {
    document.getElementById("praguetoparis2").style.display = "block";
  } else {
    document.getElementById("notrain").style.display = "block";
  }
}

function loginvalidate() {
  var username = document.getElementsByName("username")[0].value;
  var password = document.getElementsByName("password")[0].value;

  if (
    username == null ||
    username == "" ||
    password == null ||
    password == ""
  ) {
    window.location.href = "#errorlogin";
  } else {
    window.location.href = "#home";
  }
}

function removeFav1() {
  document.getElementById("removeFav1").style.display = "none";
}

function removeFav2() {
  document.getElementById("removeFav2").style.display = "none";
}

function removeFav3() {
  document.getElementById("removeFav3").style.display = "none";
}

function removeFav4() {
  document.getElementById("removeFav4").style.display = "none";
}

function removeFav5() {
  document.getElementById("removeFav5").style.display = "none";
}

function removeFav6() {
  document.getElementById("removeFav6").style.display = "none";
}

function removeFav7() {
  document.getElementById("removeFav7").style.display = "none";
}

function AddRemove1() {
  document.getElementById("btnremoveFav2").style.display = "none";
  document.getElementById("btnremoveFavx").style.display = "block";
}

function AddRemove2() {
  document.getElementById("btnAddRemove2").style.display = "none";
  document.getElementById("btnAddRemove2x").style.display = "block";
}

function AddRemove3() {
  document.getElementById("btnAddRemove3").style.display = "none";
  document.getElementById("btnAddRemove3x").style.display = "block";
}

function AddRemove4() {
  document.getElementById("btnAddRemove4").style.display = "none";
  document.getElementById("btnAddRemove4x").style.display = "block";
}

function AddRemove5() {
  document.getElementById("btnAddRemove5").style.display = "none";
  document.getElementById("btnAddRemove5x").style.display = "block";
}

function AddRemove6() {
  document.getElementById("btnAddRemove6").style.display = "none";
  document.getElementById("btnAddRemove6x").style.display = "block";
}

function AddRemove7() {
  document.getElementById("btnAddRemove7").style.display = "none";
  document.getElementById("btnAddRemove7x").style.display = "block";
}
