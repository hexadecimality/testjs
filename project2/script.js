let num = 50;
if (num < 49) {
    console.log("Wrong!");
} else if (num > 100) {
    console.log("Too much!");
} else {
    console.log("Correct!");
};

(num == 50) ? console.log("Correct!") : console.log("Wrong!");

switch (num) {
    case num < 49:
        console.log("Wrong!");
        break;
    case num > 100:
        console.log("Too much!");
        break;
    case num > 80:
        console.log("Too much again!");
        break;
    case 50:
        console.log("Correct!");
        break;
    default:
        console.log("Something wrong!");
        break;
}