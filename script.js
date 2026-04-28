function generatePayslip() {
    const name = "Charles Boahene";
    const role = "Manager";
    const baseSalary = 23000;

    const overtimePay = 10 * (0.02 * baseSalary);

    let bonus = 0;
    if (role == "Manager") {
        bonus = 0.05 * (baseSalary + overtimePay);
    } else if (role == "C-level") {
        bonus = 0.08 * (baseSalary + overtimePay);
    } else if (role == "Sales Agent") {
        bonus = 0.04 * (baseSalary + overtimePay);
    }

    const grossSalary = baseSalary + bonus + overtimePay;

     
    function calculateTax(income) {
        let tax = 0;

        if (income <= 5000) {
            tax = 0;
        } else if (income <= 6000) {
            tax = (income - 5000) * 0.05;
        } else if (income <= 7500) {
            tax = (1000 * 0.05) +
                  (income - 6000) * 0.07;
        } else if (income <= 10500) {
            tax = (1000 * 0.05) +
                  (1500 * 0.07) +
                  (income - 7500) * 0.10;
        } else {
            tax = (1000 * 0.05) +
                  (1500 * 0.07) +
                  (3000 * 0.10) +
                  (income - 10500) * 0.12;
        }

        return tax;
    }

    const tax = calculateTax(grossSalary);

    const netSalary = grossSalary - tax;

    console.log("EMPLOYEE PAYSLIP - April 2026");
    console.log(name + " - " + role);
    console.log("Gross Salary: " + grossSalary);
    console.log("Tax: " + tax);
    console.log("Net Salary: " + netSalary);
}
generatePayslip();