var RollNumber, m1 = 80, m2 = 80, m3 = 80, total;
var avg;
total = m1 + m2 + m3;
avg = total / 3.0;
console.log("\nTotal is....... %d", total);
console.log("\nAverage is..... %5.2f %", avg);
if (avg >= 60)
    console.log("\nGrade : A");
else if ((avg >= 50) && (avg < 60))
    console.log("\nGrade : B");
else if ((avg >= 40) && (avg < 50))
    console.log("\nGrade : C");
else
    console.log("\nGrade : F");
