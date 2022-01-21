//clase
class Animalito{
    //definicion de atributos
    //revisado estaba en false
    constructor(nombre, edad, especie, revisado){
        //crea variable interna y guarda valores, apuntadores
        this.nombre=nombre;
        this.edad=edad;
        this.especie=especie;
        this.enfermo=false;
        this.revisado=revisado;
    }
    //Encaosulamiento

    //metodos
    saludar(){
        return console.log(`hola mi nombre es ${this.nombre}`)
    }

}

class Veterinario{
    constructor(){
        this.cantidadPacientes=0;
        this.pacientesRevisados=0;
        this.listaPacientes=[];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        /* this.pacientesRevisados ++; */
        let mensaje = `paciente agregado <br>`;
        return document.write(mensaje);
    }
    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }
    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            /* this.pacientesRevisados+=1; */
            document.write(`El paciente fue revisado`);
        }else{
            document.write(`El paciente ya fue revisado`);
        }
    }
    mostrarLista(){
        document.write(`Estos son los pacientes atendidos: <br>`); 
        for(let i=0; i < this.listaPacientes.length; i++){
            document.write(this.listaPacientes[i].nombre + `<br>`);
        }
        document.write(`La cantidad de pacientes atendidos es: ${this.cantidadPacientes} y los pacientes revisados son ${this.pacientesRevisados} <br>`);
    }

}
const veterinarioFran = new Veterinario();
//objeto de la clase animaliato
const Animalito1=new Animalito('Scooby','5 años', 'perro',false);
const Animalito2=new Animalito('bmo','3 años', 'gato',true);

console.log(Animalito1);
veterinarioFran.agregarPaciente(Animalito2);
console.log(veterinarioFran.listaPacientes);

veterinarioFran.agregarPaciente(Animalito1);
veterinarioFran.mostrarLista();

veterinarioFran.revisarPaciente(Animalito2);
veterinarioFran.mostrarLista();
//operador de corto circuito
let variable = 0;
console.log(variable)

veterinarioFran.revisarPaciente(Animalito1);
veterinarioFran.mostrarLista();
