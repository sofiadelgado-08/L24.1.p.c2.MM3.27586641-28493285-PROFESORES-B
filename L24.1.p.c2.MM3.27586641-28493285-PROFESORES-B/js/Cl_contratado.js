import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor{
    constructor(nombre, bono, cant_horas){
        super(nombre, bono);
        this.cant_horas = cant_horas;
    }
    
    ingresoTotal(){
        return this.bono + (this.cant_horas * 10);
    }
}