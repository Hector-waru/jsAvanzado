/* let miObjeto = {
    //pares de clave valor
    nombre: 'Hector Garcia'
    
}; */
let nombre = 'Hector Garcia';
let edad = 25;
let dirrecion = 'Ecatepec Establo de Mexico';
let numero = 55555555;

//objeto = {Contenido separado por una coma}
let persona = {
    Nombre: {
        apellidoPaterno: 'Garcia',
        apellidoMaterno: 'Ortiz',
        nompre: 'Hector'
    },
    Edad: 25,
    Dirrecion: 'Ecatepec, Estado de mexico',
    Numero: [5555555555,5555224321]
}; 
//ejercicio
/* producto -  objeto */
let tennis = {
    tipo: {
        Casual: 'Converse',

        Deportivo: {
            Futbol:'Adidas',
            Basketball: 'Nike',
            Skaboarding: 'Nike SB',
            Running: 'Reebok',
        },
    },
    tallaCh: [25,26,27,28,29,30] ,
    Year:[2021,2020,2019],
};
console.log(tennis.tipo.Deportivo.Basketball);