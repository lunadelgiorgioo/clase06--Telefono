import Battery from "./bateria";
import { Phone } from "./cellPhone";
import SimCard from "./simCard";

const cod1 = new Battery("china", 600);
const claro = new SimCard("claro", 2281304236);
const miCeluuu = new Phone("galaxy", "A20", cod1);

miCeluuu.getInfo();
console.log(miCeluuu);
miCeluuu.setCard(claro);
console.log(miCeluuu); 