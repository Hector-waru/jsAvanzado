

function adivinar(){
    let numeroDivinar=75;
    let number=parseInt(document.getElementById('number').value);

    if(number === numeroDivinar){
    document.write('Felicidades has ganado');
   }else if(number>=70 && number<=80){
    document.write('calienteee');
   }else if(number>=65 && number<=85){
    document.write('caliente');
   }else if(number>=55 && number<=95){
    document.write('tibio');
   }else if(number>=45 && number<100){
    document.write('frio');
   }else if(number>=40 && number<=100){
    document.write(`<br> congelado`);
   }else{
       document.write('te hiciste una paleta');
   } 
}
 /* abs() */
