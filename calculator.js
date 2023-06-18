let calculation = localStorage.getItem('calculation') ||  '';
document.querySelector('.js-display-calculation').innerHTML=calculation;


function updateCalculation(operation){
    if(operation === 'Enter'){
        if(calculation !== ''){
            calculation = eval(calculation);
            calculation = ''+calculation;
        }
    }
    else if(operation === ' ')
    {
        calculation = '';
    }
    else if(operation === 'Backspace')
    {
        calculation = calculation.slice(0, calculation.length - 1);
    }
    else
    {
        calculation += operation;
    }
    
    localStorage.setItem('calculation', calculation);
    document.querySelector('.js-display-calculation').innerHTML=calculation;
}

function hundleKeydown(event)
{
    if(/^\d$/.test(event.key) || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === 'Enter' || event.key === ' ' || event.key === '.' || event.key=== 'Backspace')
    {
        updateCalculation(event.key);
    }
}

