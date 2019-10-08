/*global console*/
/*jshint esversion:6*/

(function () {
    'use strict';

    // Welcome the User
    console.log(`Welcome to Payroll!\n`);

    // Variables and Constants
    let firstName = "Meredith";
    let lastName = "Fitch";
    let hoursWorked = 40;
    let hourlyRate = 15.50;
    let insuranceDeduction = 55.00;

    const FEDTAXRATE = 0.15;
    const STATETAXRATE = 0.034;
    const COUNTYTAXRATE = 0.011;

    // Calculate and Display Results
    console.log(`Employee: ${firstName} ${lastName}`);

    let grossPay = hoursWorked * hourlyRate;
    console.log(`Gross Pay: \$${grossPay.toFixed(2)}`);

    let fedTax = grossPay * FEDTAXRATE;
    console.log(`Federal Tax: \$${fedTax.toFixed(2)}`);

    let stateTax = grossPay * STATETAXRATE;
    console.log(`State Tax: \$${stateTax.toFixed(2)}`);

    let countyTax = grossPay * COUNTYTAXRATE;
    console.log(`County Tax: \$${countyTax.toFixed(2)}`);

    console.log(`Medical Insurance Deductions: \$${insuranceDeduction.toFixed(2)}`);

    let deductions = fedTax + stateTax + countyTax + insuranceDeduction;
    console.log(`Total Deductions: \$${deductions.toFixed(2)}`);

    let netPay = hoursWorked * hourlyRate;
    netPay -= deductions;
    console.log(`Net Pay: \$${netPay.toFixed(2)}`);

    // Thank the User
    console.log("\nThank You For Using Payroll!");
})();
