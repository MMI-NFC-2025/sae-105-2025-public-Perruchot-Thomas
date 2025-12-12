
/* On va chercher le bouton du menu et le menu lui-même dans la page HTML */
const toggle = document.querySelector('.en-tete__bouton-menu');
const nav = document.querySelector('#navigation-principale'); 

/* Quand on clique sur le bouton "toggle" cela fait une action */
toggle.addEventListener('click', () => {
    
    /* On regarde si le menu est déjà ouvert */
    const isOpened = toggle.getAttribute('aria-expanded') === 'true';

    if (isOpened) {
      /* Si il est ouvert on le ferme */
      toggle.setAttribute('aria-expanded', 'false'); // On dit qu'il est fermé
      nav.setAttribute('hidden', '');                // on cache le menu pour le fermer
      document.body.classList.remove('noscroll');    // On remet le srcroll

    } else {
      /* si il est fermé on l'ouvre */
      toggle.setAttribute('aria-expanded', 'true');  // On dit qu'il est ouvert
      nav.removeAttribute('hidden');                 // On enleve le "hidden" pour afficher le menu
      document.body.classList.add('noscroll');       // On enleve le scroll de la page
    }
});



/* On va chercher la boîte qui contient les cartes et les deux flèches */
const carrousel = document.querySelector('#carrouselProgrammation');
const btnGauche = document.querySelector('.bouton-carrousel--gauche');
const btnDroite = document.querySelector('.bouton-carrousel--droite');

/* On vérifie que ces éléments existent sur la page */
if (carrousel && btnGauche && btnDroite) {
    
    /* Action lorsqu'on clique sur la fleche droite*/
    btnDroite.addEventListener('click', () => {
      /* On mesure la largeur d'une carte pour savoir de combien on doit avancer */
      const cardWidth = carrousel.querySelector('.carte').offsetWidth;
      /* On ajoute 16px pour avancer parfaitement */
      const scrollAmount = cardWidth + 16;
      
      /* On fait défiler la boîte vers la droite de manière fluide */
      carrousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    /* Action quand on clique sur la fleche gauche */
    btnGauche.addEventListener('click', () => {
      const cardWidth = carrousel.querySelector('.carte').offsetWidth;
      const scrollAmount = cardWidth + 16;

      /* On fait défiler la boîte vers la gauche  */
      carrousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
}




/* On va chercher le bouton haut dans les pages html */
const btnHaut = document.getElementById('btn-retour-haut');

/* Si il existe sur la page */
if (btnHaut) {

    /* Action quand on scroll la page */
    window.addEventListener('scroll', () => {
      
      /* On regarde si on est arrivé tout en bas de la page */
      /*() Code provenant d'un youtubeur anglais )*/
      const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

      /* Si on est en bas on met visible le boutton */
      if (isBottom) {
        btnHaut.classList.add('visible');
      } 
      /* Et si on remonte en enleve la classe pour le cacher */
      else {
        btnHaut.classList.remove('visible');
      }
    });

    /* Action quand on clique sur le bouton */
    btnHaut.addEventListener('click', () => {
      /* On remonte tout en haut (top: 0) doucement (smooth) */
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
}
