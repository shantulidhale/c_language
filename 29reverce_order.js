
var number = 1634;

var rem = 0;
var rev;
while (number > 0) {

    rev = number % 10;
    rem = rem * 10 + rev;
    number = Math.floor(number / 10);
}
console.log("Reversed number is : " + rem)