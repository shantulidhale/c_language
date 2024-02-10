var x, r1 = 10, r2 = 20, a, b, c;

x = b * b - 4 * a * c;
r1 = (-b + x) / 2 * a;
r2 = (-b - x) / 2 * a;
if (x > 0)
    console.log(" Roots are unequal... ");
else if (x < 0)
    console.log(" Roots are imaginary... ");
else
    console.log("Roots are same....");
console.log("R1 = ", r1);
console.log("R2 = ", r2);
