let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}
console.log();
num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}