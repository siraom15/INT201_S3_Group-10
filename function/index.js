import { random } from './myFunction.js';

let randomInArray1 = random(['a','b','c','d','e']);
console.log(randomInArray1(0));
console.log(randomInArray1(1));
console.log(randomInArray1(4));

let randomInArray2 = random([true,false]);
console.log(randomInArray2());
console.log(randomInArray2(3));
console.log(randomInArray2(10));

let randomInArray3 = random();
console.log(randomInArray3());