"use strict"

//write code in here
const simpleCounter = document.getElementById('number')

const plusNumber = document.getElementById('plus')
const minusNumber = document.getElementById('minus')
const resetNumber = document.getElementById('reset')

let num = 0

function Counter(number){
    if (number === '+'){
        simpleCounter.textContent = (++num)
    } else if (number === '-'){
        simpleCounter.textContent = (--num)
    } else {
        simpleCounter.textContent = '0'
    }
}

plusNumber.addEventListener('click', () => Counter('+'))
minusNumber.addEventListener('click', () => Counter('-'))
resetNumber.addEventListener('click', () => Counter(''))
