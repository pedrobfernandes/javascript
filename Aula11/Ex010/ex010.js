var calculateButton = document.querySelector('input#verificar')
calculateButton.addEventListener('click', () =>
{
    var velocity = Number(document.querySelector('input#velocidade').value)
    var result = document.querySelector('div#result')

    result.innerHTML = `<p>Sua velocidade atual é de:
        <strong>${velocity}</strong>Km/h</p>`

    if (velocity > 60)
    {
        result.innerHTML += `<p>Você está <strong>MULTADO</strong>
            por excesso de velocidade!</p>`
    }
    result.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
})
