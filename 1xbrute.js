function submit1() {
    var x1_1 = document.getElementById("x1_1").value;
    var x1_2 = document.getElementById("x1_2").value;
    function test(x) {
        //var x1_1 = document.getElementById("x1_1").value;
        //var x1_2 = document.getElementById("x1_2").value;
        console.log((x1_1) == (x1_2));
    }
    for (i = -100; i < 100; i++) {
        if (test(i) == true) {
            //document.getElementById("x1").innerHTML = i;
            console.log(i);
            break;
        }
    }
}