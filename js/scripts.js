/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Datos de los proyectos
const projects = {
    sanf19: {
        title: "Cartel SANFIC19",
        images: [
            "assets/img/sanf19-1.jpg",
            "assets/img/sanf19-2.jpg",
            "assets/img/sanf19-3.jpg"
        ]
    },
    humedales: {
        title: "Afiche 'Humedales Enmarañados'",
        images: [
            "assets/img/humedales-1.jpg",
            "assets/img/humedales-2.jpg"
        ]
    },
    baldosas: {
        title: "Libro 'Baldosas de Chile: El oficio baldosero'",
        images: [
            "assets/img/baldosas-1.jpg",
            "assets/img/baldosas-2.jpg",
            "assets/img/baldosas-3.jpg",
            "assets/img/baldosas-4.jpg",
            "assets/img/baldosas-5.jpg",
            "assets/img/baldosas-6.jpg",
            "assets/img/baldosas-7.jpg",
            "assets/img/baldosas-8.jpg",
            "assets/img/baldosas-9.jpg",
            "assets/img/baldosas-10.jpg",
            "assets/img/baldosas-11.jpg"
        ]
    },
    inusual: {
        title: "Usar lo (in)usual",
        images: [
            "assets/img/inusual-1.jpg",
            "assets/img/inusual-2.jpg",
            "assets/img/inusual-3.jpg",
            "assets/img/inusual-4.jpg",
            "assets/img/inusual-5.jpg",
            "assets/img/inusual-6.jpg",
            "assets/img/inusual-7.jpg",
            "assets/img/inusual-8.jpg"
        ]
    },
    grief: {
        title: "Fanzine '5 STAGES OF GRIEF'",
        images: [
            "assets/img/grief-1.jpg",
            "assets/img/grief-2.jpg",
            "assets/img/grief-3.jpg",
            "assets/img/grief-4.jpg"
        ]
    },
    credencial: {
        title: "Conoce Tu Credencial",
        images: [
            "assets/img/credencial-1.jpg",
            "assets/img/credencial-2.jpg",
            "assets/img/credencial-3.jpg",
            "assets/img/credencial-4.jpg",
            "assets/img/credencial-5.jpg",
            "assets/img/credencial-6.jpg",
            "assets/img/credencial-7.jpg",
            "assets/img/credencial-8.jpg",
            "assets/img/credencial-9.jpg",
            "assets/img/credencial-10.jpg"

        ]
    },
    synth: {
        title: "SYNTH",
        images: [
            "assets/img/synth-1.jpg",
            "assets/img/synth-2.jpg",
            "assets/img/synth-3.jpg",
            "assets/img/synth-4.jpg",
            "assets/img/synth-5.jpg",
            "assets/img/synth-6.jpg",
            "assets/img/synth-7.jpg"
        ]
    },
    odioscolegiales: {
        title: "Odios Colegiales",
        images: [
            "assets/img/odioscolegiales-4.jpg",
            "assets/img/odioscolegiales-1.jpg",
            "assets/img/odioscolegiales-2.jpg",
            "assets/img/odioscolegiales-3.jpg"
        ]
    },
    desvanecidos: {
        title: "Desvanecidos",
        images: [
            "assets/img/otro_1.jpg",
            "assets/img/otro_5.jpg"
        ]
    },
};

// Configurar el evento para cada botón
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project-id');
        const project = projects[projectId];
        
        if (project) {
            // Cambiar título del modal
            document.getElementById('projectModalLabel').innerText = project.title;

            // Cargar imágenes en el carrusel
            const carouselImages = document.getElementById('carouselImages');
            carouselImages.innerHTML = project.images.map((img, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${img}" class="d-block w-100" alt="${project.title}">
                </div>
            `).join('');

            // Mostrar el modal
            const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
            projectModal.show();
        }
    });
});
