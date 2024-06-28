var checkCountry = document.querySelector('button.check-country')
checkCountry.addEventListener('click', () =>
{
    var country = document.querySelector('input#origem').value
    var nationality = document.querySelector('div#nacionalidade')

    if (country === 'Portugal')
    {
        nationality.innerHTML = 'Você é Português!'
    }
    else
    {
        nationality.innerHTML = 'Você é estranjeiro(a)!'
    }
})
