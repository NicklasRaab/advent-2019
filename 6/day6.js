const fs = require('fs')
const Planet = require('./planet')
const Galaxy = require('./galaxy')

let planetMap = fs.readFileSync('puzzleinput.txt').toString().trim().split('\n')
// let planetMap = fs.readFileSync('testinput.txt').toString().trim().split('\n')
// let planetMap = fs.readFileSync('testinput_B.txt').toString().trim().split('\n')
let planetMapArray = []

// split text ABC)DEF to array of arrays [[ABC,DEF],[GHI,JKL]]
for (let i = 0; i < planetMap.length; i++) {
    planetMapArray.push(planetMap[i].split(')'))
}

// handling \r\n
for (let i = 0; i < planetMapArray.length; i++) {
    planetMapArray[i][1] = planetMapArray[i][1].replace( /[\r\n]+/gm,"")
}

let planets = new Galaxy()
for (let i = 0; i < planetMapArray.length; i++) {
    if (!planets.planetExist(planetMapArray[i][0])) {
        planets.addPlanet(new Planet(planetMapArray[i][0]))
    }
    if (!planets.planetExist(planetMapArray[i][1])) {
        planets.addPlanet(new Planet(planetMapArray[i][1]))
    }

    planets.getPlanet(planetMapArray[i][1]).addOrbit(planetMapArray[i][0])
}

// //part A
console.log('counting...')
console.log('part A:', planets.countOrbits())

//part B
console.log('part B: ', planets.pathBetweenPlanets('YOU', 'SAN'))
