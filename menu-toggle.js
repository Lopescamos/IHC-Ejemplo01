// Script para el menú hamburguesa
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-container");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("menu-activo");
    toggle.classList.toggle("menu-toggle-activo");
  });

  // Cerrar menú al hacer clic en un enlace
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("menu-activo");
      toggle.classList.remove("menu-toggle-activo");
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("menu-activo");
      toggle.classList.remove("menu-toggle-activo");
    }
  });
}

