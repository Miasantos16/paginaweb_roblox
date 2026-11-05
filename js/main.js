// =========================================================
// MUNDOBLOX - JavaScript
// Reemplaza a ScrollReveal (el contenido siempre se ve, solo se desliza)
// y agrega la interacción de géneros, juegos y el formulario.
// =========================================================

// ---------- Aparecer al bajar ----------
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observador.observe(el));

// ---------- Géneros: al tocar uno se explica ----------
const infoGenero = document.getElementById("category-info");
document.querySelectorAll(".category__card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".category__card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    infoGenero.innerHTML = `<strong>${card.querySelector("h4").textContent}:</strong> ${card.dataset.info}`;
  });
});

// ---------- Experiencias: al tocar una se muestra de qué trata ----------
document.querySelectorAll(".shopping__card").forEach(card => {
  card.addEventListener("click", () => {
    const info = card.querySelector(".shopping__info");
    const abierta = card.classList.toggle("open");
    info.textContent = abierta ? card.dataset.info : "";
  });
});

// ---------- Tu experiencia favorita ----------
const formulario = document.getElementById("fav-form");
const campo = document.getElementById("favorita");
const mensaje = document.getElementById("fav-msg");

formulario.addEventListener("submit", e => {
  e.preventDefault();
  const favorita = campo.value.trim();
  if (!favorita) {
    mensaje.textContent = "Escribe el nombre de una experiencia primero.";
    campo.focus();
    return;
  }
  mensaje.textContent = `¡Buena elección! ${favorita} es una gran experiencia.`;
  formulario.reset();
});
