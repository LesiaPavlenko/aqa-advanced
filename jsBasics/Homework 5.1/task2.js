// Student success rate check-up (using switch)

let averageGrade = 91;
let grade = "";

switch (true) {
  case (averageGrade >= 91 && averageGrade <= 100):
    grade = "Excellent!!!";
    break;
  case (averageGrade >= 81 && averageGrade <= 90):
    grade = "Very good!";
    break;
  case (averageGrade >= 71 && averageGrade <= 80):
    grade = "Good.";
    break;
  case (averageGrade >= 60 && averageGrade <= 70):
    grade = "Satisfied.";
    break;
  case (averageGrade >= 0 && averageGrade < 60):
    grade = "Unsatisfied!";
    break;
  default:
    grade = "Please give me your grade (between 0 and 100)"; // Handle invalid input
    break;
}
console.log("Your homework result:", grade);

