// PUZZLE INPUT RANGE
const floor = 265275
const ceiling = 781584

let currentPassword = floor

const checkForAdjecentIdenticalNumbers = (input) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            return true
        }
    }

    return false
}

const checkForIncreasingDigits = (input) => {
    for (let i = 0; i < 5; i++) {
        if (input[i + 1] >= input[i]) {
            continue
        } else {
            return false
        }
    }

    return true
}


const checkForExactDoubleDigits = (input) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            return true
        }
    }

    return false
}


const partB = (input) => {

    //PART B CHECKS FOR:
    //1. FOLLOWING DIGIT MUST BE THE SAME OR GREATER THAN LAST DIGIT
    //2. A PAIR MUST BE UNIQUE

    let previousDigit = -1
    let countDigits = [0,0,0,0,0,0,0,0,0,0]

    for (let i = 0; i < input.length; i++) {
        if (input[i] < previousDigit) {
            return false
        }

        previousDigit = input[i]
        countDigits[input[i]]++
    }

    for (let i = 0; i < countDigits.length; i++) {
        if (countDigits[i] == 2) {
            return true
        }
    }

    return false
}


let passwords_partA = []
let passwords_partB = []
while (currentPassword != ceiling) {

    //PART A
    if (checkForAdjecentIdenticalNumbers(currentPassword.toString()) && checkForIncreasingDigits(currentPassword.toString())) {
        passwords_partA.push(currentPassword)
    }

    //PART B
    if (partB(currentPassword.toString())) {
        passwords_partB.push(currentPassword)
    }

    currentPassword ++
}

console.log(passwords_partA.length)
console.log(passwords_partB.length)
