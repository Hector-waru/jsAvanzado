/* const numeros = []; */
let numeros = new Array();//los numero tambien pueden ir aqui adentro
numeros = [1,2,5,4,5,0,5,5,5,41,4,456,10];

/* document.write(numeros[5]); `*/
for(i=0; i<numeros.length; i+2){
    document.write(`${numeros[i]} <br>`);

}