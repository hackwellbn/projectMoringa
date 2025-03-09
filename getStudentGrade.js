function getStudentGrade() {
    let marks = prompt("Please enter the student marks (0 to 100):");

    marks = parseInt(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Please enter a valid mark between 0 and 100.");
        return;
    }

    let grade;
    if (marks >= 80 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 60 && marks < 80) {
        grade = 'B';
    } else if (marks >= 50 && marks < 60) {
        grade = 'C';
    } else if (marks >= 40 && marks < 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`The grade for ${marks} marks is: ${grade}`);
}

// Call the function
getStudentGrade();
