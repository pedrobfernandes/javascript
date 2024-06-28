function isValidRange(number)
{
    return number >= 1 &&
        number <= 100 ? true : false
}

function isInList(number)
{
    return numberArray.indexOf(number)
        === -1 ? true : false
}


function isListEmpty()
{
    return numberArray.length === 0 ? true : false
}


function addToArray()
{

    if (!isValidRange(Number(current.value))
        || !isInList(Number(current.value)))
    {
        alert('Valor inválido ou já consta na lista')
    }
    else
    {
        let item = document.createElement('option')
        numberArray.push(Number(current.value))
        item.text = `Valor ${current.value} adicionado`
        output.appendChild(item)
        result.innerHTML = ''
    }

    current.value = ''
    current.focus()
}


function processInput()
{
    if (isListEmpty())
    {
        alert('Sem dados na lista para processar')
    }
    else
    {
        let largest = numberArray[0]
        let smallest = numberArray[0]
        let sum = 0
        let average = 0
        result.innerHTML = `<p>Ao todo temos ${numberArray.length}
            números cadastrados</p>`

        for (let item in numberArray)
        {
            sum += numberArray[item]
            if (numberArray[item] > largest)
            {
                largest = numberArray[item]
            }

            if (numberArray[item] < smallest)
            {
                smallest = numberArray[item]
            }
        }

        average = sum / numberArray.length

        result.innerHTML += `<p>O maior número é ${largest}</p>`
        result.innerHTML += `<p>O menor número é ${smallest}</p>`
        result.innerHTML += `<p>A soma de todos os números dá ${sum}</p>`
        result.innerHTML += `<p>A média dos números dá ${average}</p>`
    }
}


let numberArray = []
let current = document.querySelector('input#number')
let output = document.querySelector('select#output')
let result = document.querySelector('div#result')
document.querySelector('input#add').addEventListener('click', addToArray)
document.querySelector('input#finish').addEventListener('click', processInput)
