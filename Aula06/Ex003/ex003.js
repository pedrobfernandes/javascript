//var number1 = Number.parseInt(window.prompt('Digite um número: '))
//var number2 = Number.parseInt(window.prompt('Digite outro número: '))

/*
Se quiser que o javascript "decida" sosinho see é float ou inteiro,
podemos usar apenas Number(). Mas para forçar um tipo, usamos Number.parseInt
ou Number.parseFloat
*/

var number1 = Number(window.prompt('Digite um número: '))
var number2 = Number(window.prompt('Digite outro número: '))
var sum = number1 + number2

// String(sum) -> converte número para string
// ou .. sum.toString()
window.alert(`A soma entre ${number1} e ${number2} é: ${sum}`)
