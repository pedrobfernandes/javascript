var now = new Date()


var hour = now.getHours()

if (hour < 12)
{
    console.log('Bom dia')
}
else if (hour <= 18)
{
    console.log('Boa tarde')
}
else
{
    console.log('Boa noite')
}
