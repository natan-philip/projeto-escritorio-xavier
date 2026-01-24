const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, observerOptions);

/* ==========================================
   HELPER: STAGGER AUTOMÁTICO POR SEÇÃO
   ========================================== */

function applyStagger(containerSelector, delayStart = 0.1, delayStep = 0.15) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach(container => {
    const items = container.querySelectorAll('.fade');

    items.forEach((item, index) => {
      const delay = delayStart + index * delayStep;
      item.style.setProperty('--delay', `${delay}s`);
      observer.observe(item);
    });
  });
}

/* ==========================================
   APLICAÇÃO REAL NO SEU SITE
   ========================================== */

// HERO
applyStagger('.hero-container');

// SOBRE
applyStagger('.sobre-container');

// EQUIPE
applyStagger('.equipe-container');

// ÁREAS (cards)
applyStagger('.grid-container', 0.1, 0.1);

// CONTATO
applyStagger('.contato-container');
applyStagger('.footer-container');