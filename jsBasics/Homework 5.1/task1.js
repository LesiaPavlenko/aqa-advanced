// Student success rate check-up (using if...else)

let averageGrade = 91; // I used 'let' not 'const' (as in the example)

if (averageGrade < 60) { 
    console.log("Unsatisfied ((");
} else if (averageGrade <= 70) {
    console.log("Satisfied.");
} else if (averageGrade <= 80) {
    console.log("Good!");
} else if (averageGrade <= 90) {
    console.log("Very good!");
} else if (averageGrade <= 100) {
    console.log("Excellent!!");
} else {
    console.log("Please give me your grade (between 0 and 100)"); //check for invalid input
}
