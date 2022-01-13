let hora = parseInt(prompt('Que hora es?'));
if(hora >= 6 && hora <= 11 ){
    console.log('Buenos dias');
}else if(hora >= 12 && hora <=18){
    console.log('Benas tarades');
}else if(hora >= 19 && hora <= 23){
    console.log('buenas noches');
}else{
    console.log('dejame dormir')
}