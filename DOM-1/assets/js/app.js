let Titulo = document.getElementById('Titulo');

console.log(Titulo);
Titulo.textContent='Este titulo es escrito desde javascript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
/* Los parrafos los tiene en un arreglo o colección*/
/* parrafos[0].textContent = 'Parrafos escritos desde javascript'; */

/* for(let i =0; i<=parrafos.length; i++){
    parrafos[i].textContent= 'Parrafo'+ i +'escritos desde javascript';
} */
let email= document.getElementById('email');
let password= document.getElementById('password');

function getInformation(){
       console.log(email.value);
       console.log(password.value);
}