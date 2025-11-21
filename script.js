document.addEventListener('DOMContentLoaded', function() {
    
    /* ======================================= */
    /* LÓGICA DO FLIP CARD (Aprimorada) */
    /* ======================================= */
    document.querySelectorAll('.item-galeria').forEach(item => {
        item.addEventListener('click', function() {
            // Verifica se o card clicado já está aberto
            const isClicked = this.classList.contains('clicado');
            
            // Fecha todos os outros cards abertos
            document.querySelectorAll('.item-galeria.clicado').forEach(otherItem => {
                otherItem.classList.remove('clicado');
            });

            // Se o card original não estava aberto, ele é aberto agora
            if (!isClicked) {
                this.classList.add('clicado');
            }
        });
    });

    /* ======================================= */
    /* ANIMAÇÕES AO ROLAR (ScrollReveal) */
    /* ======================================= */
    const sr = ScrollReveal({
        delay: 200,
        duration: 900,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false, 
    });

    // Animação para o Header
    sr.reveal('.header-content', {
        origin: 'top',
        distance: '0px',
        opacity: 0,
        scale: 1,
        delay: 0,
        duration: 500
    });

    // Animação para os Títulos de Seção
    sr.reveal('.section-title', {
        origin: 'bottom',
        distance: '30px',
        opacity: 0,
        delay: 100,
        duration: 700
    });
    
    // Animação para os Itens da Galeria
    sr.reveal('.item-galeria', {
        origin: 'bottom', 
        distance: '80px', 
        opacity: 0, 
        scale: 0.95, 
    });
});