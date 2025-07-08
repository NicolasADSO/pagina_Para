// Inicializar AOS
AOS.init({ duration: 1000, once: true });

// Navbar transparente al hacer scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".custom-navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Mapa Leaflet
const map = L.map("map").setView([4.68965, -74.22001], 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

L.marker([4.68965, -74.22001])
  .addTo(map)
  .bindPopup("Centro de Biotecnología Agropecuaria - SENA Mosquera")
  .openPopup();

// Tema oscuro
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
