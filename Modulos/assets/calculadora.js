const sumar = (numero1,numero2)=>{
    return numero1 + numero2;
}
const restar = (numero1,numero2)=>{
    return numero1 - numero2;
}
const multi = (numero2, numero1)=>{
    return numero1 * numero2;
}
const dividir =(numero1, numero2)=>{
    return numero1/numero2;;
}
const mostrarResultados = (operacion,numero1,numero2,resultado)=>{
  //Crear la etiqueta
  const mostrar = document.createElement('h3');
  //contenido de la etiqueta
  mostrar.textContent =`la ${operacion} del numero ${numero1} y ${numero2} es ${resultado}`;
  //
  document.body.appendChild(mostrar);
}

//Export {funciones, a, utilizar}

export{
    sumar, 
    restar, 
    multi, 
    dividir,
    mostrarResultados
}
