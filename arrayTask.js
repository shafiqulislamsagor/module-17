// Task 1
const fruits = ['Apple' ,'Orange' ,'Lotkon' ,'Banana' ,'Mango'];

console.log(fruits[3]);

fruits[2] = 'Jambura';
console.log(fruits);

// Task 2
const tourist = ['Modutila' ,'Gojni' ,'Safari'];

tourist.push('GreenPark');

tourist.push('goldenPark', 'BluePark');

tourist.pop();

console.log(tourist);

// Task 3

const books =['English' ,'Bangla' ,'Math' ,'JavaScript' ,'Java'];

let search = books.includes('JavaScript');


console.log('JavaScript book ase ki: ' + search);

// Task 4 

const string = 'String';
const numbers = 52;
const bolean = true;

const str_array = ['hi' , 'hlw' , ' kmn aso' ,
'ki' ,' koro'];
const num_array = [20,23,55,62,442,332,22];
const bol_array = [true ,false , true,false,false];

console.log(Array.isArray(string))
console.log(Array.isArray(numbers))
console.log(Array.isArray(bolean))
console.log(Array.isArray(str_array))
console.log(Array.isArray(num_array))
console.log(Array.isArray(bol_array))


// Task 5

const roll = [20,25,24,26,35,25,36,29,55];
const nam = ['sagor','habiba','safa','sidratul'];

const added = roll.concat(nam);

console.log(roll);
console.log(nam);
console.log(added);
