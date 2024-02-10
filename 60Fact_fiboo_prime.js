
function shantuli() {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;

}
function primenumber(num) {
    var flag = 1;
    for (var i = 1; i <= num; i++) {
        if (num % 2 == 0) {
            flag++;
        }
    }
    if (flag == 1) {
        console.log("number is prime");

    }
    else {
        console.log("number is not prime");
    }
}

function fibonacii(num) {
    var a = 0, b = 1, c = 0;
    for (var i = 1; i <= num; i++) {
        c = a + b;
        console.log(a + ' ');
        a = b;
        b = c;
    }
}

var num = 5;
var result = shantuli(num);
console.log(result);
primenumber(num);
fibonacii(num);