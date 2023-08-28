let map;
let markers = [];

const createMarker = (coord, name, address, phone) => {
  let html = `
    <div class="window">
       <h3 id="name">${name}</h3>
       <div class="address">
        <i class="fa-solid fa-location-dot"></i>
        <h4>${address}</h4>
       </div>
       <div class="phone">
        <i class="fa-solid fa-phone"></i>
        <h4>${phone}</h4>
       </div>
       
    </div> `;

  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(html);
    infowindow.open(map, marker);
  });
  markers.push(marker);
};

const createLocationMarkers = () => {
  Ucalp.forEach((facu) => {
    let coord = new google.maps.LatLng(facu.lat, facu.lng);
    let name = facu.name;
    let address = facu.address;
    let phone = facu.phone;
    createMarker(coord, name, address, phone);
  });
};

function deleteMarkers() {
  hideMarkers();
  markers = [];
}

function initMap() {
  let Laplata = { lat:-34.921097, lng:-57.954026 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: Laplata,
    zoom: 14.4,
    mapId: "553827af7a8d4f3e",
  });
  createLocationMarkers();

  infowindow = new google.maps.InfoWindow();
  let html = "<h3>Holaaa</h3>";
  
}
