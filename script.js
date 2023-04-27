let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.content-text', {delay: 200, origin: 'top'});
sr.reveal('.content-img', {delay: 450, origin: 'top'});
sr.reveal('.logo', {delay: 550, origin: 'left'});

// MAP
var map = L.map('map').setView([-12.528831, -55.704491], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-12.528831, -55.704491]).addTo(map);

var area = L.polygon([
    [-12.526944, -55.706981],
    [-12.529137, -55.707401],
    [-12.529208, -55.707268],
    [-12.529218, -55.707130],
    [-12.529237, -55.706912],
    [-12.529304, -55.706718],
    [-12.529429, -55.706564],
    [-12.529601, -55.706434],
    [-12.529760, -55.706337],
    [-12.529870, -55.706268],
    [-12.529969, -55.706182],
    [-12.530027, -55.706073],
    [-12.530175, -55.705863],
    [-12.530574, -55.705719],
    [-12.530764, -55.705670],
    [-12.530963, -55.705201],
    [-12.527483, -55.703822],
    [-12.526944, -55.706981],
]).addTo(map);

marker.bindPopup("ITA - Airsoft Team");
area.bindPopup("Campo Counrty Club");