var gen_map = L.map('general_map').setView([38.39172, 27.08473], 9);
var izm_map = L.map('izmir_map').setView([38.42844, 27.14484], 14);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(gen_map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(izm_map);
// L.tileLayer('https://a.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png').addTo(map);

L.marker([38.300183, 27.152850]).addTo(gen_map)
    .bindPopup('Airport').openPopup();
// L.marker([38.43437, 27.14287]).addTo(map)
//     .bindPopup("Ege's Dad's Hospital for Emergencies");
L.marker([38.311070, 26.672618]).addTo(gen_map)
    .bindPopup('Sen Kardesler: Wedding Venue');
L.marker([38.32192, 26.30419]).addTo(gen_map)
    .bindPopup('Cesme: Beaches, Windsurfing, Swimming');
L.marker([37.94354, 27.34021]).addTo(gen_map)
    .bindPopup("Historical: Ephesus & Mother Mary's House");
L.marker([37.94263, 27.43389]).addTo(gen_map)
    .bindPopup('Wine & Sigths: Sirince');


L.marker([38.41858, 27.12933]).addTo(izm_map)
    .bindPopup('Kemeralti: Oriental Bazaar Stuff').openPopup();
L.marker([38.4279, 27.1453]).addTo(izm_map)
    .bindPopup('Izmir International Fair: Our version of Central Park');
L.marker([38.43543, 27.1399]).addTo(izm_map)
    .bindPopup('Boardwalk: Good to have drinks and chill');
L.marker([38.41889, 27.12871]).addTo(izm_map)
    .bindPopup('Clock Tower');



// 38.4279, 27.1453 - izmir international fair
// 38.43543, 27.1399 - boardwalk, good to have drinks around
// 38.41889, 27.12871 clocktower


function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

gen_map.on('click', onMapClick);
izm_map.on('click', onMapClick);


