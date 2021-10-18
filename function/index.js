import { random } from './myFunction.js';

let randomInArray1 = random(['a','b','c','d','e']);
console.log(randomInArray1());
console.log(randomInArray1(1));
console.log(randomInArray1(4));

let randomInArray2 = random();
console.log(randomInArray2());
