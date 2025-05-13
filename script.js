/* Menu Burgeur */
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const togglerIcon = toggler.querySelector('.navbar-toggler-icon');
  const closeIcon = toggler.querySelector('.close-icon');

  toggler.addEventListener('click', function () {
    // On utilise setTimeout pour lire l’état APRÈS la mise à jour de Bootstrap
    setTimeout(() => {
      const isExpanded = toggler.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        // Le menu est ouvert → afficher l'icône "fermer"
        togglerIcon.classList.add('d-none');
        closeIcon.classList.remove('d-none');
      } else {
        // Le menu est fermé → afficher l'icône "menu"
        togglerIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
      }
    }, 10); // petit délai pour laisser Bootstrap faire son travail
  });
});


