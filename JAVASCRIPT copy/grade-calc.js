document.querySelector('form').addEventListener('submit', checkAge)

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