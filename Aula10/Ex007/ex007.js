var button = document.querySelector('input#somar')
button.addEventListener('click', () =>
{
    var tn1 = Number(document.querySelector('input#txtn1').value)
    var tn2 = Number(document.querySelector('input#txtn2').value)
    var sum = tn1 + tn2
    var result = document.querySelector('div#result')
    result.innerHTML = `A soma entre <strong>${tn1}</strong> e
        <strong>${tn2}<strong> é: <strong>${sum}</strong>`
})
