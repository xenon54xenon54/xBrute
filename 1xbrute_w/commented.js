/*
Copy this entire script and paste it into your browser's console. Make sure to change the test function to run the right equation, and if your answer is greater or lesser than the parameters, make sure to change those too.
*/
function test(x) {
    return ((/*first side*/) == (/*other side*/));/*Defines the equation. Write over and remove comments.*/
}
var start = 0 /*Change this to move the starting point of guesses.*/
var max = 100 /*This is the max value the code runs through. Move your the start up before you move the ceiling down.*/
var increment = 1 /*This controls how often the script checks a number. 1 checks every integer, lower checks more, more checks less. Make sure the max is a multiple of the increment to keep the program from going higher.*/
for (i = start; i <= max; i+increment) {
    if (test(i)) {
        console.log(i);/*Prints the answer.*/
        break;/*Ends the program when it gets to the right answer so it doesn't have to run through more wrong answers.*/
    }
}
