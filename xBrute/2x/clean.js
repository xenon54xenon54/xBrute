function submit(x,y) {
function test(x, y) {
    return ((() == ()) && (() == ()));
}
var answers = 0;
for (i = -20; i < 20; i = i + 1) {
    var x = i;
    for (n = -20; n < 20; n = n + 1) {
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
}