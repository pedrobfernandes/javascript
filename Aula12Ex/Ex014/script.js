function loadPicture()
{
    var dayGreeting = document.getElementById('greetings')
    var dayHour = document.getElementById('hours')
    var img = document.getElementById('imagem')
    var dateNow = new Date()
    var hourNow = dateNow.getHours()

    if (hourNow >= 0 && hourNow < 12)
    {
        img.src = 'Imagens/manha.jpg'
        document.body.style.background = '#c5a160'
        dayGreeting.innerHTML = 'Bom Dia!'
        dayHour.innerHTML = `São agora: ${hourNow}`

        if (hourNow === 1)
        {
            dayHour.innerHTML += ` hora`
        }
        else
        {
            dayHour.innerHTML += ` horas`
        }
    }
    else if (hourNow <= 18)
    {
        img.src = 'Imagens/tarde.jpg'
        document.body.style.background = '#a65811'
        dayGreeting.innerHTML = 'Bom Tarde!'
        dayHour.innerHTML = `São agora: ${hourNow} horas`
    }
    else
    {
        img.src = 'Imagens/noite.jpg'
        document.body.style.background = '#1e1e1e'
        dayGreeting.innerHTML = 'Boa Noite!'
        dayHour.innerHTML = `São agora: ${hourNow} horas`
    }
}
