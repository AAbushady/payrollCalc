/*
    You have been asked to create a program called "payroll_calc.js", that computes and displays
    paycheck information for employees. The program should compute the gross pay. After it has computed
    the gross pay, it should deduct three types of income tax witholding - federal (at a rate of 15%),
    state (at 3.4%), and county (at 1.1%) - as well as the amount of the employee's medical insurace deduction.
    Finally, the program should total the deductions and calculate the net pay, and display ALL this
    information, including the employe's name. Use the following values:
    
    First Name: Meredith
    Last Name: Fitch
    Hours Worked: 40
    Hourly Wage Rate: $15.50
    Medical Insurance Deduction: $55.00
*/

// Pseudocode
/*
    -Welcome the User-
    
    -Variables and Constants-
    Declare String firstName
    Declare String lastName
    
    Declare Numeric hoursWorked
    Declare Numeric hourlyRate
    Declare Numeric insuranceDeduction
    Declare Numeric grossPay
    Declare Numeric netPay
    Declare Numeric fedTax
    Declare Numeric stateTax
    Declare Numeric countyTax
    Declare Numeric deductions
    
    Declare Constant FEDTAXRATE
    Declare Constant STATETAXRATE
    Declare Constant COUNTYTAXRATE
    
    -Calculate and Display Results-
    Display `Employee: ${firstName} ${lastName}`
    
    Multiply hoursWorked by hourlyRate and assign to grossPay and netPay
    Display `Gross Pay: \$${grossPay}`
    
    Multiply grossPay by FEDTAXRATE, and assign to fedTax
    Display `Federal Tax: \$${fedTax}`
    
    Multiply grossPay by STATETAXRATE, and assign to stateTax
    Display `State Tax: \$${stateTax}`
    
    Multiply grossPay by COUNTYTAXRATE, and assign to countyTax
    Display `County Tax: \$${countyTax}`
    
    Display `Medical Insurance Deduction: ${insuranceDeduction}`
    
    Add fedTax, stateTax, countyTax, and insuranceDeduction and assign to deductions
    Display `Total Deductions: ${deductions}`
    
    Subtract deductions from netPay
    Display `Net Pay: ${netPay}`
    
    -Thank the User-
*/

// Welcome the User
console.log(`Welcome to Payroll!`);

// Variables and Constants
var firstName = "Meredith";
var lastName = "Fitch";
var hoursWorked = 40;
var hourlyRate = 15.50;
var insuranceDeduction = 55.00;

const FEDTAXRATE = .15
const STATETAXRATE = .034
const COUNTYTAXRATE = .011

// Calculate and Display Results
console.log(`Employee: ${firstName} ${lastName}`);

var grossPay = netPay = hoursWorked * hourlyRate;
console.log(`Gross Pay: ${grossPay}`);

var fedTax = grossPay * FEDTAXRATE;
console.log(`Federal Tax: ${fedTax}`);

var stateTax = grosspay * STATETAXRATE;
console.log(`State Tax: ${stateTax}`);

var countyTax = grossPay * COUNTYTAXRATE;
console.log(`County Tax: ${countyTax}`);

console.log(`Medical Insurance Deductions: ${insuranceDeduction}`);

var deductions = fedTax + stateTax + countyTax + insuranceDeduction;
console.log(`Total Deductions: ${deductions}`);

