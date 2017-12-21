var side1_1 = /**/;
var side1_2 = /**/;
var side2_1 = /**/;
var side2_2 = /**/;
function test(x, y) {
    return (((side1_1) == (side1_2)) && ((side2_1) == (side2_2)));
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
