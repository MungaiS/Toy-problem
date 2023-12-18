// Creating a function called calculateNetSalary 

function calculateNetSalary(basicSalary, benefits) {
  // create objects with the tax and nhif rate
  const taxRate = [
    { min: 0, max: 24000, rate: 0.10 },
    { min: 24001, max: 32333, rate: 0.15 },
    { min: 32334, max: 40385, rate: 0.20 },
    { min: 40386, max: 48336, rate: 0.25 },
    { min: 48337, max: Infinity, rate: 0.30 }
  ];
  const nhifRate = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: Infinity, deduction: 1300 }
  ];
  const nssfRate = 0.06;

  const housingRate = 0.015;

  const grossSalary = basicSalary + benefits;

  // Calculate tax based on the taxRate ranges
  let tax = 0;
  for (const range of taxRate) {
    if (grossSalary > range.min) {
      const taxableAmount = Math.min(grossSalary - range.min, range.max - range.min);
      tax += taxableAmount * range.rate;
    }
  }

  // Calculate nhif deduction based on the nhifRate ranges
  let nhif = 0;
  for (const range of nhifRate) {
    if (grossSalary >= range.min && grossSalary <= range.max) {
      nhif = range.deduction;
      break;
    }
  }

  const nssf = grossSalary * nssfRate;
  const housing = grossSalary * housingRate;
  const netSalary = grossSalary - (tax + nhif + nssf + housing);

  return {
    grossSalary,
    tax,
    nhif,
    nssf,
    netSalary
  };
}

// Print the results
const basicSalary = 59000;
const benefits = 4500;
const result = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary);
console.log("Tax:", result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);
