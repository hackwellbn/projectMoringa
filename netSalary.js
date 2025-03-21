function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
  
    if ( sNaN(benefits && basicSalary )) {
      document.getElementById('netSalaryOutput').textContent = 'Please enter valid numbers.';
      return;
    }
  
    const grossSalary = basicSalary + benefits;
  
    let tax = 0;
    if (grossSalary <= 150000) {
      tax = grossSalary * 0.10; 
    } else if (grossSalary <= 300000) {
      tax = grossSalary * 0.15;
    } else {
      tax = grossSalary * 0.20; 
    }
  
    const nhif = 1000; 
  
    const nssf = basicSalary * 0.060;
    const nssfCapped = nssf > 200 ? 200 : nssf; 
  
    const netSalary = grossSalary - tax - nhif - nssfCapped;
  
    document.getElementById('netSalaryOutput').textContent = `Gross Salary: KSh ${grossSalary.toFixed(2)} | Tax: KSh ${tax.toFixed(2)} | NHIF: KSh ${nhif} | NSSF: KSh ${nssfCapped} | Net Salary: KSh ${netSalary.toFixed(2)}`;
  }
  
