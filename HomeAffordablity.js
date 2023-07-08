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

plus3.addEventListener('click',()=>{
    plus3.classList.add('hidden');
    minus3.classList.remove('hidden');
    para3.classList.remove('hidden');
})
minus3.addEventListener('click',()=>{
    minus3.classList.add('hidden');
    para3.classList.add('hidden');
    plus3.classList.remove('hidden');
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


// table-function
let btn1=document.querySelector('#btn1'); 
let btn2=document.querySelector('#btn2'); 
let Yrs30=document.querySelector('#yrs30'); 
let Yrs15=document.querySelector('#yrs15'); 

// func1
btn2.addEventListener('click',()=>{
btn1.classList.remove('border-b-[0.563rem]');
btn1.classList.remove('border-lightBlue');
btn2.classList.add('border-b-[0.563rem]');
btn2.classList.add('border-lightBlue');
Yrs15.classList.remove('hidden')
Yrs30.classList.add('hidden')
})
// func2
btn1.addEventListener('click',()=>{
btn1.classList.add('border-b-[0.563rem]');
btn1.classList.add('border-lightBlue');
btn2.classList.remove('border-b-[0.563rem]');
btn2.classList.remove('border-lightBlue');
Yrs15.classList.add('hidden')
Yrs30.classList.remove('hidden')
})

// function for home affordability calculator

