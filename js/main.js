AOS.init({ duration: 1000, once: true });

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".custom-navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

const map = L.map('map').setView([4.705633, -74.228794], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
}).addTo(map);

L.marker([4.705633, -74.228794])
  .addTo(map)
  .bindPopup('Centro Biotecnológico del SENA, Mosquera')
  .openPopup();
