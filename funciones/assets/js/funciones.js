/* Funciones */
function sumar(numero1, numero2){
    /* en caso de quitar el return no devolvera nada por lo cual sumar es indefinido */
    return numero1+numero2;
    console.log("hola desede la funcion");
}
function restar(numero1, numero2){
         document.write(`La resta de ${numero1} y ${numero2} es ${numero1 - numero2} <br>`);
}
/* prueba */
8 == sumar(5,3);

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar(numero1, numero2);
/* Esto hace referencia la DOM */
/* se llaman backstick-template string habilitan el uso de texto con javascript aqui se pueden utilizar etiquetas html*/
/* puede ser utilizado en el consumo de api más adelanta */
document.write(`La suma de ${numero1} y ${numero2} es ${suma}`);
