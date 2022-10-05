let bill = document.querySelector('.input-section__bill-input');
let billNumber = parseInt(bill.value);
let peopel = document.querySelector('.input-section__peopel-input');
let peopelNumber = parseInt(peopel.value);
let buttons = document.querySelectorAll('.btns__button');

buttons.forEach(element =>{
element.addEventListener('click', event=>{
        let tipValue = parseInt(event.target.innerText.slice(0,-1));
        })
    })