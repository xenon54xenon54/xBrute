function test(x, y, z) {
    return (((x) == (1)) && ((y) == (2)) && ((z) == (3)));
}
var answers = 0;
for (i = -20; i < 20; i = i + 1) {
    var x = i;
    for (n = -20; n < 20; n = n + 1) {
        var y = n;
        for (e = -20; e < 20; e = e + 1) {
            var z = e;
            if (test(x, y, z) == true) {
                console.log(x + "," + y + "," + z);
                answers = answers + 1;
                if (answers == 1) {
                    break;
                }
            }
        }
    }
}