const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slider = document.querySelector(".slider")

prev.addEventListener('click', () => {
    slider.scrollLeft -=340
});

next.addEventListener('click', () => {
    slider.scrollLeft +=340
});

// Codigo scroll para javascript

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces con la clase "smooth-scroll"
    var scrollLinks = document.querySelectorAll('.smooth-scroll');

    // Agrega un evento de clic a cada enlace
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtiene el atributo href del enlace
            var targetId = this.getAttribute('href');
            
            // Obtiene la posición de la sección de destino
            var targetPosition = document.querySelector(targetId).offsetTop;
            
            // Desplaza suavemente la página hacia la sección de destino
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

let lastScrollTop = 0;
        const barra = document.querySelector('.barra');
    
        window.addEventListener('scroll', function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                barra.style.transform = 'translateY(-100%)'; // Ocultar la barra
            } else {
                // Scrolling up
                barra.style.transform = 'translateY(0)'; // Mostrar la barra
            }
    
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para no permitir valores negativos
        });


        document.addEventListener("DOMContentLoaded", function() {
            const nosotrosSection = document.getElementById('nosotros');
        
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        nosotrosSection.classList.add('visible');
                    } else {
                        nosotrosSection.classList.remove('visible');
                    }
                });
            }, {
                threshold: 0.5
            });
        
            observer.observe(nosotrosSection);
        });
        