function sumSquare(...numbers){
    let result = 0
    for (let index = 0; index < numbers.length; index++) {
        result += numbers[index] * numbers[index] 
    }
    return result
}

console.log(sumSquare(1,2,3,4,5,6))
console.log(sumSquare(1,2))