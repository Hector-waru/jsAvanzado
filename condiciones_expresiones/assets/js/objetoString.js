let cadena1 = "hola";
console.log(cadena1);

let cadena2 = new String;//objeto string
cadena2 = 'Adios';
console.log(cadena2);

/* let arreglo= new Array(1);
console.log(arreglo) */

/*  */
console.log(cadena2.toLowerCase().includes('a'));
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

/* cohersion js en automatico pasa de un tipo de dato en otro */
console.log(cadena1.toLowerCase());

/* funcion que regresa  */
let palabra = "Hola Mundo";
let arreglo = palabra.split("");
console.log(arreglo);
/* console.log(arreglo.reverse()); */

console.log(arreglo.reverse().join(""));


function invertir(cadena){
    let arreglo = cadena.split("");//separa cadena
    arreglo.reverse();//invierte cadena
    let cadenaInvertida=arreglo.join("");//une los elementos como string
    return console.log(cadenaInvertida);
}
function invertirUpgrade(cadena){
    return document.write(cadena.split("").reverse().join(""));
}
invertir("Hectoronja");

//la mejora 
invertirUpgrade("Hectoronja");

let cadenaAconvetir = document.getElementById('cadenaRe');
let inversor = cadenaAconvetir;

function invertirUpgradePlus(cadena){
    let inversor = document.getElementById('cadenaRe');
    invierte = inversor.split("").reverse().join("");
    document.write(invierte);
}