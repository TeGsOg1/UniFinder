let map;
let markers = [];

const createMarker = (coord, name, address, phone) => {
  let html = `
    <div class="window">
       <h2 id="name">${name}</h2>
       <div class="address">
        <i class="fa-solid fa-location-dot"></i>
        <h3>${address}</h3>
       </div>
       <div class="phone">
        <i class="fa-solid fa-phone"></i>
        <h3>${phone}</h3>
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
  Uba.forEach((facu) => {
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
  let CABA = { lat:-34.6052765, lng:-58.4032344 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: CABA,
    zoom: 12.8,
    mapId: "553827af7a8d4f3e",
  });
  createLocationMarkers();

  infowindow = new google.maps.InfoWindow();
  let html = "<h3>Holaaa</h3>";
  
}
