function multiplicationTable()
{
    let number = document.getElementById('number').value
    let output = document.getElementById('output')

    if (number.length == 0)
    {
        alert('Digite um número')
    }
    else
    {
        number = Number(number)
        output.innerHTML = ''
        for (let count = 1; count <= 10; count += 1)
        {
            let item = document.createElement('option')
            item.text = `${number} x ${count} = ${number * count}`
            output.appendChild(item)
        }
    }
}
