'use strict';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      setMapView(position.coords.latitude, position.coords.longitude);
    },
    function () {
      alert('Could not get your location.');
      setMapView();
    }
  );
}

function setMapView(lat = 27.713958216010024, lng = 85.3147213729993) {
  let map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}
