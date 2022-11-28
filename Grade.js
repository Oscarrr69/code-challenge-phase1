//codethat prompts user to enter marks
const gg = require("prompt-sync");
const prompt = gg();


function grade(){
    //ask user for input
    let studentMarks = prompt("Enter marks:");
    //evaluate the grade of the student
if (studentMarks >=79) {
    console.log('A');
} else if (studentMarks >= 60 && studentMarks < 79) {
    console.log('B');
} else if (studentMarks >= 50 && studentMarks < 59) {
    console.log('C');
} else if (studentMarks >= 40 && studentMarks <49) {
    console.log('D');
} else if (studentMarks <40 && studentMarks > 0) {
    console.log('E');
} else {
    console.log('N/A');
}
}
grade();