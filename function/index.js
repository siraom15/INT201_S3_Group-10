import { random } from './myFunction.js';

let randomInArray1 = random(['a', 'b', 'c', 'd', 'e']);
console.log("randomInArray1(0) : " , randomInArray1(0));
console.log("randomInArray1(1) : " , randomInArray1(1));
console.log("randomInArray1(4) : " , randomInArray1(4));

console.log("--------");
let randomInArray2 = random([true, false]);
console.log("randomInArray2() : " , randomInArray2());
console.log("randomInArray2(3) : " , randomInArray2(3));
console.log("randomInArray2(10) : " , randomInArray2(10));
console.log("--------");

let randomInArray3 = random();
console.log("randomInArray3() : " , randomInArray3());