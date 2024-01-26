/**
 * Ternary operator
 * 
 * ternary three parts 
 * 
 * Condition ? do something when true : do something when false;
 * 
 */
// const age = 18 ;

// age >= 18 ? console.log("You can vote !!!") : console.log("You cann't vote !!!")

let price = 10000 ;
const isLeader = true;

// if(isLeader === true) {
//     price = 0;
// }
// else{
//     price = price + 500;
// }
// console.log(price)

// price = isLeader === true ? 0 : price + 200 ;
// console.log(price)

price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price;

console.log(price);