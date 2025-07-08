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

// Traducción multilanguage dinámica
const translations = {
  es: {
    quienes_somos: "¿Quiénes Somos?",
    inicio_desc: "Equilibrio. Salud. Tranquilidad.",
    descargar: "Descargar Ahora",
    ubicacion: "Ubicación",
    mision: "Nuestra Misión",
    vision: "Nuestra Visión",
    mision_text:
      "Brindar bienestar emocional mediante una app que combina tecnología, juegos terapéuticos, ejercicios de relajación y monitoreo del ritmo cardíaco.",
    vision_text:
      "Ser una plataforma líder en apoyo emocional y manejo de la ansiedad, reconocida por su innovación e impacto positivo en la salud mental.",
  },
  en: {
    quienes_somos: "Who We Are",
    inicio_desc: "Balance. Health. Calm.",
    descargar: "Download Now",
    ubicacion: "Location",
    mision: "Our Mission",
    vision: "Our Vision",
    mision_text:
      "Provide emotional well-being through an app that combines technology, therapeutic games, relaxation exercises, and heart rate monitoring.",
    vision_text:
      "Be a leading platform in emotional support and anxiety management, recognized for its innovation and positive impact on mental health.",
  },
};

const languageSelect = document.getElementById("languageSelect");
languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
