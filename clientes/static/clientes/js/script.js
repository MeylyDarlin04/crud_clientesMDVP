// Cambiar el header cuando el usuario haga scroll

const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

//Mostrar un mensaje de alerta con haga clic en el boton 

/*document.querySelector('.btn').addEventListener('click', function(){
    alert('Tu equipo ha sido registrado');
});

//Aplicar a todos los botones de clase .btn

document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click', function(){
        alert("Tu equipo ha sido registrado ")
    })
})*/


document.getElementById("btn-reserva").addEventListener('click',function(){
    alert("Reserva registrada");

})

document.getElementById("btn-aceptar").addEventListener('click',function(){
    alert("Equipo registrado");
})

document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'instant'
        })
    })
})

//Cambiar la imagen de fondo cada n segundo

const imagenes =[
    'static/clientes/img/1deporte.jpg',
    'static/clientes/img/deporte.jpg',
    'static/clientes/img/deportes.jpg',
    'static/clientes/img/futbol5.jpg',
    'static/clientes/img/futbol2.jpg'
];
const homeSection = document.querySelector('.home');
const intervalo = 5000; //5000 ms =n5 s
let indiceImagen = 0;

function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,
    rgba(213, 220, 148, 0.6),
    rgba(144, 216, 225, 0.6),
    rgba(184, 102, 166, 0.6)
    ), url(${imagenes[indiceImagen]})`;
    
    indiceImagen=(indiceImagen + 1) % imagenes.length;
}
setInterval(cambiarFondo, intervalo);

//Mostrar menu en pantallas pequeñas 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let enlace = document.querySelectorAll('.navbar a');
menu.onclick = () =>{
    navbar.classList.toggle('open');
    menu.classList.toggle('bx-x');
}
enlace.forEach(Link =>{
    Link.onclick = () =>{
    navbar.classList.remove('open');
    navbar.classList.remove('bx-x');
    }
})

var typed = new Typed('#typed',{
    strings: ['El mejor equipo', 'Mejores beneficios', 'Disponibles todos los equipos'],
    typeSpeed:50,
    loop: "true",
    showCursor:"true",
    cursorChar:"_",
    backSpeed: 20,
})

var typed = new Typed('#typed2',{
    strings: ['Nuevos', 'Mejor opcion', 'Disponibles 8 equipos'],
    typeSpeed:50,
    loop: "true",
    showCursor:"true",
    cursorChar:"_",
    backSpeed: 20,
})
