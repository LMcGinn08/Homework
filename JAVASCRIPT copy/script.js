console.log("Hello World");

// Weird Scope - Don't use
// var x = 5;
// Regular old variable
let y = 6;
y=10; // You can change this value

const z = 7; // This is a constant. Can't be changed
// z=10; // this throws and error.

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); // This does division but returns the remainder
console.log(y**z); // exponents

let fname="Liam ";
let lname="McGinn";
console.log(fname + lname);

console.log('${ fname } ${ lname} ');
console.log('${ fname } ${ 5*9 }');
console.log( lname + 6 );


let user = "Liam";
let pass = "foo";

if (user == "Liam") {
    console.log('you are '  + user);
}

 user = "Liam";
if (user == "Liam") {
    console.log('you are '  + user);
} else {
    console.warn("DENIED")
} 

 user = "Liam";
if (user == "Liam" && pass == "foo") {
    console.log('you are '  + user + ' and your pass is ' + pass);
} else {
    console.warn("DENIED")
} 

const A = 90;
const B = 80;
const C = 70;
const D = 60;
const F = 50;

let myAge = 90;
function checkAge() {
if (myAge <= 80 && myAge >= 89) {
    console.log("You Have a B");
} 

if (myAge >= 90) {
    console.log("you can have an A")
    }

if (myAge >= 70 && myAge <=79 ) {
    console.log("you Have a C")

}

if (myAge>= 60 && myAge <=69) {
    console.log("you have a D")
}
if (myAge <=59 && myAge <=0) {
    console.log("You fail")
}
}

checkAge(9);
checkAge(17);
checkAge(19);
checkAge(37);