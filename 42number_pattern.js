var num = 4;
var i, j;
var string = "";

for (i = 1; i <= num; i++) {

    for (j = 1; j <= i; j++) {

        string = string + j;

    }
    string = string + "\n";
}
console.log(string);