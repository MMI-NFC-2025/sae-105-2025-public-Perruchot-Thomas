
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

 
  const carrousel = document.querySelector('#carrouselProgrammation');
  const btnGauche = document.querySelector('.bouton-carrousel--gauche');
  const btnDroite = document.querySelector('.bouton-carrousel--droite');

  if (carrousel && btnGauche && btnDroite) {
    

    btnDroite.addEventListener('click', () => {
      const cardWidth = carrousel.querySelector('.carte').offsetWidth;
      const scrollAmount = cardWidth + 16;
      
      carrousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    btnGauche.addEventListener('click', () => {
      const cardWidth = carrousel.querySelector('.carte').offsetWidth;
      const scrollAmount = cardWidth + 16;

      carrousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  }

 
  const btnHaut = document.getElementById('btn-retour-haut');

  if (btnHaut) {

    window.addEventListener('scroll', () => {
      const isBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);

      if (isBottom) {
        btnHaut.classList.add('visible');
      } else {
        btnHaut.classList.remove('visible');
      }
    });

    btnHaut.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
