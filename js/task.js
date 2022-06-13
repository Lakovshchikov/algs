for (let i =0; i < 100000; i++) {
    if (digit(i) % 7 === 0 && digit(i+4) % 7 === 0) {
        console.log(i);
        break
    }
}

function digit (number) {
    var figures = "" + number
    var sum = 0

    for (var i = 0; i < figures.length; i++)
        sum += +figures[i]

    return sum
}
