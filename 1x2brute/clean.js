function test(x) {
    return ((/*Left side*/) == (/*Right side (usually 0)*/));
}
var answers = 0;
for (i = -20; i <= 100; i++) {
    if (test(i)) {
        console.log(i);
        answers = answers + 1;
    }
    if (test(i) && answers == 2) {
        break;
    }
}
