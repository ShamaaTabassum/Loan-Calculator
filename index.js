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
const dropdownList1 = document.getElementById('dropdown-list1');
const dropdownText1 = document.getElementById('dropdown-text1');
const downArrow1 = document.getElementById('down-arrow1');

downArrow1 && dropdownText1.addEventListener('mouseover', () => {
  dropdownList1.classList.add('block');
  dropdownList1.classList.remove('hidden');
});
downArrow1 && dropdownText1.addEventListener('mouseout', () => {
  dropdownList1.classList.remove('block');
  dropdownList1.classList.add('hidden');
});

// function for dropdown menu 2
const dropdownList2 = document.getElementById('dropdown-list2');
const dropdownText2 = document.getElementById('dropdown-text2');
const downArrow2 = document.getElementById('down-arrow2');

downArrow2 && dropdownText2.addEventListener('mouseover', () => {
  dropdownList2.classList.add('block');
  dropdownList2.classList.remove('hidden');
});
downArrow2 && dropdownText2.addEventListener('mouseout', () => {
  dropdownList2.classList.remove('block');
  dropdownList2.classList.add('hidden');
});


// function for dropdown menu 2-1
const dropdownList21 = document.getElementById('dropdown-list2-1');
const dropdownText21 = document.getElementById('dropdown-text2-1');
const downArrow21 = document.getElementById('down-arrow2-1');

downArrow21 && dropdownText21.addEventListener('mouseover', () => {
  dropdownList21.classList.add('block');
  dropdownList21.classList.remove('hidden');
});
downArrow21 && dropdownText21.addEventListener('mouseout', () => {
  dropdownList21.classList.remove('block');
  dropdownList21.classList.add('hidden');
});
// function for dropdown menu 2-2
const dropdownList22 = document.getElementById('dropdown-list2-2');
const dropdownText22 = document.getElementById('dropdown-text2-2');
const downArrow22 = document.getElementById('down-arrow2-2');

downArrow22 && dropdownText22.addEventListener('mouseover', () => {
  dropdownList22.classList.add('block');
  dropdownList22.classList.remove('hidden');
});
downArrow22 && dropdownText22.addEventListener('mouseout', () => {
  dropdownList22.classList.remove('block');
  dropdownList22.classList.add('hidden');
});
// function for dropdown menu 2-3
const dropdownList23 = document.getElementById('dropdown-list2-3');
const dropdownText23 = document.getElementById('dropdown-text2-3');
const downArrow23 = document.getElementById('down-arrow2-3');

downArrow23 && dropdownText23.addEventListener('mouseover', () => {
  dropdownList23.classList.add('block');
  dropdownList23.classList.remove('hidden');
});
downArrow23 && dropdownText23.addEventListener('mouseout', () => {
  dropdownList23.classList.remove('block');
  dropdownList23.classList.add('hidden');
});

// function for dropdown menu 2-4
const dropdownList24 = document.getElementById('dropdown-list2-4');
const dropdownText24 = document.getElementById('dropdown-text2-4');
const downArrow24 = document.getElementById('down-arrow2-4');

downArrow24 && dropdownText24.addEventListener('mouseover', () => {
  dropdownList24.classList.add('block');
  dropdownList24.classList.remove('hidden');
});
downArrow24 && dropdownText24.addEventListener('mouseout', () => {
  dropdownList24.classList.remove('block');
  dropdownList24.classList.add('hidden');
});

// function for dropdown menu 3
const dropdownList3 = document.getElementById('dropdown-list3');
const dropdownText3 = document.getElementById('dropdown-text3');
const downArrow3 = document.getElementById('down-arrow3');

downArrow3 && dropdownText3.addEventListener('mouseover', () => {
  dropdownList3.classList.add('block');
  dropdownList3.classList.remove('hidden');
});
downArrow3 && dropdownText3.addEventListener('mouseout', () => {
  dropdownList3.classList.remove('block');
  dropdownList3.classList.add('hidden');
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























































    

