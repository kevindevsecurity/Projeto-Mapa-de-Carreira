document.addEventListener('DOMContentLoaded', () => {

  // --- ANIMAÇÃO DE SCROLL REVEAL ---
  const elementsToAnimate = document.querySelectorAll('.timeline-item, .skills-group');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 
  });

  elementsToAnimate.forEach(element => {
    scrollObserver.observe(element);
  });


  // --- ANIMAÇÃO DAS BARRAS DE PROGRESSO ---
  const progressBars = document.querySelectorAll('.progress');

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const finalWidth = progressBar.getAttribute('data-width');
        
        // Aplica um pequeno delay para a animação da barra ser mais visível
        setTimeout(() => {
          progressBar.style.width = finalWidth + '%';
        }, 200);

        progressObserver.unobserve(progressBar);
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });

});