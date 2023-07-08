var principal = document.getElementById("principal");
var interestRate =document.getElementById("interest");
var loanTerm = document.getElementById("term");
var autoLoanResult =document.getElementById("autoLoanResult");
// Event handler for the input field change
principal.addEventListener('input', calculateAutoLoan);
interestRate.addEventListener('input', calculateAutoLoan);
loanTerm.addEventListener('input', calculateAutoLoan);
// Function to update the result
function calculateAutoLoan() {
    var principalVal=principal.value;
   var  interestRateVal=interestRate.value;
   var loanTermVal=loanTerm.value;
    var monthlyInterestRate = interestRateVal / 100 / 12;
    var loanTermMonths = loanTermVal * 12;
    var monthlyPayment = (principalVal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

console.log(principalVal);
console.log(interestRateVal);
console.log(loanTermVal);

// / Check if monthlyPayment is NaN
 monthlyPayment = isNaN(monthlyPayment)
? ""
: "$" + monthlyPayment.toFixed(2);

// Display the result
autoLoanResult.textContent = monthlyPayment;

};
