/* ./dentro de la misma barra, en una carpeta 
 Especificar que es un modulo mediante el html -- 
 El modulo necesita una peticion http (por eso funciona al abrirlo con lserver)
 */
import { sumar, multi, mostrarResultados } from './calculadora.js';
let resultado = sumar (10,20);
console.log(resultado);
let resultadoMulti = multi(12,36);

mostrarResultados('multi',12,46,resultadoMulti);