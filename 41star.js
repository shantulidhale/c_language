var num = 10;
var string = "";
for (var i = 1; i <= num; i++) {

    for (var j = num; j > i; j--) {

        string = string + " ";
    }
    for (var k = 0; k < i * 2 - 1; k++) {

        string = string + "*";
    }
    string = string + "\n";
}
for (var i = 1; i <= num - 1; i++) {

    for (var j = 0; j < i; j++) {

        string = string + " ";
    }
    for (var k = (num - i) * 2 - 1; k > 0; k--) {

        string = string + "*";
    }
    string = string + "\n";
}
console.log(string);