import { Videogame } from "./videogame";
import { Platform } from "./platform";
import { Person } from "./person";

let platform1 = new Platform ("PsOne", 1999, "Sony", 32, "First", false, 0, false, "Memory card", "grey");
let platform2 = new Platform ("Nintendo 64", 1990, "Nintendo", 32, "First", false, 0, false, "Memory card", "grey");
let person1 = new Person ("T'Challa", "wakandiano", "director", 5);
let person2 = new Person ("Wanda", "sockoviana", "developer", 4);
let person3 = new Person ("Natash","rusa","manager",10);
let person4 = new Person ("Bruce", "americano","tester",5);
let person5 = new Person ("Tony","americano","developer",10);

let videogame1 = new Videogame ("Zelda", 1998, [person2,person3,person5], "Japon", person1, ["Japones", "Ingles", "Español", "Frances"], [platform1,platform2], 55, 10);
let videogame2 = new Videogame ("Hercules", 1998, [person2,person3,person5, person4], "America", person1, ["Japones", "Ingles", "Español", "Frances", "Aleman"], [platform1,platform2], 40, 7);

console.log(videogame1.printAll());
console.log(videogame1.printValor());
console.log(videogame1.Language("Español"));
console.log(videogame1.Developer(person2));
console.log(videogame1.Plataforma("Nintendo 64"));
