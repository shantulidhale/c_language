var num = 5;
var i, j, k;
var string = "";
for (i = 1; i <= num; i++) {

    for (k = 1; k < i; k++) {

        string = string + " ";

    }
    for (j = i; j <= num; j++) {

        string = string + "*";
    }
    string = string + "\n";
}
console.log(string);