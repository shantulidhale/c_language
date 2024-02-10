var n = 5;
var i, j, k, n;;
var start = "";
for (i = n; i >= 1; i--) {
    for (k = 1; k <= (n - i); k++) {
        start = start + " ";
    }
    for (j = 1; j <= i; j++) {
        start = start + "*";
    }
    start = start + "\n";
}
console.log(start);