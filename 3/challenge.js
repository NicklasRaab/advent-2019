const fs = require('fs')
const firstWire  = fs.readFileSync('first_wire.txt').toString().trim().split(',')
const secondWire = fs.readFileSync('second_wire.txt').toString().trim().split(',')

const train1a  = fs.readFileSync('train_1_a.txt').toString().trim().split(',')
const train1b = fs.readFileSync('train_1_b.txt').toString().trim().split(',')

//INIT PARAMS
let grid = []
let wire = []
let direction = ''
let numberOfSteps = 0
let currX = 0
let currY = 0
let steps = 0

//INSERT ORIGO
wire.push({
    wire: 1,
    x: currX,
    y: currY,
    steps: steps
})

//FUNCTION FOR WALKING THE WIRE
const walkTheWire = function (wire, whichOne, direction, numberOfSteps) {
    if (direction === 'R') {
        for (let i = 0; i < numberOfSteps; i++) {
            currX ++
            steps ++
            wire.push({
                wire: 1,
                x: currX,
                y: currY,
                steps: steps
            })
        }
    } else if (direction === 'L') {
        for (let i = 0; i < numberOfSteps; i++) {
            --currX
            steps ++
            wire.push({
                wire: 1,
                x: currX,
                y: currY,
                steps: steps
            })
        }
    } else if (direction === 'U') {
        for (let i = 0; i < numberOfSteps; i++) {
            currY ++
            steps ++
            wire.push({
                wire: 1,
                x: currX,
                y: currY,
                steps: steps
            })
        }
    } else if (direction === 'D') {
        for (let i = 0; i < numberOfSteps; i++) {
            --currY
            steps ++
            wire.push({
                wire: 1,
                x: currX,
                y: currY,
                steps: steps
            })
        }
    }
}


// PROCESS FIRST WIRE
train1a.forEach((item) => {
    direction = item.charAt(0) //FIRST CHARACTER SETS DIRETION IN GRID
    numberOfSteps = item.slice(1) //AFTER FIRST CHARACTER GETS THE NUMBER OF STEPS

    walkTheWire(wire, 1, direction, numberOfSteps)
})

grid.push(wire)




// RESET INIT PARAMS
currX = 0
currY = 0
wire = []
steps = 0

//INSERT ORIGO
wire.push({
    wire: 2,
    x: currX,
    y: currY
})


//PROCESS SECOND WIRE
train1b.forEach((item) => {
    direction = item.charAt(0) //FIRST CHARACTER SETS DIRETION IN GRID
    numberOfSteps = item.slice(1) //AFTER FIRST CHARACTER GETS THE NUMBER OF STEPS

    walkTheWire(wire, 2, direction, numberOfSteps)
})

grid.push(wire)




//FIND WHERE WIRES CROSS
let crossings = []
grid[0].forEach((wire1) => {
    grid[1].forEach((wire2) => {
        if ((wire1.x !== 0 && wire1.y !== 0) || (wire2.x !== 0 && wire2.y !== 0)) {
            if (wire1.x === wire2.x && wire1.y === wire2.y) {
                crossings.push({
                    crossing:[wire1, wire2]
                })
            }
        }
    })
})



//CALCULATE SHORTEST ROUTE TO INTERSECTION
let distances = []
let shortestSteps = []
crossings.forEach((itm) => {
    distances.push(Math.abs(itm.crossing[0].x) + Math.abs(itm.crossing[0].y))
    shortestSteps.push(itm.crossing[0].steps + itm.crossing[1].steps)
})

//DISPLAY RESULTS
//FIRST numberOfSteps IN SORTED ARRAY IS THE ANSWER
console.log(distances.sort())
console.log(shortestSteps.sort())
