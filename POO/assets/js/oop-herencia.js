//herencia
class Pokemon{
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo = tipo;
    }
    atacar(){
        return console.log(`${this.nombre} esta atacando`);
    }
}
//hijo-padre
class Pikachu extends Pokemon{
    /*  */
    constructor(nombre, tipo, edad){
        /* ya se pueden usar tipo y nombre pues ya los trae de la clase edad */
        super(nombre, tipo);
        this.edad=edad;
    }
    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando a Raichu`);
    }
}
const Pikachu1 = new Pikachu('juan','Electrico', 3);
console.log(Pikachu1);
Pikachu1.atacar();

const Pokemon1 = new Pokemon('charmander','fuego');
Pokemon1.atacar();