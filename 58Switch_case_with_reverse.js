var num = 512, rem = 0;
while (num > 0) {
    rem = num % 10;
    switch (rem) {
        case 0: console.log("Zero"); break;
        case 1: console.log("One"); break;
        case 2: console.log("Two"); break;
        case 3: console.log("Three"); break;
        case 4: console.log("Four"); break;
        case 5: console.log("Five"); break;
        case 6: console.log("six"); break;
        case 7: console.log("seaven"); break;
        case 8: console.log("Eight"); break;
        case 9: console.log("Nine"); break;
    }
    num = parseInt(num / 10);
}