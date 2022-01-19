/* let $titulo = document.getElementById('titulo');
titulo.textContent='Escrito desde JS'; */

/* Metodos modernos */
/* Entra a elemento como si fuera css #<--id, clase y etiqueta es a donde apunta */
let $titulo = document.querySelector('#titulo');
$titulo.textContent= 'Titulo desde js';
/* el primero que coincida lo trae */
let  $parrafo = document.querySelector('p');
/* console.log($parrafo.textContent); */
/* todo lo que se encuentre en forma de un arrray */
let $parrafoS = document.querySelectorAll('p');
/* console.log($parrafoS);
console.log($parrafoS[1].textContent); */

/* hacerlo asi es como las paginas cuando le pones ver mas */
/* crear elementos en memoria, pero aun no esta insertado en el html */
let subtitulo = document.createElement('h3');
/* modificacion de elemento */
subtitulo.textContent= 'Este es un subtitulo desde JS';
/* Insetar se va a la ultima parte aqui - se ve en insertAdjacent */
/* document.body.append(subtitulo); */

let $contenido = document.querySelector('#contenido');
/* 
console.log($contenido.textContent='<br>');
permite agregar etiquetas html 
console.log($contenido.innerHTML = '<br>');
modifico todo lo desde el contenido (div) recuperar - modificar son sus funcionamientos  
console.log($contenido.outerHTML = 'Hola'); 
*/

/* Añadir elemento como hijo */
let contenidoParrafo= document.createElement('p');
contenidoParrafo.textContent='Contenido de mi nuevo parrafo';
/* aqui se agruega dentro del elemento pero al final */
$contenido.appendChild(contenidoParrafo);

/* 
Metodos insertAdjacent - Más versatil que appendChild 
trabaja a nivel de hermanos dependiendo del metodo que se elige 
me dirigo a titulo para inserta un elemento alado de ti, despues de que termines 
*/
$titulo.insertAdjacentElement('afterend', subtitulo)
$titulo.remove();//aqui ya no se encontraria el titulo