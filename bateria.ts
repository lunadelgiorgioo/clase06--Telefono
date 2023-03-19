export default class Battery {
    private make: string;
    private capacidad: number;

    constructor(make: string, capacidad: number){
        this.make = make;
        this.capacidad = capacidad;
    }
    getInfo(): Battery {
        return this;
    }
}