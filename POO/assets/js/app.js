/* Clases, molde que nos permite crear objetos */
//para clases la primera letra mayuscula
class Animal{
    //constructor funcion que inicia cuando se crea clase
    //caracteristicas
    //atributos
    constructor(nombre, especie){
        console.log('este es un constructor');
        //this permite utilizar las variables dentro de la misma clase
        this.nombre=nombre;
        this.especie=especie;
    }
    //getters y setters
    /* creados con el propositos leer o modificar aatributos */
    /* Encapsulamiento no modificar el valor por fuera de esta clase  */
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;

    }
    
    get getEspecie(){
        return this.especie;
    }
    set setEspecie(){
        return this.especie=especie;
    }
    //Metodos
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`)
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje= document.write(`mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`);
        return mensaje;
    }   
    static saludar(){
        return console.log('hola');
    }
}

const Animal1 = new Animal('Scooby','perro');
console.log(Animal1);

const Animal2 = new Animal('pecas', 'gato');
console.log(Animal2)

Animal1.presentarse();

Animal1.cambiarNombre('sparkles');