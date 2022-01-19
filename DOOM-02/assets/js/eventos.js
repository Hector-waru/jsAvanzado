let $titulo=document.querySelector('#titulo');
let $mensaje=document.querySelector('#mensaje');
let $btnMensaje=document.querySelector('#btnMensaje');
/* Aqui seleccionamos la etiqueta por que solo es una */
let $spanerror=document.querySelector('span');
/* A este boton se le da funcionalidad de evento con - Evento que activa, funcion anonima(sin nombre)= ()=>{}*/
$btnMensaje.addEventListener('click',() =>{
    console.log("no me presiones"); 
});
/* formas de utilizar la maldad para cosas buenas */
$mensaje.addEventListener('keyup',(e)=>{//hace referencia a event
   /*  console.log('Escribiste algo') */
   
   console.log(e.target.value);
/*    console.log(e);*/
   if(e.target.value.length < 3){
    $spanerror.classList.add('error');
    $spanerror.classList.remove('hide');
    

   }else{
    $spanerror.classList.remove('error');
    $spanerror.classList.add('hide');
    
   }
});
/* La funcion no tiene que ser forzosamente anonima sí tenemos una funcion podemos utilizarla sin parentesis
function mostrarMensaje(){
    console.log('Escribiste algo');
}
*/