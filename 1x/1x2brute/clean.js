function test(x) {
    return ((x ** 2 - 7 * x - 18) == (0));
}
var answers = 0;
for (i = -20; i <= 100; i++) {
    if (test(i)) {
        console.log(i);
        answers = answers + 1;
        if (answers == 2) {
            break;
        }
    }
}
