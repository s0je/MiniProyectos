import { Platform } from "./platform"; 

let platform1 = new Platform ("PsOne", 1999, "Sony", 32, "First", false, 0, false, "Memory card", "grey");
let platform2 = new Platform ("PsOne", 1999, "Sony", 32, "First", false, 0, false, "Memory card", "grey");

console.log(platform1.isEqual(platform2));
console.log(platform1.printValor());
console.log(platform1.printAll());