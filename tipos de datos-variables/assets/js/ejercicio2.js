let yBirth = document.getElementById("yBirth");

let resultado = document.getElementById("age");

function agecal(){
let currentAge=2022;
let newC = currentAge-(yBirth.value);
/* tengo que revisar como acceder al value sin necesidad de metodo si no recuperarlo directo */
    resultado.textContent='UR '+ newC + ' years old';
}