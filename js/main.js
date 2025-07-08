AOS.init({ duration: 1000, once: true });

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".custom-navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

const map = L.map('map').setView([4.68965, -74.22001], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);
L.marker([4.68965, -74.22001])
  .addTo(map)
  .bindPopup('Centro de Biotecnología Agropecuaria - SENA Mosquera')
  .openPopup();

// Tema claro/oscuro
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', themeSwitch.checked);
});

// Traducciones
const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_quienes: "Quiénes Somos",
    nav_descarga: "Descargar",
    nav_ubicacion: "Ubicación",
    bienvenida: "Bienvenidos a",
    inicio_desc: "Equilibrio. Salud. Tranquilidad.",
    quienes_somos: "¿Quiénes Somos?",
    quienes_texto: "Nuestro proyecto trata de una app para ayudar a combatir esos momentos de ansiedad por medio de juegos como rompecabezas, encuentra la pareja y otros más...\n\nLa aplicación registra tus BPMs y muestra estadísticas de tus juegos más jugados y tu progreso emocional, ayudándote a entender y mejorar tu bienestar día a día.",
    mision: "Nuestra Misión",
    mision_texto: "Brindar bienestar emocional mediante una app que combina tecnología, juegos terapéuticos, ejercicios de relajación y monitoreo del ritmo cardíaco.",
    vision: "Nuestra Visión",
    vision_texto: "Ser una plataforma líder en apoyo emocional y manejo de la ansiedad, reconocida por su innovación e impacto positivo en la salud mental.",
    descarga_titulo: "Descargue la App",
    descarga_texto: "Disponible para Android y muy pronto para iOS.",
    descargar: "Descargar Ahora",
    ubicacion: "Ubicación",
    footer_derechos: "© 2025 Proyecto Para. Todos los derechos reservados.",
  },
  en: {
    nav_inicio: "Home",
    nav_quienes: "About Us",
    nav_descarga: "Download",
    nav_ubicacion: "Location",
    bienvenida: "Welcome to",
    inicio_desc: "Balance. Health. Calm.",
    quienes_somos: "Who We Are",
    quienes_texto: "Our project is an app to help cope with moments of anxiety through games like puzzles, memory match, and more...\n\nThe app records your BPMs and shows statistics of your most played games and emotional progress, helping you understand and improve your well-being day by day.",
    mision: "Our Mission",
    mision_texto: "Provide emotional well-being through an app that combines technology, therapeutic games, relaxation exercises, and heart rate monitoring.",
    vision: "Our Vision",
    vision_texto: "To be a leading platform in emotional support and anxiety management, recognized for its innovation and positive impact on mental health.",
    descarga_titulo: "Download the App",
    descarga_texto: "Available for Android and coming soon to iOS.",
    descargar: "Download Now",
    ubicacion: "Location",
    footer_derechos: "© 2025 Para Project. All rights reserved.",
  }
};

const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', () => {
  const lang = languageSelect.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});
