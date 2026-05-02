// modo oscuro
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// MENÚ HAMBURGUESA
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// CONTADOR
const contador = document.getElementById("contador");
let iniciado = false;

window.addEventListener("scroll", () => {
  if (!contador) return;

  const posicion = contador.getBoundingClientRect().top;
  const pantalla = window.innerHeight;

  if (posicion < pantalla && !iniciado) {
    iniciado = true;

    let valor = 0;
    const max = 500;

    const intervalo = setInterval(() => {
      valor += 5;
      contador.textContent = valor;

      if (valor >= max) {
        contador.textContent = max;
        clearInterval(intervalo);
      }
    }, 20);
  }
});

// FORMULARIO
const form = document.getElementById("formContacto");
const spinner = document.querySelector(".spinner");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    spinner.classList.add("activo");

    setTimeout(() => {
      spinner.classList.remove("activo");
      modal.style.display = "flex";
    }, 2000);
  });
}

if (cerrar) {
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });
}