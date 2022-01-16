
/* primero nuestro array */
let nuNumeros=new Array();
nuNumeros=[1,2,3,54,56,1,0,2,1,5,1,5,74,5,9,6,4,7,8,8];
/* variables a retornar */
let suma=0;
let flag=0;
nuNumeros.forEach(element => {
    /* si no devuelvo mi flag y suma no regresa la que se hizo por lo tanto mis valores deben de tener a donde regresar */
    suma+=element;
    flag+=1;
    return (suma, flag);
});
document.write(`<br> la suma es; ${suma} con ${flag} numeros para un promedio de: ${suma/flag} <br>`); 
/* let nuNumeros=[1,2,3,54,56,1,0,2,1,5,1,5,74,5,9,6,4,7,8];
let suma=0;
for(i=0; i < nuNumeros.length; i++){
    suma+=nuNumeros[i];
}
let promedio = suma / nuNumeros.length;
document.write('El promedio es '+promedio); */