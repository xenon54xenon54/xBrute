
function test(x) {
    return ((/*Left side*/) == (/*Right side (usually 0)*/));//Overwrite the comments to put in the equations.
}
var answers = 0;//How many answers you have before solving.
for (i = -20; i <= 100; i++) {//The first is the solution floor, the second is the solution ceiling.
    if (test(i)) {
        console.log(i);//Prints an answer that is true for the given equation.
        answers = answers + 1;//Adds a found solution to the answers variable.
    }
    if (test(i) && answers == 2) {//Change the second answers number to change how many solutions you want to find.
        break;//Ends the loop.
    }
}
