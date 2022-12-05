function writeCards(names) {
    let temp = []
    for (let i = 0; i < names.length; i++) {
        temp[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return temp
}

function countDown(num) {
    let count = num
    while (count >= 0) {
        console.log(count)
        count--
    }
}