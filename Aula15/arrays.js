let numbers = [5, 8, 2, 9, 3]


for (let item of numbers)
{
    console.log(item)
    console.log(typeof item)
}


numbers.forEach(value =>
{
    console.log(value)
    console.log(typeof value)
})


for (let index = 0; index < numbers.length; index += 1)
{
    console.log(numbers[index])
    console.log(typeof numbers[index])
}
