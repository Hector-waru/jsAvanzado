
const {sumar} = require('./calculadora');

describe('prueba en el componente calculadora', ()=>{
    test('pruebas en la funcion sumar', ()=>{
        expect(sumar(3, 5)).toBe(8);

    });
});

const {restar} = require('./calculadora')

describe('prueba en el componente calculadora', ()=>{
    test('Pruebas en la funcion restar', ()=>{
        expect(restar(5, 3)).toBe(2);

    });
});
//no olvidar poner sudo en el npm run jest
