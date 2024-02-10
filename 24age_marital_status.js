var age;
var MaritalStatus, Gender;

if (MaritalStatus == 'm') {
    console.log("You can not marry!");
}
else if (MaritalStatus == 'u') {
    if (Gender == 'm') {
        if (age >= 21)
            console.log("You can marry!");
        else
            console.log("You can not marry!");
    }
    else if (Gender == 'f') {
        if (age >= 18)
            console.log("You can marry!");
        else
            console.log("You can not marry!");
    }
    else
        console.log("Invalid input Gender");
}
else
    console.log("Invalid input Marital Status ");
