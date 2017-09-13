// google-maps api
function initMap() {
  var uluru = {lat: 47.172491, lng: 8.108583};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
