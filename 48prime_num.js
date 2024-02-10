var num = 97;
var flag = 0;
for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        flag++;
    }
}
if (flag == 2) {
    console.log("number is prime");
}
else {
    console.log("number is  not prime");
}