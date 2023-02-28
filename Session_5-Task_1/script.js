// Question No.1
for (var i = 0; i <= 10; i++) {
    console.log(i)
}

// Question No.2
var msg = "Hello World"

console.log(msg)
document.write(`<h1>${msg}</h1>`)
alert(msg)

// Question No.3
document.write('<h2>Question No.3: </h2>')
document.write('Even Numbers between (0 and 10): ')
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write(i)
    }
    else {
        document.write(",")
    }
}

// Question No.4
document.write('<h2>Question No.4: </h2>')
var x = 1
var arr = []
for (var i = 0; i <= 8; i++) {
    document.write(arr)
    arr.push(x++)
    document.write("<br>")
}

// Question No.5
document.write('<h2>Question No.5: </h2>')
function squareNumber(n) {
    return x ** 2
}
var number = prompt("Enter a number to square it? ")
document.write(`Square of ${number} is ${squareNumber(number)}`)