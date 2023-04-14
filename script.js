var map = L.map('map', {
  center: [38, -98],
  zoom: 4,
});

var tiles = new L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    className: 'map-tiles',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);
