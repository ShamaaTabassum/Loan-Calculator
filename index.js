// changing header color

let header=document.querySelector("header");
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
      header.classList.add("active");
  } else {
     header.classList.remove("active");
  }
});


// function for menu
function Menu(e) {
let list = document.querySelector('#list');
  
  e.name === "menu" ? (e.name = "close", list.classList.remove('hidden')) :( e.name = "menu" ,list.classList.add('hidden'))
} 
window.Menu = Menu;
// function for dropdown menu 
const loan = document.getElementById('loan');
const loanText = document.getElementById('loan-text');
const downArrow = document.getElementById('down-arrow');

    downArrow && loanText.addEventListener('mouseover', () => {
      loan.classList.add('block');
      loan.classList.remove('hidden');
    });
    downArrow && loanText.addEventListener('mouseout', () => {
      loan.classList.remove('block');
      loan.classList.add('hidden');
    });
// function for dropdown menu 1
const loan1 = document.getElementById('loan1');
const loanText1 = document.getElementById('loan-text1');
const downArrow1 = document.getElementById('down-arrow1');

downArrow1 && loanText1.addEventListener('mouseover', () => {
  loan1.classList.add('block');
  loan1.classList.remove('hidden');
});
downArrow1 && loanText1.addEventListener('mouseout', () => {
  loan1.classList.remove('block');
  loan1.classList.add('hidden');
});

    // ......
    // function to Calculate Business Loan 
    var startDate = document.getElementById("start-date");
    var annualRevenue=document.getElementById("annual-revenue");
    var lastMonthDeposit = document.getElementById("last-month-deposit");
    var creditScore = document.getElementById("credit-score");
    var homeBased = document.getElementById("home-based");
    var loanAmountRangeElement = document.getElementById("result-range");

    

    function calculateBusinessLoan() {
      // Get input values
      var startDateVal = new Date(startDate.value);
      var annualRevenueVal = parseFloat(
        annualRevenue.value
      );
      var lastMonthDepositVal = parseFloat(
        lastMonthDeposit.value
      );
      var creditScoreVal = parseFloat(creditScore.value);
      var homeBasedValue = homeBased.value;
    
      // Calculate loan amount based on inputs
      var currentDate = new Date();
      var businessAgeInYears =
        (currentDate - startDateVal) / (1000 * 60 * 60 * 24 * 365);
      var loanAmount =
        (annualRevenueVal * 0.2 + lastMonthDepositVal * 0.3 + creditScoreVal * 1000) *
        businessAgeInYears;
      if (homeBasedValue) {
        loanAmount *= 1.1; // Increase loan amount by 10% for home-based businesses
      }
    
      3; // Define loan amount range based on calculated loan amount
      var loanAmountRange;
      if (loanAmount < 10000) {
        loanAmountRange = "Less than $10,000";
      } else if (loanAmount < 50000) {
        loanAmountRange = "$10,000 - $49,999";
      } else if (loanAmount < 100000) {
        loanAmountRange = "$50,000 - $99,999";
      } else {
        loanAmountRange = "More than $100,000";
      }
    
      // Display loan amount range
      loanAmountRangeElement.innerHTML = loanAmountRange;
    }

// Event handler for the input field change

startDate.addEventListener('input', calculateBusinessLoan);
annualRevenue.addEventListener('input', calculateBusinessLoan);
lastMonthDeposit.addEventListener('input', calculateBusinessLoan);
creditScore.addEventListener('input', calculateBusinessLoan);
homeBased.addEventListener('input', calculateBusinessLoan);

// reset function
let resetBtn=document.querySelector('#reset-btn');

resetBtn.addEventListener('click',()=>{
startDate.value='2022-01-22';
annualRevenue.value='';
lastMonthDeposit.value='';
creditScore.value='';
homeBased.value=0;
loanAmountRangeElement.innerHTML='$2,880 - $4,320';
});























































    

