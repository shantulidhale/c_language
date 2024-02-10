
let num = 5;
let string = "";

for (let i = 1; i <= num; i++) {

    for (let j = 1; j <= num - i; j++) {

        string += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {

        string += "*";
    }

    string += "\n";
}
console.log(string);