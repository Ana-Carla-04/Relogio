const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const relogio = setInterval(function tempo() {
    let hoje = new Date();
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;
});


const datinha = document.querySelector('.datinha');
const data = new Date();

let dia = data.getDate();
dia = dia < 10 ? "0" + dia : dia;

let mes = data.getMonth();
mes = mes < 10 ? "0" + mes : mes;


const data_r = dia + "/" + mes + "/" + data.getFullYear();
datinha.innerHTML = data_r;
