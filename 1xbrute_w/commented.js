/*
Copy this entire script and paste it into your browser's console. Make sure to change the test function to run the right equation, and if your answer is greater or lesser than the parameters, make sure to change those too.
*/
function test(x) {
    return ((/*first side*/) == (/*other side*/));/*Defines the equation. Write over and remove comments.*/
}
for (i = 0; i <= 100; i++) {/*Change the first number for the floor, the second for the ceiling. Goes by increments of 1.*/
    if (test(i)) {
        console.log(i);/*Prints the answer.*/
        break;/*Ends the program when it gets to the right answer so it doesn't have to run through more wrong answers.*/
    }
}
