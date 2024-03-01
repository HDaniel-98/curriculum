//VARIABLES PÁGINAS
const home = document.getElementById('home');
const about = document.getElementById('about');
const estudios = document.getElementById('estudios');
const experiencia = document.getElementById('experiencia');
const contacto = document.getElementById('contacto');
const BoxBurger = document.getElementById('box-burger');
//VARIABLES BOTONES
const BtnHome = document.getElementById('btn-home');
const BtnAbout = document.getElementById('btn-about');
const BtnEstudios = document.getElementById('btn-estudios');
const BtnExp = document.getElementById('btn-exp');
const BtnContacto = document.getElementById('btn-contacto');
const BtnMenu = document.getElementById('btn-menu')


BtnAbout.addEventListener('click', () => {
    about.classList.add('hidden');
    about.classList.toggle('hidden');
});

BtnEstudios.addEventListener('click', () => {
    estudios.classList.add('hidden');
    estudios.classList.toggle('hidden');
});


BtnExp.addEventListener('click', () => {
    experiencia.classList.add('hidden');
    experiencia.classList.toggle('hidden');
});


BtnContacto.addEventListener('click', () => {
    contacto.classList.add('hidden');
    contacto.classList.toggle('hidden');
});

// BtnMenu.addEventListener('click', () => {
//     BoxBurger.classList.toggle('hidden');

//     setTimeout(() => {
//         BoxBurger.classList.add('hidden');
//     }, 2000);
// });

// Agregar evento al botón con hover.
BtnMenu.addEventListener('mouseenter', () => {
    BoxBurger.classList.remove('hidden');
});

BtnMenu.addEventListener('mouseleave', () => {
    BoxBurger.classList.add('hidden');
});

// Agregar evento a BoxBurger para mantenerla visible mientras el mouse está sobre ella
BoxBurger.addEventListener('mouseenter', () => {
    BoxBurger.classList.remove('hidden');
});

BoxBurger.addEventListener('mouseleave', () => {
    BoxBurger.classList.add('hidden');
});