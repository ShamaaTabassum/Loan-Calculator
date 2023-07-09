// Show-options function
let calc2=document.querySelector('#calc-2');
let resetCalcBtn=document.querySelector('#reset-calc-btn');
let hideOpt=document.querySelector('#hide-opt');
let showOpt=document.querySelector('#show-opt');

showOpt.addEventListener('click',()=>{
    hideOpt.classList.remove('hidden');
    hideOpt.classList.add('flex');
    showOpt.classList.add('hidden');
    showOpt.classList.remove('flex');
    resetCalcBtn.classList.remove('hidden');
    resetCalcBtn.classList.add('flex');
    calc2.classList.remove('hidden');
    calc2.classList.add('flex');
    resetCalcBtn.classList.remove('hidden');
    resetCalcBtn.classList.add('flex');
})
hideOpt.addEventListener('click',()=>{
    hideOpt.classList.add('hidden');
    hideOpt.classList.remove('flex');
    showOpt.classList.remove('hidden');
    showOpt.classList.add('flex');
    resetCalcBtn.classList.add('hidden');
    resetCalcBtn.classList.remove('flex');
    calc2.classList.add('hidden');
    calc2.classList.remove('flex');
    resetCalcBtn.classList.add('hidden');
    resetCalcBtn.classList.remove('flex');
})
// FAQs function 
let plus=document.querySelector('#plus');
let minus=document.querySelector('#minus');
let para=document.querySelector('#para');

minus.addEventListener('click',()=>{
    para.classList.add('hidden');
    minus.classList.add('hidden');
    plus.classList.remove('hidden');
})
plus.addEventListener('click',()=>{
    plus.classList.add('hidden');
    minus.classList.remove('hidden');
    para.classList.remove('hidden');
})
// FAQs function 2
let plus2=document.querySelector('#plus2');
let minus2=document.querySelector('#minus2');
let para2=document.querySelector('#para2');

minus2.addEventListener('click',()=>{
    para2.classList.add('hidden');
    minus2.classList.add('hidden');
    plus2.classList.remove('hidden');
})
plus2.addEventListener('click',()=>{
    plus2.classList.add('hidden');
    minus2.classList.remove('hidden');
    para2.classList.remove('hidden');
})
// FAQs function 3
let plus3=document.querySelector('#plus3');
let minus3=document.querySelector('#minus3');
let para3=document.querySelector('#para3');

minus3.addEventListener('click',()=>{
    para3.classList.add('hidden');
    minus3.classList.add('hidden');
    plus3.classList.remove('hidden');
})
plus3.addEventListener('click',()=>{
    plus3.classList.add('hidden');
    minus3.classList.remove('hidden');
    para3.classList.remove('hidden');
})
// FAQs function 4
let plus4=document.querySelector('#plus4');
let minus4=document.querySelector('#minus4');
let para4=document.querySelector('#para4');

minus4.addEventListener('click',()=>{
    para4.classList.add('hidden');
    minus4.classList.add('hidden');
    plus4.classList.remove('hidden');
})
plus4.addEventListener('click',()=>{
    plus4.classList.add('hidden');
    minus4.classList.remove('hidden');
    para4.classList.remove('hidden');
})


// function for Mortage Calculator
let homePrice=document.getElementById("homePrice");
let downPayment=document.getElementById("downPayment");
let loanTerm=document.getElementById("loanTerm");
let startDate=document.getElementById("startDate");
let monthlyPaymentData=document.getElementById("monthlyPayment");
let monthlyPaymentData2=document.getElementById("totalMonthlyPayment");


function calculateMonthlyPaymentMortage() {
    // Get input values
    const homePriceVal = parseFloat(homePrice.value);
    const downPaymentVal = parseFloat(downPayment.value);
    const loanTermVal = parseFloat(loanTerm.value);
    const startDateVal = new Date(startDate.value);
  
    // Calculate loan amount
    const loanAmount = homePriceVal - downPaymentVal;
  
    // Calculate total number of months
    const numberOfPayments = loanTermVal * 12;
  
    // Calculate monthly interest rate
    const interestRate = 5; // Assuming a fixed interest rate of 5%
    const monthlyRate = interestRate / 100 / 12;
    // Calculate monthly payment with monthly interest
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  
    // Calculate monthly payment without monthly interest
    // const monthlyPayment = loanAmount / numberOfPayments;
  
    // Calculate the start month and year
    const startMonth = startDateVal.getMonth() + 1; // Add 1 because getMonth() returns zero-based month
    const startYear = startDateVal.getFullYear();
  
    // Calculate the interest for the start period
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const numStartMonths =
      (startYear - currentYear) * 12 + (startMonth - currentMonth);
    const interestForStartPeriod =
      loanAmount * (numStartMonths / numberOfPayments);
  
    // Adjust the monthly payment for the start period interest
    const adjustedMonthlyPayment =
      (loanAmount + interestForStartPeriod) / numberOfPayments;
  
    // Check if monthlyPayment is NaN
    const displayValue = isNaN(adjustedMonthlyPayment)
      ? ""
      : "$" + adjustedMonthlyPayment.toFixed(2);
    // Check if totalmonthlyPayment is NaN
    const displayValue2 = isNaN(adjustedMonthlyPayment)
      ? ""
      : "$" + adjustedMonthlyPayment.toFixed(2);
  
    // Display the result
    monthlyPaymentData.textContent = displayValue;
    monthlyPaymentData2.textContent = displayValue2;
  
    // Calculate principal and interest
    let principalAndInterest = adjustedMonthlyPayment * numberOfPayments;
  
    // Calculate property taxes, homeowner's insurance, HOA dues, PMI, and extra payment
    let propertyTaxes = homePriceVal * 0.02; // Assuming 2% of home price for property taxes
    let homeownersInsurance = homePriceVal * 0.005; // Assuming 0.5% of home price for homeowner's insurance
    let hoaDues = 200; // Assuming fixed HOA dues of $200 per month
    let pmi = loanAmount * 0.01; // Assuming 1% of loan amount for PMI
    let extraPayment = 100; // Assuming a fixed extra payment of $100 per month
  
    // Generate yearly payment and yearly interest data
    const yearlyPaymentData = [];
    const yearlyInterestData = [];
    // Calculate total number of months
    const numMonths = loanTermVal * 12;
    // Calculate total interest paid
    const totalInterest = monthlyPayment * numMonths - loanAmount;
    
  
    for (let i = 1; i <= loanTermVal; i++) {
      const yearlyPayment = parseInt(loanAmount / loanTermVal);
      const yearlyInterest = parseInt(totalInterest / loanTermVal);
      yearlyPaymentData.push(yearlyPayment);
      yearlyInterestData.push(yearlyInterest);
    }
  
    // Calculate total payment
    const totalPayment =
      principalAndInterest +
      propertyTaxes +
      homeownersInsurance +
      hoaDues +
      pmi +
      extraPayment;
  
      
    if (homePriceVal && downPaymentVal && loanTermVal) {
      if (Chart.getChart("myChart")) {
        // Destroy Chart
        Chart.getChart("myChart").destroy();
      }
      // Draw Chart
      drawMortageCalculatorGraph([
        principalAndInterest,
        propertyTaxes,
        homeownersInsurance,
        hoaDues,
        pmi,
        extraPayment,
      ]);
  
      if (Chart.getChart("myLineChart")) {
        // Destroy Chart
        Chart.getChart("myLineChart").destroy();
      }
      drawMortageMonthlyPaymentGraph(
        startYear,
        loanTermVal,
        yearlyPaymentData,
        yearlyInterestData
      );
    }
  }

  function drawMortageMonthlyPaymentGraph(
    startYear,
    numberOfYears = 5,
    y1value = [500, 1000, 1500, 2000, 2500],
  y2value = [400, 800, 1200, 1600, 2000]
  ) {
    let date;
    startYear ? (date = startYear) : (date = new Date().getFullYear());
    // var xValues = ["2023", "2025", "2026", "2017", "2018"];
    var xValues = Array.from(
      { length: numberOfYears },
      (_, index) => date + index
    );
    // var yValues1  = [500, 1000, 1500, 2000, 2500];
    var yValues1 = y1value;
    // var yValues2 = [400, 800, 1200, 1600, 2000]; //second dataset
    var yValues2 = y2value;
    var barColors1 = Array.from(xValues, () => "#60AFF0");
    var barColors2 = Array.from(xValues, () => "#CCF5E1");
    new Chart("myLineChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Principal",
            backgroundColor: barColors1,
            data: yValues1,
            // label: 'Dataset 1' //optional label for this dataset
          },
          {
            label: "Interest",
            backgroundColor: barColors2,
            data: yValues2,
            // label: 'Dataset 2' //optional label for this dataset
          },
        ],
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
        },
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value;
              },
            },
          },
        },
      },
    });
  }
  
  function drawMortageCalculatorGraph(
    yvalue = [862.87, 862.87, 187, 186, 187, 186]
  ){
  var xValues = ["Principal and interest", "Property Taxes", "Homeoner's insurance", "HOA due's","PMI","Extra Payment"];
  var yValues = yvalue;
  var barColors = [
    "#0B72C7",
    "#FE8F00",
    "#8E60F0",
    "#03B378",
    "#19D176",
    "#153A66",
  ];
  
  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      },
    ],
    },
    options: {
      title: {
        display: true,
        text: ""
      },
    },
  });
  }

  function formatCurrency(amount) {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
// handlers
  homePrice.addEventListener('input', calculateMonthlyPaymentMortage);
downPayment.addEventListener('input', calculateMonthlyPaymentMortage);
loanTerm.addEventListener('input', calculateMonthlyPaymentMortage);
startDate.addEventListener('input', calculateMonthlyPaymentMortage);