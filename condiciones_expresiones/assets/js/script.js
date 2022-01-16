/* operadores aritmeticos 
suma +
resta -
modulo %
division /
multilpicacion *
({[]})
*/
let operacion = 3*5+(10-5);
document.write(`<br>`+operacion);
let operacion2 = 3-5/2*4;
document.write(`<br>`+operacion2);

/* 
operadores relacionales
<,>,<=,>=, ==, ===, !=, !==
*/
//esto es un shortcut alt + shift copia la linea
document.write(`<br>` + (7<7));//no entra en rango
document.write(`<br>` + (7<=7));//entra en el rango
document.write(`<br>` + (7=='7'));//compara valor mas no tipo de dato

let incremento = 5;
incremento += 5;
document.write(`<br>` +incremento);

incremento -=5;
document.write(`<br>` +incremento);

incremento *=5;
document.write(`<br>` +incremento);

incremento /=5;
document.write(`<br>` +incremento);

/*Operador unario
++,--
*/
let sumar=0;

sumar++;
document.write(`<br>` +sumar);

sumar--;
document.write(`<br>` +sumar);

sumar--;
sumar--;
sumar--;
document.write(`<br>` +sumar);

/*  */
for(i=0;i<10;i++){
    /* codigo */
document.write(`<br>`  + 'ciclo padre');
    for (j=0;j<5;j++) {
    document.write(`<br>`  + 'ciclo hijo');}
}
let num =5;
document.write(`<br>`  + (++num));
