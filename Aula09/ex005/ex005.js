window.document.write('Olá Munndo Html/Css/Javascript!<br>')
window.document.write(window.document.characterSet + '<br>')
window.document.write(window.navigator.appName + '<br>')
window.document.write(window.document.URL)

var paragraph1 = window.document.getElementsByTagName('p')[0]

window.document.write(`<br>${paragraph1.innerText}`)
paragraph1.style.color = 'violet'

var body = window.document.body
//body.style.background = 'black'

paragraph1 = window.document.getElementsByTagName('p')[1]
document.write(`<br> ${paragraph1.innerHTML}`)


var div = window.document.getElementById('msg')
div.style.background = 'green'
div.innerText = 'Estou aguardando'

div = document.querySelector('div#msg')
div.style.color = 'yellow'
