/* Menu Burgeur */
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const menuIcon = toggler.querySelector(".menu-icon");
  const closeIcon = toggler.querySelector(".close-icon");

  toggler.addEventListener("click", function () {
    // Bootstrap ajoute ou enlève la classe 'collapsed'
    const isCollapsed = toggler.classList.contains("collapsed");

    if (isCollapsed) {
      // Afficher menu (☰)
      menuIcon.classList.remove("d-none");
      closeIcon.classList.add("d-none");
    } else {
      // Afficher croix (×)
      menuIcon.classList.add("d-none");
      closeIcon.classList.remove("d-none");
    }
  });
});



