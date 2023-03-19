import SimCard from "./simCard"
import Battery from "./bateria";

export class Phone {
    private make1: string;
    private modelo: string;
    private simCard: SimCard[];
    private battery: Battery;
    constructor(make1: string, modelo: string, battery: Battery){
        this.make1 = make1;
        this.modelo = modelo;
        this.simCard = [];
        this.battery = battery;
    }
    getInfo(): Phone{
        return this;
    }
    setCard(sim: SimCard){
        this.simCard.push(sim);
    }

}