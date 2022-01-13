/* Flujo en el que se ejecutan las declaraciones */
let miVariable=10;
console.log(miVariable);

/* 
console.log(miVariable);
let miVariable=10; 
las ordenes van de arriba a abajo po eso este da error
*/
/* Estructuras de control de flujo */
let edad = 18;
let ine = true;

if(edad>=18 && ine == true){
   console.log('puedes entrar');
}
/* operador ternario */
(edad >=18) ? console.log('Mayor de edad'):
console.log('Menor de edad');
/*``  */
let preguntaedad= `tengo ${edad} años y soy ${(edad>=18) ? 'Mayor' : 'menor'} de edad`;

console.log(preguntaedad);

/* switch(Variable a evaluar){
     case valor:
         -codigo a ejecutar-
         break;
} */
let dia = 2;

switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;    
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
    default:
        console.log('No es un dia');
        break;
}

let descuento;
let cuponDescuento = 'Oro';

switch(cuponDescuento){
    case 'Bronce':
        descuento = 5;
        break;
    case 'Plata':
        descuento = 10;
        break;
    case 'Oro':
        descuento=15;
        break;
    default:
        console.log('Cupon erroneo');
        break;
}
console.log(descuento);
