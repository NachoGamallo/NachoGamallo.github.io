// Selecciona el botón del menú de navegación
// Usamos `document.querySelector` para buscar en el HTML el elemento con la clase `.nav__menu`.
// Este elemento es el que funciona como el "botón" para abrir y cerrar el menú.
const menu = document.querySelector('.nav__menu');

// Selecciona la lista de elementos del menú
// Aquí seleccionamos el contenedor que tiene los enlaces del menú de navegación, 
// usando `document.querySelector` para buscar el elemento con la clase `.nav__list`.
const menuList = document.querySelector('.nav__list');

// Selecciona todos los enlaces dentro del menú
// `document.querySelectorAll` selecciona todos los elementos que tienen la clase `.nav__link`
// y los guarda en la variable `links` como una "lista" (una NodeList).
const links = document.querySelectorAll('.nav__link');

// Añade un evento de "click" al botón del menú para abrir y cerrar la lista
// `addEventListener` escucha las interacciones del usuario, en este caso, un "click".
// Al hacer clic, se ejecutará la función que sigue.
menu.addEventListener('click', function() {
    // Alterna (añade o quita) la clase `nav__list--show` en el menú
    // `classList.toggle` añade la clase `nav__list--show` si no está presente y la quita si ya lo está.
    // Esta clase es la que muestra o esconde el menú.
    menuList.classList.toggle('nav__list--show');
});

// Añade un evento "click" a cada enlace en el menú
// `forEach` recorre cada enlace en la lista `links` (cada `.nav__link`), y para cada enlace,
// realiza la acción indicada en la función.
links.forEach(function(link) {
    // Añade un evento de "click" a cada enlace
    // Esto asegura que cuando un enlace específico se hace clic, se ejecuta la función para cerrar el menú.
    link.addEventListener('click', function() {
        // Remueve la clase `nav__list--show` de la lista del menú
        // `classList.remove` quita la clase `nav__list--show`, ocultando el menú.
        menuList.classList.remove('nav__list--show');
    });
});