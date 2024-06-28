function stepCount()
{
    let beginNumber = document.getElementsByName('number')[0].value
    let endNumber = document.getElementsByName('number')[1].value
    let stepNumber = document.getElementsByName('number')[2].value

    if (beginNumber.length == 0 || endNumber.length == 0)
    {
        alert('Por favor preenca todas as caixas')
    }
    else if (beginNumber < 0)
    {
        alert('Valor inicial não pode ser menor que 0')
    }
    else
    {
        let step = stepNumber <= 0 || stepNumber === endNumber ||
            stepNumber == '' ? 1 : stepNumber

        beginNumber = Number(beginNumber)
        endNumber = Number(endNumber)
        step = Number(step)

        let counter = document.querySelector('div#count-block')
        counter.innerHTML = `Contando:<br>`
        if (beginNumber < endNumber)
        {
            for (let count = beginNumber; count <= endNumber; count += step)
            {
                counter.innerHTML += `${count} \u{1F449} `
            }

            counter.innerHTML += `\u{1F3c1}`
        }
        else
        {
            for (let count = beginNumber; count >= endNumber; count -= step)
            {
                counter.innerHTML += `${count} \u{1F449} `
            }

            counter.innerHTML += `\u{1F3c1}`
        }
    }
}
