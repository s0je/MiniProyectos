import { Person } from "./person";

let person1 = new Person ("T'Challa", "wakandiano", "director", 5);
let person2 = new Person ("Wanda", "sockoviana", "developer", 4);
let person3 = new Person ("Natash","rusa","manager",10);
let person4 = new Person ("Bruce", "americano","tester",5);
let person5 = new Person ("Tony","americano","developer",10);

console.log(person1.printAll());
console.log(person2.printAll());
console.log(person3.printAll());
console.log(person4.printAll());
console.log(person5.printAll());
console.log(person1.printValor());
console.log(person2.printValor());
console.log(person3.printValor());
console.log(person4.printValor());
console.log(person5.printValor());
console.log(person1.isEqual(person2));