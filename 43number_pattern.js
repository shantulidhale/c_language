var num = 4;
var i, j;
var star = "";
for (i = 1; i <= num; i++) {

    for (j = 1; j <= i; j++) {
        star = star + i;

    }
    star = star + "\n";
}
console.log(star);