setTimeout(() => {
    alert("¡Hola! Bienvenido a la página del 3er Trimestre.");
}, 2500); /* Popup despues de 2500 ms (2.5 segundos )*/

/* Cuando hagamos click en una imagen, esta cambiará. */
document.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('imgJS');

    img.addEventListener('click', () => {
        img.src = "";
    });
});

let bar = document.getElementById("hellobar");
let pos = window.innerWidth;

function moverBarra(){
    pos -= 2; /* Esto es a la velocidad que se mueve. */
    if ( pos < -bar.offsetWidth){
        pos = window.innerWidth
    }
    
    bar.style.left = pos + "px";
    requestAnimationFrame(moverBarra);
}

// Inicializar barra

moverBarra();

