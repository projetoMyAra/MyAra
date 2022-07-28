var slider = tns({
    container: ".my-slider",
    mode: "carousel",
    items: 3,
    gutter: 20,
    slideBy: 1,
    controls: false,
    nav: false,
    mouseDrag: true,
    loop: false,

    responsive: {
        300: {
            items:2,
        },

        768: {
            items: 3,
        },

        1366: {
            items: 4,
           
        },
        1440: {
            items: 4,
        },
        2560: {
            items: 6,
        }
    }
    
});


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#fechar').onclick = () =>{
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
}



new window.VLibras.Widget('https://vlibras.gov.br/app');


