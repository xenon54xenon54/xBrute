function test(x, y) {
    return ((() == ()) && (() == ()));
}
var answers = 0;
for (i = -40; i < 30; i = i + 1) {
    var x = i;
    for (n = -40; n < 30; n = n + 1) {
        var y = n;
        if (test(x, y) == true) {
            console.log(x + "," + y);
            answers = answers + 1;
            if (answers == 2) {
                break;
            }
        }
    }
}