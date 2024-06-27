// Function to calculate NSSF
function calculateNSSF() {
    // Get input values
    const age = document.getElementById('age').value;
    const yearsOfWork = document.getElementById('yearsOfWork').value;
    const basicSalary = document.getElementById('basicSalary').value;

    // Validate inputs
    if (age <= 0 || yearsOfWork <= 0 || basicSalary <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate years to retirement
    const retirementAge = 55;
    const yearsToRetirement = retirementAge - age;

    if (yearsToRetirement < 0) {
        alert("You have already reached the retirement age.");
        return;
    }

    // Calculate total NSSF
    const nssfRate = 0.15;
    const totalNSSF = yearsOfWork * 12 * (nssfRate * basicSalary);

    // Display results
    document.getElementById('yearsToRetirement').innerText = `Years to Retirement: ${yearsToRetirement}`;
    document.getElementById('totalNSSF').innerText = `Total NSSF Amount: UGX ${totalNSSF.toFixed(2)}`;
}
