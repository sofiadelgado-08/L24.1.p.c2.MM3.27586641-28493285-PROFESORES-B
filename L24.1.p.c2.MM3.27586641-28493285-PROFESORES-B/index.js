import Cl_profesor from "./js/Cl_profesor.js";
import Cl_fijo from "./js/Cl_fijo.js";
import Cl_contratado from "./js/Cl_contratado.js";

export default class Cl_main {
    constructor(){
    
        let contratado = new Cl_contratado ("rafael", 30);
        let contratado2 = new Cl_contratado ("felicia", 30);
    }
}
/*console.log(contratado.ingresoTotal());*/

