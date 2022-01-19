/* codigo sincrono */
let variableSincrona;
variableSincrona = 70 * 3;
console.log(variableSincrona);

/* Codigo asincrono */
let variableAsincrona;
/* ejecuta el codigo dentro despues de un tiempo determinado- 2 paramentros funcion anonima y tiempo */
setTimeout(()=>{
variableAsincrona=30*10;//se asigna despues
console.log(variableAsincrona);//se imprime despues de la asignacion

}, 2000);//milisegundos

console.log(variableAsincrona);//se imprime primero
