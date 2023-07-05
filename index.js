function menu(e) {
  
  let list = document.querySelector('#menu');
  e.name === "menu" ? (e.name = "close", list.classList.remove('hidden')) :( e.name = "menu" ,list.classList.add('hidden'))
} 




const loan = document.getElementById('loan');
const loanText = document.getElementById('loan-text');
const downArrow = document.getElementById('down-arrow');

    downArrow && loanText.addEventListener('click', () => {
      loan.classList.toggle('block');
      loan.classList.toggle('hidden');
    });


























































    

