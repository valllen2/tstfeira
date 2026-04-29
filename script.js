document.addEventListener('DOMContentLoaded', function() {
    /* flip do bagulinho */
    document.querySelectorAll('.item-galeria').forEach(item => {
        item.addEventListener('click', function() {
            const isClicked = this.classList.contains('clicado');
            
            // fecha as outras obras
            document.querySelectorAll('.item-galeria.clicado').forEach(otherItem => {
                otherItem.classList.remove('clicado');
            });

            if (!isClicked) {
                this.classList.add('clicado');
            }
        });
    });

    const sr = ScrollReveal({
        delay: 200,
        duration: 900,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false, 
    });


    sr.reveal('.header-content', {
        origin: 'top',
        distance: '0px',
        opacity: 0,
        scale: 1,
        delay: 0,
        duration: 500
    });

    sr.reveal('.section-title', {
        origin: 'bottom',
        distance: '30px',
        opacity: 0,
        delay: 100,
        duration: 700
    });

    sr.reveal('.item-galeria', {
        origin: 'bottom', 
        distance: '80px', 
        opacity: 0, 
        scale: 0.95, 
    });
});
