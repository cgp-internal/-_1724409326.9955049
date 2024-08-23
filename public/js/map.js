leafletmap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(leafletmap);

function addFlightRequestMarkers(flightRequests) {
  flightRequests.forEach((flightRequest) => {
    const marker = L.marker([flightRequest.lat, flightRequest.lon]).addTo(leafletmap);
    marker.bindPopup(`Flight Request: ${flightRequest.id}<br>Latitude: ${flightRequest.lat}<br>Longitude: ${flightRequest.lon}`);
  });
}

fetch('/api/flightRequests')
  .then(response => response.json())
  .then(flightRequests => addFlightRequestMarkers(flightRequests))
  .catch(error => console.error('Error fetching flight requests:', error));