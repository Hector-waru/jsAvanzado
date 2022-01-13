/*
Solucion individual que se fue adelantando en lo que se resolvian algunas cosas
let Producto=parseInt(prompt('Producto'));
let descuento;
let cuponDescuento = 'Oro';

switch(cuponDescuento){
    case 'Bronce':
        descuento = .95;
        console.log(`El producto con valo de ${Producto} pesos wueda en un precio de ${Producto * descuento}`);
        break;
    case 'Plata':
        descuento = .90;
        console.log(`El producto con valo de ${Producto} pesos wueda en un precio de ${Producto * descuento}`);
        break;
    case 'Oro':
        descuento=.80;
        console.log(`El producto con valo de ${Producto} pesos wueda en un precio de ${Producto * descuento}`);
        break;
    case 'Platino':
        descuento=.75;
        console.log(`El producto con valo de ${Producto} pesos wueda en un precio de ${Producto * descuento}`);
        break;    
    default:
        console.log('Cupon erroneo');
        break;
} */
/* Solucion grupal */

var getCupon = () => {
    if(isNaN(document.getElementById("precio").value)){
        document.getElementById("respuesta").innerHTML = `Eso no es un numero`;   
    }else{
        let precio = parseInt(document.getElementById("precio").value);
        let cupon = document.getElementById("cupon");
        /* aqui se recupera el valor del cupon en donde ya en sí recupero el string */
        switch (cupon.value) {
            case "Bronce":
                total = precio * 0.95;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Plata":
                total = precio * 0.90;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Oro":
                total = precio * 0.80;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            case "Platino":
                total = precio * 0.75;
                document.getElementById("respuesta").innerHTML = `${total}`;
                break;
            default:
                document.getElementById("respuesa").innerHTML='cupon no valido'
                break;
        }
    }
}


