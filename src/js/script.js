document.addEventListener('DOMContentLoaded', () => {
  
  // 1. On récupère les éléments avec les classes FRANÇAISES
  const toggleButton = document.querySelector('.en-tete__bouton-menu');
  const menu = document.querySelector('#navigation-principale'); 

  // Sécurité : on s'arrête si les éléments ne sont pas trouvés
  if (!toggleButton || !menu) return;

  // 2. On écoute le clic
  toggleButton.addEventListener('click', () => {
    
    // On vérifie si le menu est déjà ouvert
    const isOpened = toggleButton.getAttribute('aria-expanded') === 'true';

    if (isOpened) {
      // --- FERMETURE ---
      toggleButton.setAttribute('aria-expanded', 'false');
      menu.setAttribute('hidden', ''); // On remet l'attribut hidden
      document.body.classList.remove('noscroll'); // On réactive le scroll
    } else {
      // --- OUVERTURE ---
      toggleButton.setAttribute('aria-expanded', 'true');
      menu.removeAttribute('hidden'); // On enlève hidden pour l'afficher
      document.body.classList.add('noscroll'); // On bloque le scroll
    }
  });
});