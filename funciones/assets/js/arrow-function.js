const sumar = (numero1, numero2) => {
    return numero1+numero2;
}
/* entrada y alojamiento de la suma - antes de utilizarlas deben estar declaradas */
let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));
let suma = sumar(numero1, numero2);

document.write(`La suma de ${numero1} y ${numero2} es ${suma}`);