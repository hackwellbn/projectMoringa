function generateGrade() {
    const marks = parseInt(document.getElementById('marks').value);
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      document.getElementById('gradeOutput').textContent = 'Please enter valid marks between 0 and 100.';
      return;
    }
  
    let grade = '';
  
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    document.getElementById('gradeOutput').textContent = `Grade: ${grade}`;
  }
  