var num = 5;
var i, j;
var string = "";
for (i = 0; i <= num; i++) {

    for (j = 1; j <= i; j++) {

        string = string + j;
    }
    string = string + "1\n";
}
console.log(string);