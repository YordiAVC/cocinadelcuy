/*================= lista desplegable ======================*/
let listaVisible = false;

        function alternarLista() {
            const listaDesplegable = document.getElementById("btn_lista_desplegable");
            listaVisible = !listaVisible; // Alternar estado

            if (listaVisible) {
                listaDesplegable.style.visibility = "visible"; // Mostrar la lista
            } else {
                listaDesplegable.style.visibility = "hidden"; // Ocultar la lista
            }
        }

        function mostrarCaja(numeroCaja) {
            const cajas = document.querySelectorAll(".caja_un_video");
            cajas.forEach(caja => {
                caja.style.display = "none";
            });
            // Ocultar todas las cajas
            const cajasEnlace = document.querySelectorAll(".cajas_videos");
            cajasEnlace.forEach(cajas => {
                cajas.style.display = "none";
            });
            const regresarCajas = document.querySelectorAll(".regresar");
            regresarCajas.forEach(cajass => {
                cajass.style.display = "flex";
            });
            
            // // Mostrar la caja seleccionada
            const cajaMostrada = document.getElementById(`caja${numeroCaja}`);
            cajaMostrada.style.display = "flex";
            
        }
        function ocultarCaja(){
            const cajas = document.querySelectorAll(".caja_un_video");
            cajas.forEach(caja => {
                caja.style.display = "none";
            });
            // Ocultar todas las cajas
            const cajasEnlace = document.querySelectorAll(".cajas_videos");
            cajasEnlace.forEach(cajas => {
                cajas.style.display = "flex";
            });
            const regresarCajas = document.querySelectorAll(".regresar");
            regresarCajas.forEach(cajass => {
                cajass.style.display = "none";
            });
            
            // // Mostrar la caja seleccionada
            
        }
        /* CARRSEL */
        // document.addEventListener("DOMContentLoaded", function() {
        //     const backgroundCarrusel = document.querySelector('.background_carrusel');
        //     const botonAnterior = document.querySelector('.anterior');
        //     const botonSiguiente = document.querySelector('.siguiente');
        //     const bolas = document.querySelectorAll('.bola_label');
        //     const imagenes = document.querySelectorAll('.img_landing');
        //     let valorTransform = 0;
        //     const anchoImagen = imagenes[0].clientWidth;
        //     const tiempoEntreMovimientos = 3000; // 3 segundos
        //     let intervalo;
        
        //     const moverCarrusel = () => {
        //         intervalo = setInterval(() => {
        //             if (valorTransform > -(anchoImagen * (imagenes.length - 1))) {
        //                 valorTransform -= anchoImagen;
        //                 backgroundCarrusel.style.transform = `translateX(${valorTransform}px)`;
        //             } else {
        //                 clearInterval(intervalo);
        //                 valorTransform = 0;
        //                 backgroundCarrusel.style.transform = `translateX(${valorTransform}px)`;
        //                 moverCarrusel();
        //             }
        //             actualizarEstadoBolas();
        //         }, tiempoEntreMovimientos);
        //     };
        
        //     moverCarrusel();
        
        //     const moverCarruselManual = (direccion) => {
        //         clearInterval(intervalo);
        //         if (direccion === 'derecha') {
        //             if (valorTransform > -(anchoImagen * (imagenes.length - 1))) {
        //                 valorTransform -= anchoImagen;
        //             }
        //         } else {
        //             if (valorTransform !== 0) {
        //                 valorTransform += anchoImagen;
        //             }
        //         }
        //         backgroundCarrusel.style.transform = `translateX(${valorTransform}px)`;
        //         moverCarrusel();
        //         actualizarEstadoBolas();
        //     };
        
        //     botonSiguiente.addEventListener('click', () => moverCarruselManual('derecha'));
        //     botonAnterior.addEventListener('click', () => moverCarruselManual('izquierda'));
        
        //     const actualizarEstadoBolas = () => {
        //         const indiceImagenVisible = Math.abs(valorTransform) / anchoImagen;
        //         bolas.forEach((bola, indice) => {
        //             if (indice === indiceImagenVisible) {
        //                 bola.classList.add('activo');
        //             } else {
        //                 bola.classList.remove('activo');
        //             }
        //         });
        //     };
        // });

        
/* --- lenguaje ---*/
const flagsElement = document.getElementById("flags");
const textToChangeElements = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    try {
        const requestJson = await fetch(`./json/${language}.json`);
        if (!requestJson.ok) {
            throw new Error('Failed to fetch JSON');
        }
        const texts = await requestJson.json();
        textToChangeElements.forEach((textToChange) => {
            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            textToChange.innerHTML = texts[section][value];
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

