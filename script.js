/* Menu Burgeur */
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const menuIcon = toggler.querySelector(".menu-icon");
  const closeIcon = toggler.querySelector(".close-icon");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Sélectionne tous les liens


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
  // Fermer le menu après clic sur un lien
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && !toggler.classList.contains("collapsed")) {
        toggler.click(); // Simule un clic pour fermer le menu
      }
    });
  });
});



