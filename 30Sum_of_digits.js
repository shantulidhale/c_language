var num = 22;
var sum = 0;
var rem = 0;

while (num != 0) {

    rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);

}

console.log("sum of digits..", sum);