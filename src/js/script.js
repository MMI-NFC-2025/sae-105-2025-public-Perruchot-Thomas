
  const toggle = document.querySelector('.en-tete__bouton-menu');
  const nav = document.querySelector('#navigation-principale'); 

  toggle.addEventListener('click', () => {
    const isOpened = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpened) {

      toggle.setAttribute('aria-expanded', 'false');
      nav.setAttribute('hidden', '');
      document.body.classList.remove('noscroll');
    } else {

      toggle.setAttribute('aria-expanded', 'true');
      nav.removeAttribute('hidden');
      document.body.classList.add('noscroll');
    }
  });

  /* src/js/script.js */

document.addEventListener('DOMContentLoaded', () => {
  
  // ... (VOTRE CODE MENU BURGER EXISTANT ICI) ...

  // --- LOGIQUE DU CARROUSEL ---
  const carrousel = document.querySelector('#carrouselProgrammation');
  const btnGauche = document.querySelector('.bouton-carrousel--gauche');
  const btnDroite = document.querySelector('.bouton-carrousel--droite');

  if (carrousel && btnGauche && btnDroite) {
    
    // Au clic sur la flèche droite
    btnDroite.addEventListener('click', () => {
      // On récupère la largeur d'une carte (pour scroller d'une carte exactement)
      const cardWidth = carrousel.querySelector('.carte').offsetWidth;
      // On ajoute un petit espace (gap) au scroll
      const scrollAmount = cardWidth + 16; // 16px correspond environ au gap
      
      carrousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    // Au clic sur la flèche gauche
    btnGauche.addEventListener('click', () => {
      const cardWidth = carrousel.querySelector('.carte').offsetWidth;
      const scrollAmount = cardWidth + 16;

      carrousel.scrollBy({
        left: -scrollAmount, // Négatif pour aller à gauche
        behavior: 'smooth'
      });
    });
  }
});
