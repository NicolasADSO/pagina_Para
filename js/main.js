// Inicializar AOS con duración y animación única
AOS.init({ duration: 1000, once: true });

// Cambiar color de fondo del navbar al hacer scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".custom-navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Inicializar el mapa Leaflet con ubicación del SENA Mosquera
const map = L.map('map').setView([4.68965, -74.22001], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([4.68965, -74.22001])
  .addTo(map)
  .bindPopup('Centro de Biotecnología Agropecuaria - SENA Mosquera')
  .openPopup();

const translations = {
  es: {
    quienes_somos: "¿Quiénes Somos?",
    inicio_desc: "Equilibrio. Salud. Tranquilidad.",
    descargar: "Descargar Ahora",
    ubicacion: "Ubicación",
    mision: "Nuestra Misión",
    vision: "Nuestra Visión",
  },
  en: {
    quienes_somos: "Who We Are",
    inicio_desc: "Balance. Health. Calm.",
    descargar: "Download Now",
    ubicacion: "Location",
    mision: "Our Mission",
    vision: "Our Vision",
  },
};

const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

