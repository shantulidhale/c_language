
var num = 10;
var i, j;
var string = "";

for (i = 1; i <= num; i++)

    string = string + "*";

for (i = 2; i <= num; i++) {

    string = string + "*";

    for (j = 2; j <= num; j++) {
        string = string + " ";

        string = string + "*";

    }
    for (i = 1; i <= num; i++) {
        string = string + "*";


    }
}
string = string + "\n";

console.log(string);
