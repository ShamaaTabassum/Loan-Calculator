let monthlyBtn=document.querySelector('#monthly-btn');
let lifetimeBtn=document.querySelector('#lifetime-btn');
let monthly=document.querySelector('#monthly');
let lifetime=document.querySelector('#lifetime');

monthlyBtn.addEventListener('click',()=>{
    monthlyBtn.classList.add('bg-lightBlue');
    monthlyBtn.classList.remove('border-darkBlue');
    monthlyBtn.classList.add('text-white');
    monthlyBtn.classList.remove('border');
    monthlyBtn.classList.remove('text-darkBlue');
    monthly.classList.remove('hidden');
    monthly.classList.add('grid');
    lifetimeBtn.classList.remove('bg-lightBlue');
    lifetimeBtn.classList.add('border');
    lifetimeBtn.classList.add('border-darkBlue');
    lifetimeBtn.classList.remove('text-white');
    lifetimeBtn.classList.remove('text-darkBlue');
    lifetime.classList.add('hidden');
    lifetime.classList.remove('grid');
});
lifetimeBtn.addEventListener('click',()=>{
    monthlyBtn.classList.remove('bg-lightBlue');
    monthlyBtn.classList.add('border-darkBlue');
    monthlyBtn.classList.remove('text-white');
    monthlyBtn.classList.add('border');
    monthlyBtn.classList.add('text-darkBlue');
    monthly.classList.add('hidden');
    monthly.classList.remove('grid');
    lifetimeBtn.classList.add('bg-lightBlue');
    lifetimeBtn.classList.remove('border');
    lifetimeBtn.classList.remove('border-darkBlue');
    lifetimeBtn.classList.add('text-white');
    lifetimeBtn.classList.add('text-darkBlue');
    lifetime.classList.remove('hidden');
    lifetime.classList.add('grid');
});


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

