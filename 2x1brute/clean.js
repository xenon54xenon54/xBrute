function test(x, y) {
    return (((/*First side*/) == (/*Second side*/)) && ((/*First side*/) == (/*Second side*/)));
}
var answers = 0;
for (i = -20; i < 20; i++) {
    var x = i;
    for (n = -20; n < 20; n++) {
        var y = n;
        if (test(x, y) == true) {
            console.log(x + "," + y);
            answers = answers + 1;
            if (answers == 1) {
                break;
            }
        }
    }
}
