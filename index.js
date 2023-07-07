
// let menu=document.querySelector('#menu');
// let cross=document.querySelector('#close');
// let list = document.querySelector('#list');


// menu.addEventListener('click',()=>{
//   list.classList.remove('hidden');
//   menu.classList.add('hidden');
//   cross.classList.remove('block');
//   cross.classList.remove('hidden');
//   cross.classList.add('block');
// })
// cross.addEventListener('click',()=>{
//   list.classList.add('hidden');
//   menu.classList.remove('hidden');
//   menu.classList.add('block');
//   cross.classList.add('hidden');
//   cross.classList.remove('block');
// })

function Menu(e) {
let list = document.querySelector('#list');
  
  e.name === "menu" ? (e.name = "close", list.classList.remove('hidden')) :( e.name = "menu" ,list.classList.add('hidden'))
} 


window.Menu = Menu;


const loan = document.getElementById('loan');
const loanText = document.getElementById('loan-text');
const downArrow = document.getElementById('down-arrow');

    downArrow && loanText.addEventListener('click', () => {
      loan.classList.toggle('block');
      loan.classList.toggle('hidden');
    });


























































    

