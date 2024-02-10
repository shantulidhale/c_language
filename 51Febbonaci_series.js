var a = 0, b = 1, c = 0;
for (let i = 1; i <= 10; i++) {
    c = a + b;
    console.log(a)
    a = b;
    b = c;
}