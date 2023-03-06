// 1- We need a function that can transform a number into a string.
function transformToText(n) {
    return n.toString()
}
var num = 10

console.log(transformToText(num))
// 2- make a function that sum the all numbers of array except the highest and the lowest numbers.
var arr = [1, 2, 3, 4, 15, 6, 7, 8, 9, 10]

function getMax(list1) {
    var start = list1[0]
    for (var i in list1) {
        if (list1[i] > start) {
            start = list1[i];
        }
    }
    return start
}

function getMin(list1) {
    var start = list1[0]
    for (var i in list1) {
        if (list1[i] < start) {
            start = list1[i];
        }
    }
    return start
}
console.log(getMax(arr))
console.log(getMin(arr))

function sumArrayTruncateMINMAX(a) {
    var result = 0
    for (var i in a) {
        if (a[i] != getMax(a) && a[i] != getMin(a)) {
            result += a[i]
        }
    }
    return result
}
console.log(sumArrayTruncateMINMAX(arr))

// 3-given random non-negative number we want to split this number and reverse it at array .
// input: 589647 
// output: ["5","8","9","6","4","7"]

function toStringAndReverse(number) {
    return number.toString().split("").reverse()
}

console.log(toStringAndReverse(589647))

// 4- Write a function to find the area of a given Rectangle.

function areaOfRectangle(l, w) {
    return l * w
}

console.log(areaOfRectangle(10, 50))

// 5- Write a function to reverse a number .
// input : 123 // output: 321

function numberReverse(number) {
    return Number(number.toString().split("").reverse().join(""))
}

console.log(numberReverse(123))

// 6- Write a function to find the count of a letter in a string.
// input:letterCount("Connect",'c') // output :2
function countOccurancies(sentence, char) {
    var count = 0
    for (var i in sentence) {
        if (sentence[i].toLowerCase() == char.toLowerCase()) {
            count += 1
        }
    }
    return count
}

console.log(countOccurancies('Connect', 'c'))

// 7- make an account on hackerrank website.
// https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
// and solve problems :
//  day0: hello world =====> Done
//  day0:data types   =====> Done
//  day1:arithmetic operators =====> Done
//  day1:functions  =====> Done
//  all of day2 =====> Working In Progress
//  day3:arrays  =====> Done