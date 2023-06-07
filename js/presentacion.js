let nube1 = document.getElementById('nube1')
let Montania_2 = document.getElementById('Montania_2')
let nube2 = document.getElementById('nube2')
let slogan = document.getElementById('slogan')
let slogan_2 = document.getElementById('slogan_2')
let slogan_3 = document.getElementById('slogan_3')
let Dezlizar = document.getElementById('Dezlizar')
let Dezlizar_1 = document.getElementById('Dezlizar_1')
let Dezlizar_2 = document.getElementById('Dezlizar_2')
let Edificio = document.getElementById('Edificio')
let viento = document.getElementById('viento')
let Montaña = document.getElementById('Montaña')
let Luna = document.getElementById('Luna')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    Montania_2.style.marginLeft = value * -0.7 + 'px';
    nube1.style.left = value* -5  + 'px';
    nube2.style.left = value* -5  + 'px';
    Edificio.style.marginLeft = value * 0.7 + 'px';
    slogan.style.marginBottom =   value* -1  + 'px';
    slogan_2.style.marginBottom =   value* -1  + 'px';
    slogan_3.style.marginBottom =   value* -1  + 'px';
    Dezlizar.style.marginBottom =   value* -1  + 'px';
    Dezlizar_1.style.marginBottom =   value* -1  + 'px';
    Dezlizar_2.style.marginBottom =   value* -1  + 'px';
    viento.style.left = value* -5  + 'px';
    Montaña.style.marginTop = value * 0.1 + 'px';
    Luna.style.left = value* -5  + 'px';
})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}