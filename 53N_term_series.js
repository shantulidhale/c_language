let num = 1;
let i, j, sum = 0, fact = 1;

for (i = 1; i <= num; i++) {
    fact = 1;
    for (j = 1; j <= i + 1; j++) {


        fact = fact * j;
        console.log(fact);
        sum = sum + i / fact;
        console.log(sum);
    }

}
// console.log("series", sum);