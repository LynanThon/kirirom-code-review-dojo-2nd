"use strict"

//write code in here
const priceInput = document.getElementById('priceInput')
const taxRatioInput = document.getElementById('taxRatioInput')
const calButton = document.getElementById('calculateButton')
const resetButton = document.getElementById('resetButton')
const taxPrice = document.getElementById('taxPrice')
const taxInclude = document.getElementById('taxIncludedPrice')

const taxCalculation = symbol => () => {
    const price = parseInt(priceInput.value)
    const taxRat = parseInt(taxRatioInput.value)
    if (symbol === 'cal') {
        taxPrice.textContent = Math.floor((price*taxRat)/100);
        taxInclude.textContent = price + parseInt(taxPrice.textContent);
    } else {
        taxPrice.textContent = "0"
        taxInclude.textContent = "0"
        priceInput.value = ''
        taxRatioInput.value = ''
    }
}

calButton.addEventListener('click', taxCalculation('cal'))
resetButton.addEventListener('click', taxCalculation(''))