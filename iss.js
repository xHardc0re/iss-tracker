const map = L.map("map").setView([0, 0], 2); // Set the initial map view

// Add OpenStreetMap tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Create a marker for the ISS
const issIcon = L.icon({
  iconUrl: "iss.png", // Replace with the URL to an ISS icon image
  iconSize: [50, 50],
  iconAnchor: [25, 25],
});

const issMarker = L.marker([0, 0], { icon: issIcon }).addTo(map);

// Function to update the ISS marker's position
function updateISSPosition() {
  fetch("http://api.open-notify.org/iss-now.json")
    .then((response) => response.json())
    .then((data) => {
      const { latitude, longitude } = data.iss_position;
      issMarker.setLatLng([latitude, longitude]);
    })
    .catch((error) => console.error("Error fetching ISS data:", error));
}

// Update the ISS position every 2 seconds
setInterval(updateISSPosition, 2000);

// Create a tooltip to display coordinates on hover
issMarker.bindTooltip("Coordinates: [0, 0]", { direction: "right" });

// Update the tooltip content on hover
issMarker.on("mouseover", function (e) {
  const { lat, lng } = issMarker.getLatLng();
  e.target.setTooltipContent(
    `Coordinates: [${lat.toFixed(2)}, ${lng.toFixed(2)}]`
  );
});
