function verify()
{
    var dateNow = new Date()
    var yearNow = dateNow.getFullYear()
    var yearEntry = document.getElementById('yeartext')
    var result = document.querySelector('div#result')

    if (yearEntry.value.length == 0 ||
        Number(yearEntry.value) > yearNow)
    {
        alert('[ERRO] Verifique os dados novamente!')
    }
    else
    {
        var sex = document.getElementsByName('radsex')
        var age = yearNow - Number(yearEntry.value)
        var genre = ''
        var img = document.createElement('img')

        if (sex[0].checked)
        {
            genre = 'Homem'

            if (age >= 0 && age < 10)
            {
                img.setAttribute('src', 'Imagens/child-male.png')
            }
            else if (age < 21)
            {
                img.setAttribute('src', 'Imagens/adolescent-male.png')
            }
            else if (age < 50)
            {
                img.setAttribute('src', 'Imagens/adult-male.png')
            }
            else
            {
                img.setAttribute('src', 'Imagens/elder-male.png')
            }
        }
        else if (sex[1].checked)
        {
            genre = 'Mulher'
            if (age >= 0 && age < 10)
            {
                img.setAttribute('src', 'Imagens/child-female.png')
            }
            else if (age < 21)
            {
                img.setAttribute('src', 'Imagens/adolescent-female.png')
            }
            else if (age < 50)
            {
                img.setAttribute('src', 'Imagens/adult-female.png')
            }
            else
            {
                img.setAttribute('src', 'Imagens/elder-female.png')
            }
        }

        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${genre} com ${age} anos.`
        result.appendChild(img)
    }
}
