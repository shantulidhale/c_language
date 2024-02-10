var a = 10;
var b = 20;
var c = 30;

if ((a >= b) && (a >= c)) {
    if (b >= c) {
        console.log("\n Descending order :  ", a, b, c);
        console.log("\n Ascending order :  ", c, b, a);
    }
    else {
        console.log("\n Descending order :  ", a, c, b);
        console.log("\n Ascending order :  ", b, c, a);
    }
}
else if ((b >= a) && (b >= c)) {
    if (a >= c) {
        console.log("\n Descending order :  ", b, a, c);
        console.log("\n Ascending order :  ", c, a, b);
    }
    else {
        console.log("\n Descending order :  ", b, c, a);
        console.log("\n Ascending order :  ", a, c, b);
    }
}
else if ((c >= a) && (c >= b)) {
    if (a >= b) {
        console.log("\n Descending order :  ", c, a, b);
        console.log("\n Ascending order :  ", b, a, c);
    }
    else {
        console.log("\n Descending order :  ", c, b, a);
        console.log("\n Ascending order :  ", a, b, c);
    }
}
