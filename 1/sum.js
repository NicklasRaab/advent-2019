const fs = require('fs')

function calcFuelWeight(moduleFuel) {
    let nextValue = Math.floor(moduleFuel / 3) - 2

    if (nextValue > 0) {
        return nextValue + calcFuelWeight(nextValue)
    } else {
        return 0;
    }
}

let fuelWeight

let fuel = fs.readFileSync('values.txt').toString().trim().split('\n').reduce((acc, current) => {
    fuelWeight = Math.floor(current / 3) - 2
    fuelWeight += calcFuelWeight(fuelWeight)
    return acc + fuelWeight
}, 0)

console.log(fuel)
