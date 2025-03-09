function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter the basic salary:"));
    let benefits = parseFloat(prompt("Enter the benefits:"));

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Please enter valid positive numbers for salary and benefits.");
        return;
    }
    const nhifDeduction = 1000;  // Simplified NHIF deduction
    const nssfPercentage = 0.06;  // 6% of basic salary for NSSF
    const maxNssfDeduction = 200; // Max NSSF deduction

    let grossSalary = basicSalary + benefits;

    let tax = 0;
    if (grossSalary <= 150000) {
        tax = grossSalary * 0.10;  // 10% tax
    } else if (grossSalary <= 300000) {
        tax = grossSalary * 0.15;  // 15% tax
    } else {
        tax = grossSalary * 0.20;  // 20% tax
    }

    let nssfDeduction = grossSalary * nssfPercentage;
    if (nssfDeduction > maxNssfDeduction) {
        nssfDeduction = maxNssfDeduction;
    }

    let totalDeductions = tax + nhifDeduction + nssfDeduction;
    let netSalary = grossSalary - totalDeductions;
    console.log(`Basic Salary: KSh ${basicSalary}`);
    console.log(`Benefits: KSh ${benefits}`);
    console.log(`Gross Salary: KSh ${grossSalary}`);
    console.log(`Tax Deduction: KSh ${tax}`);
    console.log(`NHIF Deduction: KSh ${nhifDeduction}`);
    console.log(`NSSF Deduction: KSh ${nssfDeduction}`);
    console.log(`Total Deductions: KSh ${totalDeductions}`);
    console.log(`Net Salary: KSh ${netSalary}`);
}

// Call the function to execute
netSalaryCalculator();
