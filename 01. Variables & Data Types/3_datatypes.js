/* Data Types:
Primitive Types: Number, String, Boolean, Null, Undefined, BigInt, Symbol. 
*/

let fullName = "Tamim Iqbal";
let age = 22;
let a = null;
let x;
let isRich = true;

console.log(typeof fullName);                   //output: string
console.log(typeof age);                        //output: number
console.log(typeof a);                          //output: object
console.log(typeof x);                          //output: undefined
console.log(typeof isRich);                     //output: boolean


// String to Number:
let applePrice = 20;
let orangePrice = 30;
let pineapplePrice = "40";

let sum1 = applePrice + orangePrice;
console.log(sum1);                    //output: 50
let sum2 = applePrice + pineapplePrice;
console.log(sum2);                    //output: 2040 (not 60 because pineapplePrice is string, and sum2 is also string due to type coercion)
console.log(typeof sum2);            //output: string

// String to Number Conversion:
let sum3 = applePrice + Number(pineapplePrice);
let sum4 = applePrice + parseInt(pineapplePrice);
console.log(sum3);                    //output: 60
console.log(sum4);                    //output: 60
console.log(typeof sum3, typeof sum4);             //output: number number

// float
let f = 20.36;
console.log(parseInt(f));                   //output: 20
console.log(parseFloat(f));                 //output: 20.36
console.log(Number(f));                     //output: 20.36

// text 
let text = "hello";
console.log(Number(text));             //output: NaN

// toFixed() method: It converts a number into a string, keeping a specified number of decimals.
let pi = 3.1416;
console.log(pi.toFixed(2));           //output: 3.14
console.log(typeof pi.toFixed(2));    //output: string