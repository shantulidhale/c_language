var num = 66;
var i, j, k;
var string = "";
for (i = 1; i <= num; i++) {

    for (k = 1; k <= (num - i); k++) {

        string = string + " ";
    }
    for (j = 1; j <= i; j++) {

        string = string + 64 + i;
    }
    for (j = 2; j <= -i; j++) {

        string = string + 64 + i;
    }
    string = string + "\n";
}
console.log(string);
