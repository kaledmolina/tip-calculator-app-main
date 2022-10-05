let bill = document.querySelector('.input-section__bill-input');
let billNumber = parseFloat(bill.value);

let peopel = document.querySelector('.input-section__peopel-input');
let peopelNumber = parseFloat(peopel.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value');


let buttons = document.querySelectorAll('.btns__button');
let tipValue = 0;

buttons.forEach(element =>{
element.addEventListener('click', event=>{
        //cambiar estilo por click
        buttons.forEach(element =>{
            element.classList.remove('btns__button--selected');
        });
        element.classList.add('btns__button--selected');

        let tipValue = parseFloat(event.target.innerText.slice(0,-1));
        
        //calculot de tip amount
        tipResult.innerText = ((billNumber * tipValue / 100) / peopelNumber);
        //calculo del total 
        totalResult.innerText = ((billNumber * tipValue / 100 ) + billNumber)/peopelNumber;


        
        });
    })
// actulizar bill  recibiendo input
bill.addEventListener('input', ()=> {
    billNumber = parseFloat (bill.value);
    calcularpropinas()
});

