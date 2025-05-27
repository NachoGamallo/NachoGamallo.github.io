setTimeout(() => {
    alert("¡Hola! Bienvenido a la página del 3er Trimestre con JS implementado!!.");
}, 2500); //Popup despues de 2500 ms (2.5 segundos )

//Cuando hagamos click en una imagen, esta cambiará. Guardamos la foto original en una variable, al pasar 5 segundos sin clicar vuelve a la original. (Aun se puede mejorar).
document.addEventListener('DOMContentLoaded', function () {
    
    const img = document.getElementById('imgJS');

    const imgOriginal = img.src;

    let timeoutId = null; //Guardamos temporizador.

    const imgNueva = "https://i.pinimg.com/originals/87/8c/53/878c5376b10b2f842a06fae2d386c463.gif";

    img.addEventListener('click', () => {
        img.src = imgNueva;

        if (timeoutId){
            clearTimeout(timeoutId);
        }//Si el usuario clica y ya habia un temporizador en marcha, se borra y empieza de 0.

        setTimeout(() => {
            img.src = imgOriginal;
            timeoutId = null;
        }, 5000)//Tras 5 segundos, cambia a la imagen inicial.
    });
});

let bar = document.getElementById("hellobar");
let pos = window.innerWidth;

function moverBarra(){
    pos -= 2; //Esto es a la velocidad que se mueve.
    if ( pos < -bar.offsetWidth){
        pos = window.innerWidth
    }
    
    bar.style.left = pos + "px";
    requestAnimationFrame(moverBarra);
}

// Inicializar barra

moverBarra();

//Mostrar e Ocultar ejercicios. 

function mostrarContenido(){

    const contenedor = document.getElementById("contenedor_enlace");
    const boton = document.getElementById("MostrarEjercicios");

    const estaOculto = contenedor.style.maxHeight === "0px" || contenedor.style.maxHeight === "";

    if (estaOculto) {
        contenedor.style.maxHeight = "1000px";
        contenedor.style.opacity = "1";
        boton.textContent = "Ocultar ejercicios";
    } else {
        contenedor.style.maxHeight = "0px";
        contenedor.style.opacity = "0";
        boton.textContent = "Mostrar ejercicios";
    }

}