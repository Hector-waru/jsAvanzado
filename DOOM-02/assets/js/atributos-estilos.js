let $titulo = document.querySelector('#titulo');
let $texto =  document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style= 'color: red; font-size: 24px;' */
/* 
Ahora del css al js lo hacemos dinamico llamando nuestra clase
Agregar toso por separado se le estaria asignando a todo el texto la clase y varias clases 
$texto.className = 'bg-purple';
$texto.className = 'h3';
*/
$texto.className = 'bg-purple h3';
/* agrega o remueve elementos*/
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');

