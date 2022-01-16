let numeros = [1,2,5,4,5,0,5,5,5,41,4,456,10];

/* contiene una funcion() vacia que se crea y libera memoria- elemento,indice,arreglo */
/* numeros.forEach(function(numero){
    document.write(numero);
}); */
/* funciones flechas anonimas tomar en cuenta que si necesitamos dos parametros usaremos los dos parentesis y despues la funcion*/
numeros.forEach(elemento =>{
    document.write(elemento + ', ');
});
/* crea un arreglo de un arreglo - crea un arreglo diferente */
/* Se pueden hacer modificaiones */
let numeros2 = numeros.map(function(elemento){
    return elemento*2;
});
document.write(`<br>`+numeros2);
/* Esto demuestra que apunta a la misma dirreccion y usando .map crea un nuevo arreglo con diferente asignacion de memoria */
/* let frutas = ['uva','mango', 'pitalla']
document.write(`<br>` + frutas + `<br>` );
let frutas2 = frutas;
document.write(`<br>` + frutas2 + `<br>`);

frutas2.push('pera');
document.write(`<br>` + frutas + `<br>` );
document.write(`<br>` + frutas2 + `<br>`); */


/* includes - muestra si el elemento esta o no */
document.write(`<br>`+numeros.includes(123)+`<br>`);

/* filter - filtro de elementos */

let numerosPares = numeros.filter((elemento)=>{
  /*   if(elemento % 2 == 0){
return true;//elemento par - quieres incluirlo si lo cumple?
    }else{
        return false;
    } */
   /*  return elemento % 2 == 0; */
   if(elemento>10){
       return true;
   }
});

document.write(`<br>`+ numerosPares +`<br>`);

let frutas = ['Uva','Mango','Pitalla','Mango', 'Pitalla','Mango', 'Pitalla'];

let frutasFiltro = frutas.filter((fruta)=>{
    /* if(fruta.contains('i')== true){
        return true;
    } */
   /*  if(fruta.includes('i')){
        return true;      
}*/
    return fruta.toLowerCase().includes('a');
});
document.write(`<br>` + frutasFiltro + `<br>` );

let otrosNumeros = [9,7,5,8,4,1,3,2,6];
document.write(`<br>`+otrosNumeros.sort() +`<br>` );
document.write(`<br>`+frutas.sort() +`<br>` );
document.write(`<br>`+otrosNumeros.reverse() +`<br>` );

let frutaEncontrada =frutas.find((ele)=>{
    return ele.toLowerCase().includes('mango');
});
document.write(`<br>`+frutaEncontrada+`<br>` );
