// task 1 :
const money = 200 ;

if(money > 500){
    let coke = 0 ;
    console.log("I got free coke by buying food of "+ money + " tk and coke price: " + coke);
}
else{
    let coke = 30 ;
    console.log("I don't get free coke by buying food of "+ money + " tk and coke price: " + coke);
}

// task 2 :
const weight = 40 ;
const height = 1.57 ; /**5.2 inc = 1.5748m */

const BMI = weight / height**2 ;

if(BMI < 18.5){
    console.log("You are underweight.")
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("You are normal")
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight.")
}
else{
    console.log("You are obese")
}

// Task 3

let myPoint = 70;

if(myPoint >= 90){
    console.log('My grade : A');
}
else if(myPoint >= 80 && myPoint < 90){
    console.log('My grade : B')
}
else if(myPoint >= 70 && myPoint < 80){
    console.log('My grade : C')
}
else if(myPoint >= 60 && myPoint < 70){
    console.log('My grade : D')
}
else{
    console.log('You are Failed')
}
