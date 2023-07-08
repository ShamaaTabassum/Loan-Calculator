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