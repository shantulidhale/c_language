var num = 5;
var i, j;
var string = "";
for (i = num; i >= 1; i--) {

    for (j = 1; j <= i; j++) {

        string = string + "*";
    }
    string = string + "\n";
}
console.log(string);