var num = 10;
var i, flag = 0, newn;
var string = "";
for (newn = 1; newn < num; newn++) {

    flag = 1;
    for (i = 2; i <= newn / 2; i++) {

        if (newn % i == 0) {
            flag++;
            break;
        }
    }
    if (flag == 0) {
        console.log("Number is  Prime");
    }
    else {
        console.log("Number is not prime");
    }

}

