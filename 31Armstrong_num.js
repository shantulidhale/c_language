var num = 153;
var rem;
var sum = 0;
var temp;
temp = num;
while (num != 0) {
    rem = num % 10;
    sum = sum + rem * rem * rem;
    num = parseInt(num / 10);

}
if (temp == sum) {

    console.log("ARMSTRONG NUMBER ...");


}
else {

    console.log("NOT AN ARMSTRON NUMBER");

}