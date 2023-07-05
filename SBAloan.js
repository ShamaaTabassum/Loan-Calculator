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


autoLoanResult.textContent = `$${monthlyPayment.toFixed(2)}`;
};
// toggler function1
let downArrowOutline=document.querySelector('#down-arrow-outline');
let forwardArrowOutline=document.querySelector('#forward-arrow-outline');
let tableHead=document.querySelector('#table-head');
let tableBody=document.querySelector('#table-body');
let childHead=document.querySelector('.child-head');

(forwardArrowOutline).addEventListener('click',()=>{
    tableBody.classList.remove('hidden');
    forwardArrowOutline.classList.add('hidden');
    downArrowOutline.classList.remove('hidden');
    tableHead.classList.remove('bg-white');
    tableHead.classList.remove('text-black');
    tableHead.classList.remove('border-none');
    tableHead.classList.add('bg-lightBlue');
    tableHead.classList.add('text-white');
    tableHead.classList.add('border');
});
(downArrowOutline).addEventListener('click',()=>{
    tableBody.classList.add('hidden');
    forwardArrowOutline.classList.remove('hidden');
    downArrowOutline.classList.add('hidden');
    tableHead.classList.add('bg-white');
    tableHead.classList.add('text-black');
    tableHead.classList.add('border-none');
    tableHead.classList.remove('bg-lightBlue');
    tableHead.classList.remove('text-white');
    tableHead.classList.remove('border');
})
// toggler function2
let downArrowOutline1=document.querySelector('#down-arrow-outline1');
let forwardArrowOutline1=document.querySelector('#forward-arrow-outline1');
let tableHead1=document.querySelector('#table-head1');
let tableBody1=document.querySelector('#table-body1');

(forwardArrowOutline1).addEventListener('click',()=>{
    tableBody1.classList.remove('hidden');
    forwardArrowOutline1.classList.add('hidden');
    downArrowOutline1.classList.remove('hidden');
    tableHead1.classList.remove('bg-white');
    tableHead1.classList.remove('text-black');
    tableHead1.classList.remove('border-none');
    tableHead1.classList.add('bg-lightBlue');
    tableHead1.classList.add('text-white');
    tableHead1.classList.add('border');

});
(downArrowOutline1).addEventListener('click',()=>{

    tableBody1.classList.add('hidden');
    forwardArrowOutline1.classList.remove('hidden');
    downArrowOutline1.classList.add('hidden');
    tableHead1.classList.add('bg-white');
    tableHead1.classList.add('text-black');
    tableHead1.classList.add('border-none');
    tableHead1.classList.remove('bg-lightBlue');
    tableHead1.classList.remove('text-white');
    tableHead1.classList.remove('border');
})
