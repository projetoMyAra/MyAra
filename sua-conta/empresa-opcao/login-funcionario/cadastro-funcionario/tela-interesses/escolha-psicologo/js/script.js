const cor = document.querySelector('#like1');

document.querySelector('#like1').onclick = () =>{
    cor.classList.toggle('active');
}

const cor1 = document.querySelector('#like2');

document.querySelector('#like2').onclick = () =>{
    cor1.classList.toggle('active');
}

const cor2 = document.querySelector('#like3');

document.querySelector('#like3').onclick = () =>{
    cor2.classList.toggle('active');
}

const cor3 = document.querySelector('#like4');

document.querySelector('#like4').onclick = () =>{
    cor3.classList.toggle('active');
}

const cor4 = document.querySelector('#like5');

document.querySelector('#like5').onclick = () =>{
    cor4.classList.toggle('active');
}

const cor5 = document.querySelector('#like6');

document.querySelector('#like6').onclick = () =>{
    cor5.classList.toggle('active');
}

const cor6 = document.querySelector('#like7');

document.querySelector('#like7').onclick = () =>{
    cor6.classList.toggle('active');
}

const cor7 = document.querySelector('#like8');

document.querySelector('#like8').onclick = () =>{
    cor7.classList.toggle('active');
}


// api de libras 

new window.VLibras.Widget('https://vlibras.gov.br/app');