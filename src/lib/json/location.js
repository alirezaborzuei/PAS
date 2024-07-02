function getLocation() {


  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      document.getElementById("long").innerHTML = "Geolocation is not supported by this browser.";
      document.getElementById("lat").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {

  document.getElementById("long").innerHTML = position.coords.longitude;
  document.getElementById("lat").innerHTML = position.coords.latitude;

  var latlon = position.coords.latitude + "," + position.coords.longitude;
}
